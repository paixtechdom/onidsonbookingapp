import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/AppStore"
import { setProcessingMessage, toggleShowProcessing } from "../../store/Slices/ProcessingSlice"
import { FaPlane } from "react-icons/fa"





export const Processing = () => {
  const processing = useSelector((state: RootState) => state.processing)
  const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)


  const messages = [
    {
      label : "searching_for_flights",
      element: <div className="flex flex-col gap-4 center">
      <h2 className="text-secondary-text-xl font-bold">
        Searching for Flights
      </h2>
  
      <div className="flex flex-col">
  
        {FlightSlice.from}
        <FaPlane className="text-secondary text-2xl"/>
        {FlightSlice.to}
      </div>
    </div>
    }
  ]


  return (
    <section className="bg-black bg-opacity-60 backdrop-blur-sm fixed top-0 h-screen w-full z-[300] center">
      <div className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 bg-white min-h-[40vh] rounded-xl shadow-xl">
        {processing.processingMessage}
      </div>
    </section>
  )
}


export const useProcessing = () => {
  const dispatch = useDispatch();

  // Create a function that handles the alert logic
  const toggleProcessing = (showProcessing: boolean, processingMessage: string) => {
    dispatch(toggleShowProcessing(showProcessing));
    dispatch(setProcessingMessage(processingMessage));

  };

  return toggleProcessing; // Return the function so it can be used in components
};