import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./navigation/navigationSlice"
import alertReducer from "./AlertSlice"
import userReducer from "./user/userSlice"


export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        alert: alertReducer,
        user: userReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


