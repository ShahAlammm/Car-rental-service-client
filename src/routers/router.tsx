import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Page/Home/HomePage";
import MainLayout from "../components/Layout/MainLayout";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignIn from "../Page/SignIn/SignIn";
import AllCars from "../Page/AllCars/AllCars";
import Details from "../Page/Details/Details";
import Booking from "../Page/Booking/Booking";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Profile from "../Dashboard/Profile/Profile";
import ErrorPage from "../Page/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
            {
                path: "details",
                element: <Details />,
            },
            {
                path: "booking",
                element: <Booking />,
            }

        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <SignIn />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Profile />,
            },
            {
                path: "booking",
                element: <Booking />,
            }

        ],
    }
]);

export default router;