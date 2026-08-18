import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AboutPage, ArticlePage, ContactPage, FaqPage, FeaturesPage, HomePage, LegalPage, PricingPage, ResourcesPage } from "./pages/MarketingPages";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/features"} component={FeaturesPage} />
      <Route path={"/pricing"} component={PricingPage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/resources/:slug"} component={ArticlePage} />
      <Route path={"/faq"} component={FaqPage} />
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
