import { Dispatch } from "react";
import { ActionType } from "../common/resources/redux/types";

export const setCategories = (value: any) => {
    return async function (dispatch: Dispatch<ActionType>) {
        dispatch({
            type: "SET_CATEGORIES",
            payload: value
        })

    }
}

export const setBrand = (value: any) => {
    return async function (dispatch: Dispatch<ActionType>) {
        dispatch({
            type: "SET_BRAND",
            payload: value
        })

    }
}

export const setPrice = (value: any) => {
    return async function (dispatch: Dispatch<ActionType>) {
        dispatch({
            type: "SET_PRICE",
            payload: value
        })

    }
}

export const setColor = (value: any) => {
    return async function (dispatch: Dispatch<ActionType>) {
        dispatch({
            type: "SET_COLOR",
            payload: value
        })

    }
}