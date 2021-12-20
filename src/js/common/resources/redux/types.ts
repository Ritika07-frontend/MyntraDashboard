import { Dispatch } from "react";
import { Dictionary } from "../lang/object/Dictionary";

// api type action
export type ApiTypeAction = {
  type: string;
  payload: Dictionary;
  loader: boolean;
  error: Dictionary;
};

// payload type action
export type PayloadTypeAction = {
  type: string;
  payload: Dictionary;
};

// action type
export type ActionType = ApiTypeAction | PayloadTypeAction;

// store type
export type StoreType = Dictionary | undefined;

// Redux Props types
export interface ReduxPropsType extends Dictionary {
  dispatch: Dispatch<(dispatch: Dispatch<ActionType>) => void>;
}

// Map dispatch to props return type
export interface MapDispatchToPropsType {
  dispatch: (action: ActionType) => void;
}
