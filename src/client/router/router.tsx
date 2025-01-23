import { createBrowserRouter } from "react-router-dom";
import {RegistrationForm} from "../components/widgets/Form/RegistrationForm";
import {LoginForm} from "../components/widgets/Form/LoginForm";
import App from "../App/App";
import HomePage from "../pages/HomePage/HomePage";
import TierForm from "../components/widgets/Form/TierForm";

const loginRouting = [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/login',
        element: <LoginForm/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/reg',
        element: <RegistrationForm/>
    },
    {
        path: '/homepage',
        element: <HomePage/>
    },
    {
        path: '/create',
        element: <TierForm/>
    }
]

export const router = createBrowserRouter(loginRouting, {basename: '/'})