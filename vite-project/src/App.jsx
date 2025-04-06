import Home from "./Pages/Home/Home.tsx";
import Events from "./Pages/Events/Events.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Admission from "./Pages/Admission/Admission.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/Events",
    element:<Events/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/Admission",
    element:<Admission/>
  },
  {
    path:"/Dashboard",
    element:<Dashboard/>
  },
]);
function App() {
  return (<RouterProvider router={router}/>);
}
export default App;
