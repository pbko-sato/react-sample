import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { ContextsProvider } from "contexts/ContextsProvider";
import { Layout } from "layout/Layout";
import { Router } from "router/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextsProvider>
        <Layout>
          <Router />
        </Layout>
      </ContextsProvider>
    </BrowserRouter>
  </StrictMode>
);
