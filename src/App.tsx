import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import KattopalvelutPinnoitus from "./pages/KattopalvelutPinnoitus";
import KattopalvelutPuhdistus from "./pages/KattopalvelutPuhdistus";
import KattopalvelutPinnoitusCity from "./pages/KattopalvelutPinnoitusCity";
import KattopalvelutPuhdistusCity from "./pages/KattopalvelutPuhdistusCity";
import TalonMaalaus from "./pages/TalonMaalaus";
import TalonMaalausCity from "./pages/TalonMaalausCity";
import ToimintaAlueet from "./pages/ToimintaAlueet";
import Referenssit from "./pages/Referenssit";
import Meista from "./pages/Meista";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/kattopalvelut/pinnoitus" element={<KattopalvelutPinnoitus />} />
            <Route path="/kattopalvelut/pinnoitus/:city" element={<KattopalvelutPinnoitusCity />} />
            <Route path="/kattopalvelut/puhdistus" element={<KattopalvelutPuhdistus />} />
            <Route path="/kattopalvelut/puhdistus/:city" element={<KattopalvelutPuhdistusCity />} />
            <Route path="/talon-maalaus" element={<TalonMaalaus />} />
            <Route path="/talon-maalaus/:city" element={<TalonMaalausCity />} />
            <Route path="/toiminta-alueet" element={<ToimintaAlueet />} />
            <Route path="/referenssit" element={<Referenssit />} />
            <Route path="/meista" element={<Meista />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
