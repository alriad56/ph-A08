import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import HomePage from "../Pages/HomePage";
import AppsPage from "../Pages/AppsPage";
import AppDetailsPage from "../Pages/AppDetailsPage";
import InstallationPage from "../pages/InstallationPage";
import ErrorPage from "../Pages/ErrorPage";
import apps from "../data/apps.json";

// Loader for home page - returns first 8 apps
function homeLoader() {
  return { apps: apps.slice(0, 8), totalApps: apps.length };
}

// Loader for all apps page
function appsLoader() {
  return { apps };
}

// Loader for app details page
function appDetailsLoader({ params }) {
  const app = apps.find((a) => a.id === Number(params.id));
  if (!app) {
    throw new Response("App not found", { status: 404 });
  }
  return { app };
}

// Loader for installation page
function installationLoader() {
  return {};
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "apps",
        element: <AppsPage />,
        loader: appsLoader,
      },
      {
        path: "apps/:id",
        element: <AppDetailsPage />,
        loader: appDetailsLoader,
      },
      {
        path: "installation",
        element: <InstallationPage />,
        loader: installationLoader,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;