import Home from "./Pages/Home/Home.tsx";
import Events from "./Pages/Events/Events.tsx";
import Login from "./Pages/Login/Login.tsx";
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
    path:"/events",
    element:<Events/>
  }
]);
function App() {
  return (<RouterProvider router={router}/>);
}
export default App;
