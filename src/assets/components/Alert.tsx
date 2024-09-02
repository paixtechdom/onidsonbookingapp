import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/AppStore"
import { BiX } from "react-icons/bi"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../store/Slices/AlertSlice"
import { useEffect } from "react"




const Alert = () => {
    const dispatch = useDispatch()
    const alert = useSelector((state: RootState) => state.alert)
    const alertType = alert.alertType
    const alertMessage = alert.alertMessage
    const showAlert = alert.showAlert
    
    let alertDuration = alertType == "info" ? 5000 : 3000

    useEffect(() => {
        if(showAlert){
            setTimeout(() => {
                dispatch(toggleShowAlert(false))
            }, alertDuration);
        }
    }, [showAlert])
    
  return (
    <div className={`fixed z-[100] transition-all duration-500 ease-in-out ${showAlert ? "bottom-[5vh] lg:bottom-[10vh]" : "-bottom-[15vh]"}  left-0 w-full center h-[10vh] lg:h-[12vh]`}>
        <div className={`bg-secondary bg-opacity-20 backdrop-blur-3xl w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 rounded-xl flex items-center justify-between h-full shadow-xl px-3
            border-l-[16px] lg:border-l-[25px] ${
            alertType == "success" ? "border-green-700" :
            alertType == "info" ? "border-blue-700" :
            alertType == "error" ? "border-red-700" :
            "border-red-700"
        }
        `}>
            <p className="">
                {alertMessage}
            </p>

            <BiX onClick={() => {
                dispatch(toggleShowAlert(false))
            }}
            className="rounded-full bg-gray-200 mx-4 h-8 w-8 cursor-pointer text-zinc-700"/>

        </div>
    </div>
  )
}

export default Alert


export const useMyAlert = () => {
    const dispatch = useDispatch();
  
    // Create a function that handles the alert logic
    const triggerAlert = (alertType: string, alertMessage: string) => {
      dispatch(setAlertType(alertType));
      dispatch(setAlertMessage(alertMessage));
      dispatch(toggleShowAlert(true));
    };
  
    return triggerAlert; // Return the function so it can be used in components
  };