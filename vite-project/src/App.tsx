import Home from "./Pages/Home/Home.tsx";
import Events from "./Pages/Events/Events.tsx";
import Login from "./Pages/Login/Login.tsx";
import Register from "./Pages/Register/Register.tsx";
import Admission from "./Pages/Admission/Admission.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
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
