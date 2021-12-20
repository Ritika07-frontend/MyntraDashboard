import { RouteConfigParam } from "./../../common/resources/RouteResources";
import { RouteProps } from "react-router-dom";

export interface RootRouterProps extends RouteProps {
    routes: RouteConfigParam[];
}
