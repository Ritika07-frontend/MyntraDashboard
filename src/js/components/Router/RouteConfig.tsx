import Layout from "../App/AppLayout";
import { RouteConfigParam } from "./../../common/resources/RouteResources";

const routeFunction = () => {
    const Routes: RouteConfigParam[] = [
        {
            path: `/`,
            exact: false,
            component: Layout,
            routes: [

            ]
        }
    ];
    return Routes
}

export default routeFunction;
