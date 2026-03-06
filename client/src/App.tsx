import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Manpower from "@/pages/Manpower";
import Hotel from "@/pages/Hotel";
import Restaurant from "@/pages/Restaurant";
import Achievements from "@/pages/Achievements";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/manpower" component={Manpower} />
        <Route path="/projects" component={Projects} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;