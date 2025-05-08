import Home from "./Pages/Home/Home.jsx";
import Events from "./Pages/Events/Events.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Admission from "./Pages/Admission/Admission.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Fpassword from "./Pages/fpassword/fpassword.jsx";
import Resetpass from "./Pages/Resetpass/Resetpass.jsx";
import Layout from "./Pages/Layout.jsx";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'Admission', element: <Admission /> },
      { path: 'login',element:<Login/>},
      { path: 'Register',element:<Register/>},
      { path: 'Dashboard',element:(
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      )},
      { path: 'fpassword',element:<Fpassword/>},
      { path: 'Resetpass',element:<Resetpass/>},

    ],

  },
]);
function App() {
  return (<RouterProvider router={router}/>);
}
export default App;
