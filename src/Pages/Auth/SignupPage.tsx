import { ChangeEvent, useState } from 'react'
import { main, mainChild } from '../../assets/StyleClasses'
import { InputField, RadioSelect } from '../../assets/components/utils/FormInputs'
import { Button } from '../../assets/components/utils/Button'
import { Link } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill, BsFillEnvelopeFill, BsPersonFill, BsTelephoneFill } from 'react-icons/bs'

const SignupPage = () => {
    const [ formInputs, setFormInputs ] = useState({
      firstName: "",
      email: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      password: "",
      confirmpassword: ""
    })
    
      const [ showPassword, setShowPassword ] = useState(false)

    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
        })
      }

  return (
    <main className={`${main} min-h-screen`}>
      <div className={`${mainChild} h-full center`}>

        <h2 className={`font-bold text-4xl w-full mb-9`}>Create Account</h2>

        <div className="flex flex-col lg:flex-row gap-[150px] w-full relative">


          <form className={`center flex-col gap-8 mb-[10vh] w-full`}>
            <InputField 
              name='firstName'
              type='text'
              label = "First Name"
              handleChange={handleChange}
              value = {formInputs.firstName}
              icon = {<BsPersonFill />}
              isRequired = {true}  
            />
            <InputField 
              name='lastName'
              type='text'
              label = "Last Name"
              handleChange={handleChange}
              value = {formInputs.lastName}
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
              name='phoneNumber'
              type='number'
              label = "Phone Number"
              handleChange={handleChange}
              value = {formInputs.phoneNumber}
              icon = {<BsTelephoneFill />}
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

            <InputField 
              name='confirmpassword'
              type={showPassword ? "text" : "password"}
              label = "Confirm Password"
              handleChange={handleChange}
              value = {formInputs.confirmpassword}
              icon = {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              isRequired = {true}  
              func={() => setShowPassword(!showPassword)}
            />
            <Link to={`/email_verification?${formInputs.email}`} className='w-full mt-5'>
              <Button 
                text='Create Account'
                className='bg-secondary text-white w-full font-bold py-3'
              />
            </Link>

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