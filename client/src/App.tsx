import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ArticlePage from "@/pages/article";
import ArticlesPage from "@/pages/articles";
import ThoughtPage from "@/pages/thought";
import ThoughtsPage from "@/pages/thoughts";
import PlaylistPage from "@/pages/playlist";
import LearnPage from "@/pages/learn";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/not-found";
import PremiumParticleSystem from "./components/three/PremiumParticleSystem";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route path="/thoughts" component={ThoughtsPage} />
      <Route path="/thought/:id" component={ThoughtPage} />
      <Route path="/learn" component={LearnPage} />
      <Route path="/course/:id" component={PlaylistPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark relative overflow-hidden">
          {/* Premium Three.js Particle Background */}
          <PremiumParticleSystem particleCount={2500} />
          
          {/* Premium Background Gradients */}
          <div className="fixed inset-0 -z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-30" />
          </div>

          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
