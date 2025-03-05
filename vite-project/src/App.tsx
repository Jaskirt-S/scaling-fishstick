import Home from "./Pages/Home/Home.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Events from "./Pages/Events/Events.tsx";
import Login from "./Pages/Login/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login></Login>,
    },
    {
      path: "*",
      element: <Home></Home>,
    },
    {
      path:"/Events",
      element:<Events></Events>
    }
  ]);
  return (
    <div>
      <Navbar></Navbar>
      <RouterProvider router={router} />
      <Footer></Footer>
    </div>
  );
}
export default App;
