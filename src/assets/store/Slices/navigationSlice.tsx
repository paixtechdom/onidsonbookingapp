
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type NavInterface = {
    showNavbar: boolean,
    currentNav: number,
    currentDropDownIndex: number,
    scrolledDown: boolean,
    currentDropDown: string;
    currentFlightId: string;

}


const initialState: NavInterface  = {
    showNavbar: false,
    currentNav: 0,
    currentDropDownIndex: 0,
    scrolledDown: false,
    currentDropDown: "",
    currentFlightId: ""    
}

 

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleShowNav: (state) => {
            state.showNavbar = !state.showNavbar;
        },
        setCurrentNav: (state, action: PayloadAction<number>) => {
            state.currentNav = action.payload
        },
        setCurrentDropDownIndex: (state, action: PayloadAction<number>) => {
            state.currentDropDownIndex = action.payload
        },
        toggleScrolledDown: (state, action: PayloadAction<boolean>) => {
            state.scrolledDown = action.payload
        },
        setCurrentDropDown: (state, action: PayloadAction<string>) => {
            state.currentDropDown = action.payload
        },
        setCurrentFlightId: (state, action: PayloadAction<string>) => {
            state.currentFlightId = action.payload
        },
    }
})


export const { toggleShowNav, setCurrentNav, setCurrentDropDownIndex, toggleScrolledDown, setCurrentDropDown, setCurrentFlightId } = navigationSlice.actions


export default navigationSlice.reducer