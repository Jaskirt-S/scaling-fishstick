import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Applications from './pages/Applications';
import Leaves from './pages/Leaves';
import NewUsers from './pages/NewUsers';
import Event from './pages/Event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> }, // default route "/"
      { path: 'Dashboard', element: <Dashboard/> },
      { path: 'users', element: <Users /> },
      { path: 'applications', element: <Applications /> },
      { path: 'leaves', element: <Leaves /> },
      { path: 'newusers',element:<NewUsers/>},
      { path: 'event',element:<Event/>}
    ],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
