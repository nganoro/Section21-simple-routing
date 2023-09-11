import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  /** anything that starts with a forward slash is an absolute path 
   * if you're doing a relative path, you won't need the forward slash
  */
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> }, // index: true
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ],
  },
  {}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
