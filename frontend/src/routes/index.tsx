// frontend/src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Layout from '../components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'add-book',
        element: <AddBook />
      }
    ]
  }
]);