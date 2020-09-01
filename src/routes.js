import Home from "@/components/Home";
import Header from "@/components/Header";

// Lazy Load Components
const User = () =>
  import(/* webpackChunkName: "group-foo" */ "./components/User/User");
const UserStart = () =>
  import(/* webpackChunkName: "group-foo" */ "@/components/User/UserStart");
const UserDetail = () =>
  import(/* webpackChunkName: "group-foo" */ "@/components/User/UserDetail");
const UserEdit = () =>
  import(/* webpackChunkName: "group-foo" */ "@/components/User/UserEdit");

export const routes = [
  { path: "/", components: { default: Home, "header-top": Header } },
  {
    path: "/user",
    components: { default: User, "header-bottom": Header },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        props: true,
        beforeEnter: (to, from, next) => {
          console.log("Inside Route Guard", to, from);
          next();
        },
      },
      { path: ":id/edit", component: UserEdit, name: "editUser" },
    ],
  },
  { path: "*", redirect: "/" },
];
