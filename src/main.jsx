import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/ExportComponents.jsx";
import {
  HomePage,
  NotFoundPage,
  BookDetailsPage,
  PaymentPage,
} from "./pages/ExportPages.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      { path: "/book-details-page", element: <BookDetailsPage /> },
      { path: "payment-page", element: <PaymentPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
