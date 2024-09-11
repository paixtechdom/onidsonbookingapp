import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProcessingInterface{
    showProcessing: boolean,
    processingMessage?: string,
}

const initialState: ProcessingInterface = {
    showProcessing: false,
    processingMessage: "",
}

const ProcessingSlice = createSlice({
    name: "Processing",
    initialState,
    reducers: {
        toggleShowProcessing: (state, action: PayloadAction<boolean>) => {
            state.showProcessing = action.payload;
        },      
        setProcessingMessage: (state, action: PayloadAction<string>) => {
            state.processingMessage = action.payload
        }
    }
})


export const { toggleShowProcessing, setProcessingMessage } = ProcessingSlice.actions


export default ProcessingSlice.reducer