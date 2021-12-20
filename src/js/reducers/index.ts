import { combineReducers } from "redux";
import sideNav from './sidenavReducer';
import network from "./../common/utils/networkReducer";
import { ActionType, StoreType } from "../common/resources/redux/types";

type AppReducer<T> = (state: T, action: ActionType) => T;

const appReducer: AppReducer<StoreType> = combineReducers<StoreType>({
    sideNav,
    network
});

const rootReducer = (state: StoreType, action: ActionType): StoreType => {
    if (action.type === "USER_LOGOUT") {
        // Object.keys(state).forEach(key => {
        //     persistState.removeItem(`persist:${key}`);
        // });
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
