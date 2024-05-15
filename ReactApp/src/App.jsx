
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { routes } from "./routes/routes";
import { createElement } from "react";

function App() {

  const router = createBrowserRouter(
    routes.map((route) => ({
      ...route,
      element : createElement(route.element),
      children: route.children?.map(child => ({
        ...child,
      element:createElement(child.element),
      }))
    }))
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
