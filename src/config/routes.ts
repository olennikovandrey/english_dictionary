import { IRoute } from "../interfaces/interfaces";
import Homepage from "../components/Homepage/Homepage";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
    exact: true
  },
  {
    path: "/:word",
    name: "ResultPage",
    component: Homepage,
    exact: true
  }
];

export default routes;
