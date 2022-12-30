import { combineReducers } from "redux";

import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import getProjectReducer from "./reducers/project";

const reducers = combineReducers({
    Project: getProjectReducer
})

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();


export default store