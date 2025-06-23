import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import MockPage from "./Components/MockPage";
import Report from "./Components/Report";

// ✅ Layout component with Navbar and <Outlet />
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// ✅ Route config with nested children inside layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar included here
    children: [
      { index: true, element: <Navigate to="/home" /> }, // Redirect / to /home
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "dashboard",
        element: <Dashboard />, // Dashboard must use <Outlet /> for nested routing
        children: [
          { path: "mock", element: <MockPage /> },
          { path: "report", element: <Report /> },
        ],
      },
      {
        path: "/student/:id",
        element: (
          <div>
            <Navbar />
            <Dashboard />
          </div>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
