import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  const currentUser = true;
  const ProtectedRoute = ({ children }) => {
   
    if(!currentUser){
    return <Navigate to="/login" />
  }
    return children
  }

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="flex">
          <LeftBar />
          <div style={{ flex: 6 }}>
          <Outlet />            
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
      <Layout />
      </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
