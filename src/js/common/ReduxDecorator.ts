import { connect as reduxConnect } from "react-redux";
import { Dispatch, ComponentType } from "react";
import store from "./../store";

import {
  MapDispatchToPropsType,
  ActionType,
  StoreType
} from "./resources/redux/types";

// connect decorator
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function connect(cb: (store: StoreType) => StoreType): any {
  // map state to props
  function mapStateToProps(): StoreType {
    const nextProps = cb(store.getState());
    return nextProps;
  }

  // map dispatch to props
  function mapDispatchToProps(
    dispatch: Dispatch<ActionType>
  ): MapDispatchToPropsType {
    return {
      dispatch: (action: ActionType): void => {
        dispatch(action);
      }
    };
  }

  return (target: ComponentType): ComponentType => {
    // reduxConnect will subscribe the store
    // for the returned values in callback
    return reduxConnect(mapStateToProps, mapDispatchToProps)<ComponentType>(
      target
    );
  };
}
