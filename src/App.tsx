
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import { ContactInfoBar } from "@/features/contact";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Content component to wrap the main content with transitions
const Content = () => {
  return (
    <div className="flex-grow">
      <PageTransition>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Content />
          </main>
          <div className="relative">
            <ContactInfoBar />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
