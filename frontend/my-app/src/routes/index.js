import TableView from "../views/table";
import CreateView from "../views/create"
import UpdateView from "../views/update"
import DetailView from "../views/detail"
import Home from "../views/home";
import AppContainer from "../views/app";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/list",
                element: <TableView/>,
            },
            {
                path: "/create",
                element: <CreateView/>,
            },
            {
                path: "/update/:id",
                element: <UpdateView/>,
            },
            {
                path: "/detail/:id",
                element: <DetailView/>,
            },
        ],
    },
]);

export default router;