import { format, parseISO, differenceInMinutes } from "date-fns"
import { Airports } from "./Airports"

export const formatId = (id: string) => {
  return id.trim()
          .replace("-","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace("&","")
          .replace(".","")
          .replace("/","")
          .replace("'","")
          .replace(":","")
}


export  const ArrayFromNumber = (num: number): number[] => {
    return Array.from({length: num}, (_, i) => i + 1)
  }

export const FormatPrice = (num: number): any => {


  let formatedString = ""
  num.toString().split('').reverse().forEach((a, i) => 
    formatedString += (i) % 3 == 0 && i !== 0 ? `,${a}` : a
)

  return formatedString.split('').reverse()
}


export const FormatDate = (date: string) => {
  if(!date){
    return "Invalid date"
  }
  const parsedDate = parseISO(date);  // Parse the ISO date string
  const formattedDate = format(parsedDate, 'd MMM, yyyy');  // Format it to "2 Sept,
  return formattedDate

}


export const calculateTimeDifference = (startTime: string, endTime: string): string => {
  if(!startTime || !endTime){
    return "Invalid Time"
  }
  // Parse both times into Date objects
  const start = parseISO(startTime);
  const end = parseISO(endTime);

  // Calculate the total difference in minutes
  const totalMinutes = differenceInMinutes(end, start);

  // Calculate hours and minutes from total minutes
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Format the result as "X hrs Y min"
  return `${hours} hr${hours !== 1 ? 's' : ''} ${minutes} min`;
};


// interface GetAirportLocationInterface{}

// export const GetAirportLocation = (params : string, iataCode?:boolean) => {

//   if (iataCode){
//     if(params !== ""){
//       const filteredAirports = Airports.filter((airport : any) => 
//         airport.airport_name.toLowerCase() === params.toLowerCase() || 
//       airport.airport_name.toLowerCase().includes(params.toLowerCase()) || 
//       airport.city_name.toLowerCase().includes(params.toLowerCase()) || 
//       airport.country_name.toLowerCase().includes(params.toLowerCase()) || 
//       airport.iata_code.toLowerCase().includes(params.toLowerCase()));
      
//       return filteredAirports
//     }
//     return []


//     }else{

//       const foundAirport = Airports.find((airport : any) => airport.airport_name === params || airport.airport_name.includes(params));
      
      
//       if (foundAirport) {
//           return `${foundAirport.city_name}, ${foundAirport.country_name}`;
//       }
//     }

  
//   return 'Unknown location'; // Fallback if not found
// };



const airportCache: { [key: string]: any[] } = {}; // Memoization cache

let debounceTimer: any;

export const GetAirportLocation = (params: string, iataCode?: boolean) => {
  if (iataCode) {
    if (params !== "") {
      // Return cached result if available
      if (airportCache[params]) {
        return airportCache[params];
      }

      clearTimeout(debounceTimer); // Clear the previous timer
      debounceTimer = setTimeout(() => {
        const filteredAirports = Airports.filter((airport: any) =>
          airport.airport_name.toLowerCase() === params.toLowerCase() ||
          airport.airport_name.toLowerCase().includes(params.toLowerCase()) ||
          airport.city_name.toLowerCase().includes(params.toLowerCase()) ||
          airport.country_name.toLowerCase().includes(params.toLowerCase()) ||
          airport.iata_code.toLowerCase().includes(params.toLowerCase())
        );

        // Store result in cache
        airportCache[params] = filteredAirports;

        return filteredAirports;
      }, 300); // Adjust delay for debounce as needed
    }

    return [];
  } else {
    const foundAirport = Airports.find((airport: any) =>
      airport.airport_name === params ||
      airport.airport_name.includes(params)
    );

    if (foundAirport) {
      return `${foundAirport.city_name}, ${foundAirport.country_name}`;
    }
  }

  return 'Unknown location'; // Fallback if not found
};



