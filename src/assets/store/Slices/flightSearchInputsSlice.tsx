
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchInputsInterface = {
    from: string,
    to: string,
    no_of_adults: number,
    no_of_children: number,
    no_of_infants: number,
    tripType: string,
    class: string,
    return_date: any,
    takeoff_date: any,
    flexible_dates: boolean
}

// type searchInputInterface = {
//     flightSearchInputsDetails: SearchInputsInterface
// }


const initialState: SearchInputsInterface  = {
    from: "Abuja",
    to: "Epe",
    no_of_adults: 1,
    no_of_children: 0,
    no_of_infants: 0,
    tripType: "one-way",
    class: "Economy",
    return_date: 'new Date()',
    takeoff_date: 'new Date()',
    flexible_dates: false

}

 

const flightSearchInputsSlice = createSlice({
    name: "flightSearchInputs",
    initialState,
    reducers: {
        setFlightSearch_FromInput: (state, action: PayloadAction<any>) => {
            state.from = action.payload
        },
        setFlightSearch_ToInput: (state, action: PayloadAction<any>) => {
            state.to = action.payload
        },
        setFlightSearch_NoOfAdultsInput: (state, action: PayloadAction<any>) => {
            state.no_of_adults = action.payload
        },
        setFlightSearch_NoOfChildrenInput: (state, action: PayloadAction<any>) => {
            state.no_of_children = action.payload
        },
        setFlightSearch_NoOfInfantsInput: (state, action: PayloadAction<any>) => {
            state.no_of_infants = action.payload
        },
        setFlightSearch_TripTypeInput: (state, action: PayloadAction<any>) => {
            state.tripType = action.payload
        },
        setFlightSearch_ClassInput: (state, action: PayloadAction<any>) => {
            state.class = action.payload
        },
        setFlightSearch_TakeOffDateInput: (state, action: PayloadAction<any>) => {
            state.takeoff_date = action.payload
        },
        setFlightSearch_ReturnDateInput: (state, action: PayloadAction<any>) => {
            state.return_date = action.payload
        },
        setFlightSearch_FlexibleDateInput: (state, action: PayloadAction<any>) => {
            state.flexible_dates = action.payload
        }
}
})


export const { setFlightSearch_FromInput, setFlightSearch_ToInput, setFlightSearch_NoOfAdultsInput, setFlightSearch_TripTypeInput, setFlightSearch_ClassInput, setFlightSearch_TakeOffDateInput, setFlightSearch_ReturnDateInput, setFlightSearch_NoOfChildrenInput, setFlightSearch_NoOfInfantsInput } = flightSearchInputsSlice.actions


export default flightSearchInputsSlice.reducer