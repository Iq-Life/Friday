import {registered, registeredReducer} from "./registration-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";



export let reducersBatch = combineReducers({
    registeredPage : registeredReducer
})

export let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware))

//type
export type ThunksType = ThunkAction<void, AppStateType, unknown, ActionTypes>
export type AppStateType = ReturnType<typeof reducersBatch>
export type ActionTypes = ReturnType<typeof registered>
