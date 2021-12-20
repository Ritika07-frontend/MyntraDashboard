import { ReactType } from "react";
import { LocationDescriptor } from "history";

export interface RouteConfigParam {
  readonly path: string;
  readonly exact: boolean;
  readonly redirectFrom?: string;
  readonly redirectTo?: LocationDescriptor;
  readonly component?: ReactType;
  readonly routes?: RouteConfigParam[];
}