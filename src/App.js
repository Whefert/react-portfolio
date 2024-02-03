import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Pages/Home";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
);

const router = createHashRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
