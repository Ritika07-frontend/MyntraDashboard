import { ActionType } from "../common/resources/redux/types";

interface ReducerState {
    categories: {},
    brand: {},
    price: {},
    color: {},
}

export default function reducer(
    state: ReducerState = {
        categories: {},
        brand: {},
        price: {},
        color: {},
    },
    action: ActionType
): ReducerState {
    switch (action.type) {
        case "SET_CATEGORIES": {
            return { ...state, categories: action.payload };
        }
        case "SET_BRAND": {
            return { ...state, brand: action.payload };
        }
        case "SET_PRICE": {
            return { ...state, price: action.payload };
        }
        case "SET_COLOR": {
            return { ...state, color: action.payload };
        }
    }
    return state;
}