import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";


import Register from './pages/register.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/register"
            element={<Register />}
        />
    )
)


export default router;