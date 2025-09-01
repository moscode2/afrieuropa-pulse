import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/NewsPage";
import PolicyMigrationPage from "./pages/PolicyMigrationPage";
import CultureLifestylePage from "./pages/CultureLifestylePage";
import ProfilesVoicesPage from "./pages/ProfilesVoicesPage";
import TravelMobilityPage from "./pages/TravelMobilityPage";
import BusinessJobsPage from "./pages/BusinessJobsPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import EditorialPolicyPage from "./pages/EditorialPolicyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/policy-migration" element={<PolicyMigrationPage />} />
          <Route path="/culture-lifestyle" element={<CultureLifestylePage />} />
          <Route path="/profiles-voices" element={<ProfilesVoicesPage />} />
          <Route path="/travel-mobility" element={<TravelMobilityPage />} />
          <Route path="/business-jobs" element={<BusinessJobsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
