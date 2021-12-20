import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import NestedRouter from "./../core/components/NestedRouter/NestedRouter";

// interfaces
import { RootRouterProps } from "./RootRouter.interfaces";

export default class RootRouter extends React.Component<RootRouterProps> {
    render(): React.ReactNode {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <NestedRouter routes={this.props.routes} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}
