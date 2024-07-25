import { NavInfo } from "../Constants"
import { Link, useNavigate } from "react-router-dom"
import { BiMenu, BiX } from "react-icons/bi"
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/AppStore"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, toggleShowNav } from "../store/navigation/navigationSlice"
import { DocscrollTop } from "../../App"
import { useEffect } from "react"
import logo from "../images/Onidson sm.png"



export const Navbar = () => {
    const navigation = useSelector((state: RootState) => state.navigation)
    const dispatch = useDispatch()
    const showNav = navigation.showNavbar
    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex
    const scrolledDown = navigation.scrolledDown
    const currentDropDown = navigation.currentDropDown


    const navigate = useNavigate()

    useEffect(() => {

        NavInfo.forEach((nav, i) => {
            if(document.URL.toLowerCase().includes(nav.link.toLowerCase()) ){
                dispatch(setCurrentNav(i))
            }        
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [document.URL])


    

    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[8vh] md:h-[10vh] z-50 transition-all duration-1000 ${scrolledDown ? "shadow-xl border-b border-primary bg-white bg-opacity-50 backdrop-blur-2xl" : ""} `}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className=' w-4/12 lg:w-2/12' onClick={() => {
                    dispatch(setCurrentNav(0))
                    if(showNav){
                        dispatch(toggleShowNav())
                    }
                    dispatch(setCurrentDropDown(""))
                    DocscrollTop()
                }}>
                    <img src={logo} alt="Onidson Travels and Logistics Ltd Logo" className='w-9/12 md:w-8/12'/>
                    
                </Link>

                <div className={`bi bi-${showNav ? 'x-lg' : 'list'} text-blue text-3xl lg:hidden cursor-pointer text-black`}  onClick={() => dispatch(toggleShowNav())}>
                    {
                        showNav ? 
                        <BiX /> :
                        <BiMenu  />
                    }
                </div>                
                
                

                <div className={`fixed w-full flex justify-center items-start  transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-12/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-6 xl:gap-9 lg:h-fit lg:bg-transparent lg:justify-end transition-all duration-1000`}>
                            {
                                NavInfo?.map((nav :any , i: number) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-blue lg:border-0 relative lg:w-fit`}>

                                        <div className={`flex w-full lg:w-fit py-4 px-[5%] lg:p-0 justify-between lg:justify-end lg:items-center cursor-pointer text-black bg-white lg:bg-transparent
                                        ${currentNav === i ? 
                                            'font-bold text-secondary lg:bg-transparent ' 
                                        : 'hover:bg-opacity-90 lg:hover:bg-transparent hover:font-bold'} hover:bg-opacity-10`} 

                                        onClick={() => {
                                            if( nav.sublinks){
                                                dispatch(setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title))

                                            }else{
                                                navigate(`/${nav.link}`)
                                                dispatch(setCurrentNav(i))
                                                dispatch(toggleShowNav())
                                                dispatch(setCurrentDropDown(""))
                                                DocscrollTop()
                                            }
                                        
                                        }}>
                                            <p className={` ${currentNav === i ? 
                                            'border-b border-secondary': ''}`}>{nav.title}</p>        
                                            {
                                                nav.sublinks ?
                                                currentDropDown == nav.title ?
                                                <RiArrowDropUpFill className="cursor-pointer h-5 scale-[2] w-9"/>  
                                                : 
                                                <RiArrowDropDownFill className="cursor-pointer h-5 scale-[2] w-9"/>  
                                                :  ''
                                            }
        
                                        </div>
                                        {/**** NAVS WITH SUBLINKS */}
                                        {
                                            nav.sublinks ?
                                            <div className={`flex flex-col gap-[1px] w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[250px] bg-opacity-20 lg:bg-opacity-100 bg-primary
                                            ${currentDropDown == nav.title ? 'lg:top-[7vh] lg:left-0' : 'h-0 lg:h-fit text-[0px]  lg:-top-[500px]'} lg:shadow-xl`}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink:any, j:number) => (
                                                        <Link to={`/${nav.title}/${sublink.link == "" ? "" : sublink.title.replaceAll(" ", "-")?.toLowerCase()}`} key={j} className={`flex gap-5 py-4 bg-white bg-opacity-[0.35] lg:bg-opacity-[1] hover:bg-opacity-[0] lg:hover:bg-opacity-[0.95] text-black
                                                        w-full px-8 lg:px-5 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == i && 
                                                            currentDropDownIndex == j ? 'font-bold text-secondary' :
                                                            ``
                                                        }
                                                         `} 
                                                         onClick={() => {
                                                            dispatch(toggleShowNav())
                                                            dispatch(setCurrentNav(i))
                                                            dispatch(setCurrentDropDownIndex(j))
                                                            dispatch(setCurrentDropDown(""))
                                                            DocscrollTop()
                                                        }}>
                                                        <p className={``}>{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                            
                        </nav>
                    </div>
            </div>

            
        </header>
        </>
        </>
    )
}
