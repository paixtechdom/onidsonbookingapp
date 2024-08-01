import { FC, useState } from "react"
import { useEffect } from "react"
import { parallaxInterface } from "../Interfaces"
import { formatId } from "../Functions"


export const Parallax:FC<parallaxInterface> = ({id, children, className}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    let Nid : string = formatId(id)
    
    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 800){
                setIsPosMatch(true)
            }  

        }
      
    }



    useEffect(() =>{
        let element = document.querySelector(`#${Nid}`)
        if(element){
            const pos: any = element.getBoundingClientRect()
            
            if(pos.top < 800){
                setIsPosMatch(true)
            }      
        }
        
    }, [Nid])

    

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [])



    return(
        <div  id={Nid} className={`relative  transition-all duration-1000 ${isPosMatch ? '' : 'opacity-0 translate-y-14 scale-[0.6]'} ${className}`}>
                {children}
        </div>
    )


}