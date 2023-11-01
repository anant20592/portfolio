import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Work from "./components/Work";
import Connect from "./components/Connect";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/work",
        Component: Work,
      },
      {
        path: "/projects",
        Component: Work,
      },
      {
        path: "/connect",
        Component: Connect,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
