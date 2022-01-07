import {applyMiddleware, combineReducers, createStore} from "redux";
import {ListFilmsReducer} from "./ListFilmsReducer";
import thunkMiddle from "redux-thunk";








let rootReducer = combineReducers({
    ListFilmsPage:ListFilmsReducer
})

export type StoreType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddle))

