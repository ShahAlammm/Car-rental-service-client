import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Page/Home/HomePage";
import MainLayout from "../components/Layout/MainLayout";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignIn from "../Page/SignIn/SignIn";
import AllCars from "../Page/AllCars/AllCars";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "allCars",
                element: <AllCars />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <SignIn />,
    }
]);

export default router;