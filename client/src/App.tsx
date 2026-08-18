import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AboutPage, ArticlePage, FaqPage, FeaturesPage, HomePage, LegalPage, PricingPage, ResourcesPage } from "./pages/MarketingPages";
import { ContactDirectoryPage } from "./pages/ContactDirectoryPage";
import { FooterLandingPage, UseCaseDetailPage, UseCasesPage } from "./pages/UseCasePages";
import { HowItWorksPage } from "./pages/HowItWorksPage";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/features"} component={FeaturesPage} />
      <Route path={"/how-it-works"} component={HowItWorksPage} />
      <Route path={"/use-cases"} component={UseCasesPage} />
      <Route path={"/use-cases/:slug"} component={UseCaseDetailPage} />
      <Route path={"/pricing"} component={PricingPage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/contact"} component={ContactDirectoryPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/resources/:slug"} component={ArticlePage} />
      <Route path={"/faq"} component={FaqPage} />
      <Route path={"/integrations"}>{() => <FooterLandingPage page="integrations" />}</Route>
      <Route path={"/academy"}>{() => <FooterLandingPage page="academy" />}</Route>
      <Route path={"/careers"}>{() => <FooterLandingPage page="careers" />}</Route>
      <Route path={"/brand-guidelines"}>{() => <FooterLandingPage page="brand-guidelines" />}</Route>
      <Route path={"/privacy-policy"}>{() => <LegalPage title="Privacy Policy" />}</Route>
      <Route path={"/terms-of-service"}>{() => <LegalPage title="Terms of Service" />}</Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
