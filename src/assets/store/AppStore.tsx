import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./Slices/navigationSlice"
import alertReducer from "./Slices/AlertSlice"
import userReducer from "./Slices/userSlice"
import flightSearchInputsReducer from "./Slices/flightSearchInputsSlice"


export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        alert: alertReducer,
        user: userReducer,
        flightSearchInputs: flightSearchInputsReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


