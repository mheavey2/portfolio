import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./components/App/App.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Home from "./components/Home/Home.jsx";
import { AnalyticsProvider } from "@keiko-app/react-google-analytics";

const analyticsConfig = {
  measurementId: import.meta.env.VITE_APP_GA4_MEASUREMENT_ID,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<ContactForm />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnalyticsProvider config={analyticsConfig}>
      <RouterProvider router={router}></RouterProvider>
    </AnalyticsProvider>
  </StrictMode>
);
