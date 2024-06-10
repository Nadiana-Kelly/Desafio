import router from "./routes";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
