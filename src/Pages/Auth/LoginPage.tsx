import { ChangeEvent, useEffect, useState } from 'react'
import { main, mainChild } from '../../assets/StyleClasses'
import { InputField } from '../../assets/components/utils/FormInputs'
import { BsEyeFill, BsEyeSlashFill, BsFillEnvelopeFill } from 'react-icons/bs'
import { Button } from '../../assets/components/utils/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.search.split('?')[1]

  const [ formInputs, setFormInputs ] = useState({
    email: "",
    password: ""
  })

  const [ showPassword, setShowPassword ] = useState(false)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
        ...formInputs,
        [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
    })
  }
  useEffect(() => {
    
  },[])
  const Login = () => {
    if(redirectTo == undefined){
      navigate('/dashboard')
    }else if (redirectTo.includes('/')){
      navigate(`/${redirectTo}`)
    }else{
      navigate(`/journey/${redirectTo}`)
    }
  }

  return (
    <main className={`${main} min-h-screen`}>
      <div className={`${mainChild} h-full center`}>

        <h2 className={`font-bold text-4xl w-full mb-9`}>Login</h2>

        <div className="flex flex-col lg:flex-row gap-[150px] w-full">


          <form className={`center flex-col gap-8 mb-[10vh] w-full`}>
            <InputField 
              name='email'
              type='email'
              label = "Email address"
              handleChange={handleChange}
              value = {formInputs.email}
              icon = {<BsFillEnvelopeFill />}
              isRequired = {true}  
            />

            <InputField 
              name='password'
              type={showPassword ? "text" : "password"}
              label = "Password"
              handleChange={handleChange}
              value = {formInputs.password}
              icon = {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              isRequired = {true}  
              func={() => setShowPassword(!showPassword)}
            />

            <div className="-my-3 text-right text-red-700 underline font-bold w-full">Forgot Password?</div>

            <div className="w-full" onClick={() => Login()}>
              <Button 
                text='LOGIN'
                className='bg-secondary text-white w-full font-bold py-3'
              />
            </div>

            <Link to={`/signup?${redirectTo}`} className="mt-4 font-bold">
              Don't have an account? <span className='text-blue-600 underline'>Create account</span>
            </Link>
          </form>

          <div className="bg-secondary w-full h-[70vh]"></div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage