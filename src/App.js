import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
