// Layouts
import { HeaderOnly } from "../components/Layout";

// Pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";

// Public routers
// --- Dành cho những page ai cũng có thể xem được
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
    path: "/:nickname",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
];
// Private routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
