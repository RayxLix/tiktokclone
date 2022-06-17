import { HeaderOnly } from "~/components/LayOut";

import Following from "../pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    LayOut: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    LayOut: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };