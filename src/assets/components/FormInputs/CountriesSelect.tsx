import { FC, useEffect, useState } from "react"
import { countries } from "../../Constants"
import { BiX } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"

export const CountriesOption:FC<any> = ({setFormInputs, setShowCountries, showCountries, searchInput, setSearchInput, formInputs }) => {
    const [ Countries, setCountries ] = useState<any>([])

    useEffect(() => {
        const newCountriesList = countries.filter((c) => c.country.toLowerCase().includes(searchInput.toLowerCase()))

        setCountries(newCountriesList)
    }, [searchInput])

    return(
            <div className={`absolute w-full z-20 flex flex-col shadow-xl rounded-xl h-fit gap-6 transition-all duration-500 max-h-[70vh] overflow-y-scroll border border-primary border-opacity-50 ${showCountries ? '' : 'opacity-[0] scale-[0]'}`}>

            <div className={`w-full center flex-col bg-secondary backdrop-blur-3xl h-fit gap-6`}>
                <div className="text-sm w-full flex flex-col  justify-between items-center cursor-pointer sticky top-0 bg-primary bg-opacity-80 backdrop-blur-xl z-20 gap-4 px-9 pt-9 pb-4" >
                    <div className="flex justify-between items-center w-full font-bold text-xl" onClick={() => {
                    setShowCountries(false)
                }}>
                        Select Country
                        <BiX className="text-3xl"/>
                    </div>
                    <div className="flex bg-secondary bg-opacity-50 w-full rounded-full border border-primary overflow-hidden border-opacity-40">
                        <div className="p-3">
                            <BsSearch className="text-lg text-zinc-900"/>
                        </div>
                        <input type="text"  placeholder="Search Countries" 
                        className="bg-transparent outline-none w-full p-3" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

                    </div>

                </div>

                <div className="flex flex-col gap-3 w-full px-9 pb-9">

                    {
                        Countries.map((c:any, i:number) => (
                            <div key={i} className="py-3 border border-primary px-5 w-full rounded-full border-opacity-30 text-sm cursor-pointer hover:bg-primary transition-all duration-500 active:bg-primary flex items-center gap-3" onClick={() => {
                                setFormInputs({
                                    ...formInputs,
                                    ["country"]: c.country
                                })
                                setShowCountries(false)
                            }}> 
                                <i className={c.flag}></i>
                                {c.country}
                            </div>
                        ))
                    }
                    {
                        Countries.length == 0 ? 
                        <p className="text-sm">Not Found</p> : ''
                    }

                </div>
            </div>
            </div>
    )
}