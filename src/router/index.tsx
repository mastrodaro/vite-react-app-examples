import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage";
import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import PageLocationState from "@/pages/PageLocationState";
import PagePathParams from "@/pages/PagePathParams";
import PathParamsDetails from "@/pages/PagePathParams/PathParamsDetails";
import PageProgrammaticNavigation from "@/pages/PageProgrammaticNavigation";
import PageQueryParams from "@/pages/PageQueryParams";

const PageLazyLoad = React.lazy(() => import("@/pages/PageLazyLoad"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page-path-params",
        element: <PagePathParams />,
        children: [
          {
            path: ":id",
            element: <PathParamsDetails />,
          },
        ],
      },
      {
        path: "page-query-params",
        element: <PageQueryParams />,
      },
      {
        path: "page-location-state",
        element: <PageLocationState />,
      },
      {
        path: "page-programmatic-navigation",
        element: <PageProgrammaticNavigation />,
      },
      {
        path: "page-lazy-load",
        element: (
          <React.Suspense fallback={<>...</>}>
            <PageLazyLoad />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
