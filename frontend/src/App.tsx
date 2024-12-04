// frontend/src/App.tsx
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './styles/main.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;