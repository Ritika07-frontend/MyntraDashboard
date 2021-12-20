
export interface NetworkActionType {
    type: string;
    requestKey: string;
    source: any;
}

export default function reducers(state: any = {

}, action: NetworkActionType) {
    switch(action.type) {
        case "ADD_REQUEST": {
            const newState = {
                ...state
            };

            newState[action.requestKey] = action.source;
            return {...state, ...newState};
        }
    }

    return state;
}