import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "programs", element: <div>Programs</div>},
        ],
        errorElement: <PageNotFound/>
    }
]);

export default router;
