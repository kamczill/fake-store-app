import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './routes/Home';
import Products from './routes/Products';
import ProductDetails from './routes/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "products/:id",
        element: <ProductDetails/>,
      },
    ],
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
