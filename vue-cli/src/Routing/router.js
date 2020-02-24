import User from "./components/user/User.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export const routes = [
  {
    path: "",
    components: {
      default: Home,
      "header-top": Header
    },
    name: "Home"
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "editUser" }
    ]
  },
  {
    path: "/redirect-me",
    redirect: { name: "Home" }
  },
  { path: "*", redirect: "/" }
];
