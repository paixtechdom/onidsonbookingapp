import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
import { setCurrentFlightId } from "../../../assets/store/Slices/navigationSlice";
import { Button } from "../../../assets/components/utils/Button";
import { useProcessing } from "../../../assets/components/Loadings/Processing";
import { RootState } from "../../../assets/store/AppStore";

export const FlightDetails:FC<any> = ({currentFlightId}) => {
    const dispatch = useDispatch();
    const toggleProcessing = useProcessing();
    const processing = useSelector((state: RootState) => state.processing);

    useEffect(() => {
        // toggleProcessing(true, "loading_flight_data");

        // setTimeout(() => {
        //     toggleProcessing(false)
        // }, 1000);

    }, []);
    

  return(

    <section className={`fixed flex h-screen w-full left-0 top-0 bg-black bg-opacity-40 transition-all duration-1000 center z-20 
    ${currentFlightId !== "" ? "opa" : "scale-0 opacity-0"}
    `}>
    <div className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 bg-zinc-100 min-h-[70vh] rounded-xl shadow-xl center">
        {
            !processing.showProcessing &&

            <div className="w-11/12 flex flex-col">

                {currentFlightId}

                <div className="flex items-center w-full h-fit gap-8">
                    <div onClick={() => {
                        dispatch(setCurrentFlightId(""))
                    }}>
                        <Button 
                        text={"Close"}
                        className="bg-white text-secondary mt-7 w-full md:w-fit min-w-[150px]"
                        />
                        
                    </div>

                    <Button 
                        text={"Book now"}
                        className="bg-secondary text-white mt-7 w-full md:w-fit min-w-[150px]"
                    />
                </div>

            </div>

        }
    </div>

    </section>
    
  );
};
 
