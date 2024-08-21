import { ChangeEvent, useState } from 'react'
import { main, mainChild } from '../../assets/StyleClasses'
import { InputField } from '../../assets/components/FormInputs/InputField'
import { BsEyeFill, BsEyeSlashFill, BsFillEnvelopeFill } from 'react-icons/bs'
import { Button } from '../../assets/components/utils/Button'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useMyAlert } from '../../assets/components/Alert'

const LoginPage = () => {
  const triggerAlert = useMyAlert()
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

  const Login = async (e:any) => {
    e.preventDefault()

    await axios.post('http://localhost:80/onidsonBackend/Login.php', formInputs)
      .then((response) => {

        console.log(response.data.status)

        if(response.data.status == "success"){
          triggerAlert("success", response.data.message)
        }
        else{
          triggerAlert("error", response.data.message)
        }
      })
      .catch(error => {{
          console.log(error)
        }})


    // if(redirectTo == undefined){
    //   navigate('/dashboard')
    // }else if (redirectTo.includes('/')){
    //   navigate(`/${redirectTo}`)
    // }else{
    //   navigate(`/journey/${redirectTo}`)
    // }
  }

  return (
    <main className={`${main} min-h-screen`}>
      <div className={`${mainChild} h-full center`}>

        <h2 className={`font-bold text-4xl w-full mb-9`}>Login</h2>

        <div className="flex flex-col lg:flex-row gap-[150px] w-full">


          <form method="POST" className={`center flex-col gap-8 mb-[10vh] w-full`}>
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
              icon = {showPassword ? <BsEyeSlashFill onClick={() => setShowPassword(!showPassword)}/> : <BsEyeFill onClick={() => setShowPassword(!showPassword)}/>}
              isRequired = {true}  
            />

            <div className="-my-3 text-right text-red-700 underline font-bold w-full">Forgot Password?</div>

            <div className="w-full" onClick={Login}>
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