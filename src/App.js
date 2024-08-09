import "./App.css";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Registration /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />{" "}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
            maxWidth: "500px",
          },
        }}
      />
    </>
  );
}

export default App;
