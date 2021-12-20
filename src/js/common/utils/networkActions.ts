import { Dispatch } from "react";
import { NetworkActionType } from "./networkReducer";

export function addRequest(request: any) {
    return async function(dispatch: Dispatch<NetworkActionType>) {
        dispatch({
            type: "ADD_REQUEST",
            requestKey: request.key,
            source: request.source
        });
    }
}