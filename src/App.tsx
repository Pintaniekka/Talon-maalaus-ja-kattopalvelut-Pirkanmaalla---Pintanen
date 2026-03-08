import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

// Lazy-loaded subpages
const KattopalvelutPinnoitus = lazy(() => import("./pages/KattopalvelutPinnoitus"));
const KattopalvelutPuhdistus = lazy(() => import("./pages/KattopalvelutPuhdistus"));
const KattopalvelutPinnoitusCity = lazy(() => import("./pages/KattopalvelutPinnoitusCity"));
const KattopalvelutPuhdistusCity = lazy(() => import("./pages/KattopalvelutPuhdistusCity"));
const TalonMaalaus = lazy(() => import("./pages/TalonMaalaus"));
const TalonMaalausCity = lazy(() => import("./pages/TalonMaalausCity"));
const ToimintaAlueet = lazy(() => import("./pages/ToimintaAlueet"));
const AlueCity = lazy(() => import("./pages/AlueCity"));
const Referenssit = lazy(() => import("./pages/Referenssit"));
const Hinnat = lazy(() => import("./pages/Hinnat"));
const Meista = lazy(() => import("./pages/Meista"));
const ImageTest = lazy(() => import("./pages/ImageTest"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
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
              <Route path="/alue/:city" element={<AlueCity />} />
              <Route path="/referenssit" element={<Referenssit />} />
              <Route path="/hinnat" element={<Hinnat />} />
              <Route path="/meista" element={<Meista />} />
              <Route path="/image-test" element={<ImageTest />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
