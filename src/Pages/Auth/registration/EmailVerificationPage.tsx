import { useEffect, useRef, useState } from 'react'
import { main, mainChild } from '../../../assets/StyleClasses'
import { Button } from '../../../assets/components/utils/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const EmailVerificationPage = () => {
    const [ code, setCode ] = useState(['', '', '', '', '', ''])
    const [ pin, setPin ] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.search.split('?')[1]
    // console.log(email)
    
    useEffect(() => {
        if(email == "" || email == undefined){
            navigate("/login")
        }

    }, [])

    // send code 
    const inputRefs : any[] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()] 

    const handleChange = (i:any, value:any) => {
        value = value.replace(/\D/, '')
        const newCode = [...code]
        newCode[i] = value
        setCode(newCode)
        setPin(newCode.toString().replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', ''))
        console.log(pin)
        
        if(value !== '' && i < 5){
            inputRefs[i + 1].current.focus()
        }
    }
    
    const handleKeyDown = (i:number, e:any) => {
        if(e.key === 'Backspace' && code[i] === '' && i > 0){
            inputRefs[i - 1].current.focus()
        } 
    }


  return (
    <main className={`${main}`}>
        <div className={`${mainChild}`}>
            <div className="flex flex-col center lg:flex-row gap-[150px] w-full">

            <form className="w-full flex items-start flex-col gap-7">
                <h1 className="text-xl font-bold">
                    Input the verification code sent to {email}
                </h1>
                
                <div className="flex gap-3">
                    {
                        code.map((value, i) => (
                            <input 
                                key={i}
                                type="text" 
                                maxLength={1} 
                                pattern="[0-9]*"
                                className="outline-none bg-transparent center text-center rounded border border-secondary h-[45px] w-[45px]"
                                ref={inputRefs[i]}
                                value={value}
                                onChange={(e) => handleChange(i, e.target.value)}
                                onKeyDown={((e) => handleKeyDown(i, e))}

                            />
                        ))
                    }
                </div>
                
                <Link to={"/login"}>
                    <Button 
                        text={'Submit'}
                        className='bg-secondary text-white'
                    />
                </Link>
                
                {/* <div className="w-full gap-3 mt-3 justify-end text-sm">
                    By signing up, you agree to the company's legal <AuthLink text={'terms and conditions'} to={'/Signup'}/> governing the use of this platform for merchants.
                </div>  */}
                <Link to={'/login'} className="mt-4 font-bold">
                Already have an account? <span className='text-blue-600 underline'>Login</span>
                </Link>

            
            </form>
            <div className="bg-secondary w-full h-[70vh]"></div>

            </div>
        </div>
    </main>
  )
}

export default EmailVerificationPage