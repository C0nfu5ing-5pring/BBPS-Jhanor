import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home";
import Explore from "./components/Explore.jsx";
import Gallery from "./components/Gallery.jsx";
import Results from "./components/Results.jsx";
import Magazine from "./components/Magazine.jsx";
import Contact from "./components/Contact.jsx";
import Career from "./components/Career.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="cbse-results" element={<Results />} />
      <Route path="magazine" element={<Magazine />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="career" element={<Career />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
