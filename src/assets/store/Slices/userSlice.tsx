// store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// to get all journeys, 
// fetch all bookings wwhich contains the id of the user and add the id from the journey to the booked journey
    

type UserDetailsInterface = {
    id: string,
    first_name: string,
    last_name: string,
    gender: string,
    email: string,
    phone_number: string
}

type UserInterface = {
    userDetails: UserDetailsInterface
    bookedJourneys: string[],
    sessionToken: string | null
}


const initialState: UserInterface  = {
    userDetails: { 
        id: "",
        first_name: "J",
        last_name: "",
        gender: "",
        email: "",
        phone_number: ""
    },
    bookedJourneys: ["lagos-abuja", "abuja-port"],
    sessionToken: null
}

 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserDetailsInterface>) => {
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