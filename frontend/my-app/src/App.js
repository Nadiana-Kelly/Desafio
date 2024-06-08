import { useState, useEffect } from "react";
import api from "./services/api";
import Table from "./views/table";
import CreateSupplier from "./views/create";
import CreateView from "./views/create2"

import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/list",
    element: <Table/>,
  },
  {
    path: "/create",
    element: <CreateView/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />

      {/* <Table suppliers={suppliers} />
      <CreateSupplier onSupplierAdded={handleSupplierAdded} /> */}
    </div>
  );
}

export default App;
