import {ActionTypes} from "./redux-store";


let initialState: InitialStateType = {

}
export const registeredReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_REGISTERED":
            return state
        default:
            return state
    }
}

//action
export const registered = () => {
    return {
        type: "SET_REGISTERED"
    } as const
}

//thunk
/*export const initializeApp = (): ThunksType => async (dispatch) => {
    let promise = dispatch(getAutUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
    /!*await dispatch(getAutUserData())
    dispatch(initializedSuccess())*!/
}*/
//type
export type InitialStateType = {

}
