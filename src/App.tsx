import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Laval from "./components/secteurs/Laval.tsx";
import Montreal from "./components/secteurs/Montreal.tsx";
import Repentigny from "./components/secteurs/Repentigny.tsx";
import Terrebonne from "./components/secteurs/Terrebonne.tsx";
import Mascouche from "./components/secteurs/Mascouche.tsx";
import Assomption from "./components/secteurs/Assomption.tsx";
import Lorraine from "./components/secteurs/Lorraine.tsx";
import BoisDesFilion from "./components/secteurs/BoisDesFilion.tsx";
import Boisbriand from "./components/secteurs/Boisbriand.tsx";
import Rosemere from "./components/secteurs/Rosemere.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Service Area Routes */}
          <Route path="/secteurs/laval" element={<Laval />} />
          <Route path="/secteurs/montreal" element={<Montreal />} />
          <Route path="/secteurs/terrebonne" element={<Terrebonne />} />
          <Route path="/secteurs/repentigny" element={<Repentigny />} />
          <Route path="/secteurs/mascouche" element={<Mascouche />} />
          <Route path="/secteurs/assomption" element={<Assomption />} />
          <Route path="/secteurs/boisbriand" element={<Boisbriand />} />
          <Route path="/secteurs/lorraine" element={<Lorraine />} />
          <Route path="/secteurs/rosemere" element={<Rosemere />} />
          <Route path="/secteurs/bois-des-filion" element={<BoisDesFilion />} />          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
