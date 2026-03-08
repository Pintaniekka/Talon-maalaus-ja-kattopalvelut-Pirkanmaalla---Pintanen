import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
const { Resend } = await import("npm:resend@2.0.0");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  priceEstimate?: string;
  calculatorDetails?: string;
}

const serviceLabels: Record<string, string> = {
  tiilikatto: "Tiilikaton pinnoitus",
  ulkomaalaus: "Ulkomaalaus",
  puhdistus: "Katon puhdistus",
  muu: "Muu",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, service, message, priceEstimate, calculatorDetails }: ContactForm = await req.json();

    // Validate
    if (!name || name.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Nimi on pakollinen" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (email && email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Virheellinen sähköposti" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const serviceLabel = serviceLabels[service] || service || "Ei valittu";

    const isCalculatorLead = !!priceEstimate || !!calculatorDetails;
    const subject = isCalculatorLead
      ? `Hintalaskuri: ${name} – ${serviceLabel}`
      : `Tarjouspyyntö: ${name} – ${serviceLabel}`;
    const heading = isCalculatorLead
      ? "Uusi hintalaskurin käyttäjä pintanen.fi-sivustolta"
      : "Uusi tarjouspyyntö pintanen.fi-sivustolta";

    const emailResponse = await resend.emails.send({
      from: "Pintanen.fi <noreply@pintanen.fi>",
      to: ["myynti@pintanen.fi"],
      replyTo: email || undefined,
      subject,
      html: `
        <h2>${heading}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Nimi</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Sähköposti</td><td style="padding:8px;">${email ? `<a href="mailto:${email}">${email}</a>` : "–"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Puhelin</td><td style="padding:8px;">${phone || "–"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Palvelu</td><td style="padding:8px;">${serviceLabel}</td></tr>
          ${priceEstimate ? `<tr><td style="padding:8px;font-weight:bold;">Hinta-arvio</td><td style="padding:8px;">${priceEstimate}</td></tr>` : ""}
          ${calculatorDetails ? `<tr><td style="padding:8px;font-weight:bold;">Laskurin tiedot</td><td style="padding:8px;">${calculatorDetails}</td></tr>` : ""}
        </table>
        ${message ? `<h3>Viesti</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    console.log("Email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
