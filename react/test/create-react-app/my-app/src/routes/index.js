import Menu1 from "../pages/Menu1";
import Menu2 from "../pages/Menu2";
import Menu3 from "../pages/Menu3";
import News from "../pages/Menu3/News";

const routes = [
  { path: "/menu1", element: <Menu1 /> },
  { path: "/menu2", element: <Menu2 /> },
  {
    path: "/menu3",
    element: <Menu3 />,
    children: [{ path: "news/:id/:title", element: <News /> }],
    // children: [{ path: "news", element: <News /> }],
  },
];

export default routes;
