// 가이드
import Guide from "../pages/guide/guide";
import Home from "../pages/home";
import Login from "../pages/login";
import Button from "../pages/guide/button";
import Form from "../pages/guide/form";

const Routes = [
  // 홈
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  // 로그인
  {
    name: "로그인",
    path: "/login",
    component: Login,
    auth: true,
  },
  // 가이드페이지
  {
    name: "Guide",
    path: "/guide",
    component: Guide,
  },
  {
    name: "Button",
    path: "/guide/button",
    component: Button,
  },
  {
    name: "Form",
    path: "/guide/form",
    component: Form,
  },
];
export default Routes;

