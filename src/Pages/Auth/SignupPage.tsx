import { ChangeEvent, useEffect, useState } from 'react'
import { main, mainChild } from '../../assets/StyleClasses'
import { InputField } from '../../assets/components/FormInputs/InputField'
import { RadioSelect } from '../../assets/components/FormInputs/RadioSelect'
import { CountriesOption } from '../../assets/components/FormInputs/CountriesSelect'
import { Button } from '../../assets/components/utils/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill, BsFillEnvelopeFill, BsPersonFill, BsTelephoneFill } from 'react-icons/bs'
import axios from 'axios'
import { useMyAlert } from '../../assets/components/Alert'
import { BiChevronDown } from 'react-icons/bi'

const SignupPage = () => {
  const location = useLocation()
  const triggerAlert = useMyAlert()
  const redirectTo = location.search.split('?')[1]
  const navigate = useNavigate()

  const [ formInputs, setFormInputs ] = useState({
    first_name: "",
    email: "",
    last_name: "",
    gender: "",
    country: "",
    phone_number: "",
    password: ""
  })
  
  const [ showPassword, setShowPassword ] = useState(false)
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ passwordPercentage, setPasswordPercentage ] = useState(1)
  const [ passwordError, setPasswordError ] = useState('')

  const [ showCountries, setShowCountries ] = useState(false)
  const [ searchInput, setSearchInput ] = useState('')
  // const [ showPopUp, setShowPopUp ] = useState("")

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
        ...formInputs,
        [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
    })
  }


  useEffect(() => {
    passwordStrength(formInputs.password)
    if(formInputs.password.length > 0){
      if(formInputs.password.length < 6){
          setPasswordError('Password must be at least 6 characters')
      }
      else{
          setPasswordError('')
      }
  }
  }, [formInputs.password])


  const passwordStrength = (password:string) => {
    let length = 0
    let uppercase = 0
    let lowercase = 0
    let number = 0
    let sign = 0
    if(password == "Chuck Norris"){
      setPasswordPercentage(100)
      setPasswordError('Password is too strong')
    }else{
      if(password.length > 5){
          length = 20
          if(password.match(/^(?=.*[a-z]).+$/)){
              lowercase = 20
          }
          if(password.match(/^(?=.*[A-Z]).+$/)){
              uppercase = 20
          }
          if(password.match(/^(?=.*\d).+$/)){
              number = 20
          }
          if(password.match(/^(?=.*[!`~@#$%^&*()-+=_{}[\]|\:;"'<,./>?]).+$/)){
              sign = 20
          }
      }
      setPasswordPercentage(length + uppercase + lowercase + number + sign)
    }
  }

  const SubmitDetails = async (e:any) => {
    e.preventDefault()

    await axios.post('http://localhost:80/onidsonBackend/SignUp.php', formInputs)
    .then((response) => {
      if(response.data.status == "success"){
        triggerAlert("success", response.data.message)
        navigate(`/email_verification?${formInputs.email}?${redirectTo}`)
      }
      else{
        triggerAlert("error", response.data.message)
      }
    })
    .catch(error => {{
        console.log(error)
      }})
  }

  
  return (
    <main className={`${main} min-h-screen`}>
      <div className={`${mainChild} h-full center`}>

        <h2 className={`font-bold text-4xl w-full mb-9`}>Create Account</h2>

        <div className="flex flex-col lg:flex-row gap-[150px] w-full relative">


          <form className={`center flex-col gap-8 mb-[10vh] w-full`} onSubmit={SubmitDetails}>
            <InputField 
              name='first_name'
              type='text'
              label = "First Name"
              handleChange={handleChange}
              value = {formInputs.first_name}
              icon = {<BsPersonFill />}
              isRequired = {true}  
            />
            <InputField 
              name='last_name'
              type='text'
              label = "Last Name"
              handleChange={handleChange}
              value = {formInputs.last_name}
              icon = {<BsPersonFill />}
              isRequired = {true}  
            />

            <RadioSelect
              options = {["Male", "Female", "Rather not say"]}
              formInputs={formInputs} 
              label = "Gender"
              isRequired= {true}
              name="gender"
              setFormInputs={setFormInputs}
              // handleChange={handleChange}
            />

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
              name='phone_number'
              type='number'
              label = "Phone Number"
              handleChange={handleChange}
              value = {formInputs.phone_number}
              icon = {<BsTelephoneFill />}
              isRequired = {true}  
            />

          <InputField 
                label="Select Country"
                name="country"
                handleChange={handleChange}
                type="text"
                value={formInputs.country}
                isReadonly={true}
                func={() => {
                    setShowCountries(true)
                }}
                icon={
                    <BiChevronDown className="text-4xl mr-4"/>
                }
            >
                <CountriesOption 
                    setFormInputs={setFormInputs}
                    setShowCountries={setShowCountries} 
                    showCountries={showCountries}                         
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    formInputs={formInputs}
                />
            </InputField>

            <InputField 
              name='password'
              type={showPassword ? "text" : "password"}
              label = "Password"
              handleChange={handleChange}
              value = {formInputs.password}
              icon = {showPassword ? <BsEyeSlashFill onClick={() => setShowPassword(!showPassword)}/> : <BsEyeFill onClick={() => setShowPassword(!showPassword)}/>}
              isRequired = {true}
            />
            {
              formInputs.password.length > 5 ?
              <div className='flex w-full items-center -my-3'>
              <p className={`h-1 rounded-xl mx-2 transition-all duration-500 ${
                  passwordPercentage == 0 ? 'w-0' :
                  passwordPercentage == 40 ? 'bg-red-600 w-4/12' :
                  passwordPercentage == 60 ? 'bg-yellow-400 w-6/12' :
                  passwordPercentage == 80 ? 'bg-blue-800 w-10/12' :
                  passwordPercentage == 100 ? 'bg-green-600 w-full' 
                  : ''}`}></p>
              <p className="text-sm font-bold w-fit">{passwordPercentage}%</p> 
              </div>
              : ''
            }
            {
                formInputs.password !== "" && passwordError != '' ?
                <p className="text-red-800 w-full -my-2 font-bold">{passwordError}</p> : ''
            }
            <InputField 
              name='confirmpassword'
              type={showPassword ? "text" : "password"}
              label = "Confirm Password"
              handleChange={(e:any) => setConfirmPassword(e.target.value)}
              value = {confirmPassword}
              icon = {showPassword ? <BsEyeSlashFill onClick={() => setShowPassword(!showPassword)}/> : <BsEyeFill onClick={() => setShowPassword(!showPassword)}/>}
              isRequired = {true}
            />
            {
              confirmPassword !== "" && confirmPassword !== formInputs.password ? 
              <p className="text-red-800 w-full -my-2 font-bold">Passwords must be the same</p> :""
            }
            {/* <div onClick={SubmitDetails} className='w-full'> */}
              <Button 
                text='Create Account'
                className='bg-secondary text-white w-full font-bold py-3'
              />
            {/* </div> */}

            <Link to={`/login`} className="mt-4 font-bold">
              Already have an account? <span className='text-blue-600 underline'>Login</span>
            </Link>
          </form>

          <div className="bg-secondary w-full h-[70vh] sticky top-[15vh]"></div>
        </div>
      </div>
    </main>
  )
}

export default SignupPage