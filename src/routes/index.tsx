import NotFound from "@/pages/NotFound";
import React from "react";

const Home = React.lazy(() => import("@/pages/Home"));

export const routes = [
  {
    index: true,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "/category/mens-shirts",
    element: <div>men tshirt</div>,
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </React.Suspense>
    ),
  },
];
