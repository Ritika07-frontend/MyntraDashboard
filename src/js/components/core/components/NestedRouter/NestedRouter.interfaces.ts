import { RouteConfigParam } from "./../../../../common/resources/RouteResources";
import { RouteProps } from "react-router-dom";

export interface NestedRouterProps extends RouteProps {
  routes: RouteConfigParam[];
}
