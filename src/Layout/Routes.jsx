import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/auth/login";
import NotFound from "../UI/NotFound";
import ProductDetailsHome from "../pages/ProductDetails/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/product/:id",
                element: <ProductDetailsHome />
            }
        ]
    }, {
        path: "*",
        element: <NotFound />
    }
]);

export default router;