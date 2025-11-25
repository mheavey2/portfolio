import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../components/App/App.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Home from "../components/Home/Home.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<ContactForm />} />
    </Route>
  )
);
