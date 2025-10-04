import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import LoginPage from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Notes from "@/pages/Notes";
import Schedule from "@/pages/Schedule";
import Averages from "@/pages/Averages";
import { useState } from "react";

function Router() {
  const [, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    //todo: remove mock functionality
    console.log('Login attempt:', username, password);
    setIsLoggedIn(true);
    setLocation('/');
  };

  const handleLogout = () => {
    //todo: remove mock functionality
    console.log('Logout');
    setIsLoggedIn(false);
    setLocation('/login');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar onLogout={handleLogout} />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/notes" component={Notes} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/averages" component={Averages} />
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
