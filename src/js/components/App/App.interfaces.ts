import { RouteProps } from "react-router-dom";
import { ReduxPropsType } from "../../common/resources/redux/types";
import { RouteConfigParam } from "./../../common/resources/RouteResources";

// App Store props Interface
export interface AppStoreProps {

}

// App Props Interface
export interface AppProps extends RouteProps, ReduxPropsType, AppStoreProps {
  routes: RouteConfigParam[];
}
