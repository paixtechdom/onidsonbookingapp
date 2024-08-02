// store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// to get all journeys, 
// fetch all bookings wwhich contains the id of the user and add the id from the journey to the booked journey
    

interface userDetailsInterface {
    id: string,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phoneNumber: string
}

interface userInterface {
    userDetails: userDetailsInterface
    bookedJourneys: string[],
    sessionToken: string | undefined
}


const initialState: userInterface  = {
    userDetails: { 
        id: "",
        firstName: "J",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: ""
    },
    bookedJourneys: ["lagos-abuja"],
    sessionToken: "undefined"
}

 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<userDetailsInterface>) => {
            state.userDetails = action.payload
        },
        setBookedJourneys: (state, action: PayloadAction<any[]>) =>{
            state.bookedJourneys = action.payload
        },
        setSessionToken: (state, action: PayloadAction<string>) => {
            state.sessionToken = action.payload
        }
    }
})


export const { setUserDetails, setBookedJourneys, setSessionToken } = userSlice.actions


export default userSlice.reducer