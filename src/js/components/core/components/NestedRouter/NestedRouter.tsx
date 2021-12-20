import React, { ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";

// interfaces
import { NestedRouterProps } from "./NestedRouter.interfaces";
import { RouteConfigParam } from "./../../../../common/resources/RouteResources";

export default class NestedRouter extends React.Component<NestedRouterProps> {
  render(): React.ReactNode {
    return this.props.routes.map((v: RouteConfigParam) => {
      if (
        Object.prototype.hasOwnProperty.call(v, "redirectTo") &&
        Object.prototype.hasOwnProperty.call(v, "redirectFrom")
      ) {
        return (
          <Route
            key={v.path + "_k"}
            path={v.path}
            exact={v.exact}
            component={(): ReactElement => {
              return <Redirect to={v.redirectTo || ""} />;
            }}
          />
        );
      } else {
        return (
          <Route
            key={v.path + "_k"}
            path={v.path}
            exact={v.exact}
            render={(props: {}): ReactElement | null => {
              if (v.component) {
                return <v.component {...props} routes={v.routes} />;
              } else {
                return null;
              }
            }}
          />
        );
      }
    });
  }
}
