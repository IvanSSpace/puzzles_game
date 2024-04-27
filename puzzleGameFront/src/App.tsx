import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Index from './pages';
import Achievements from './pages/AchievementsPage';
import StorePage from './pages/StorePage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Index,
  },
  {
    path: '/store',
    Component: StorePage,
  },
  {
    path: '/achievements',
    Component: Achievements,
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
