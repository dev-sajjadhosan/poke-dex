import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home/home";
import { ThemeProvider } from "./components/custom_ui/theme-provider";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Toaster richColors />
      <HomePage />
    </ThemeProvider>
  </StrictMode>
);
