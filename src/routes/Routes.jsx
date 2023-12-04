import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ArtHome from "../pages/Home/ArtHome/ArtHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <ArtHome></ArtHome>,
      },
    ],
  },
]);

export default router;
