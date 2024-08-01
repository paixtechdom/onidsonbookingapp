import { BsArrowRight, BsEnvelopeFill, BsExclamationCircleFill } from "react-icons/bs"
import { InputFieldInterface } from "../../assets/Interfaces"
import { ChangeEvent, FC, useState } from "react"
import { Button } from "../../assets/components/Button"
import { BreadCrumbs } from "../../assets/components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { BiLoaderAlt } from "react-icons/bi"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../assets/store/AlertSlice"
import { ContactInfo } from "../../assets/components/sections/Footer"


const ContactPage = () => {
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const [ emptyFieldsError, setEmptyFieldsError ] = useState(false)

    const [ formInputs, setFormInputs ] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: ""
    })
    const cleanedInputs = Object.fromEntries(
        Object.entries(formInputs).map(([key, value]) => [key, value.replace(/\s+/g, ' ').trim()])
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
        })
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()
        setLoading(true)
       
        const isEmpty = Object.values(cleanedInputs).some(value => value === "");
        if (isEmpty) {
            setEmptyFieldsError(true)
            setLoading(false)
            return;
        }
        setEmptyFieldsError(false)
        const subject = 'Message from ' +cleanedInputs.fullName + ' to Onidson Travels and Logistics Ltd'
        sendContactEmail(subject)        
    }


    const sendContactEmail = (subject:string) => {
        const newMessage = cleanedInputs.message.replace(/\n/g, '<br>')

        axios.post(`contactemail.php` ,{
            subject: subject,
            message: newMessage.replace(/\n/g, '<br>'),
            phoneNumber: cleanedInputs.phoneNumber,
            from: cleanedInputs.email,
            name: cleanedInputs.fullName,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
                if(response.data.success == true){
                    dispatch(setAlertType("success"))
                    dispatch(toggleShowAlert(true))
                    dispatch(setAlertMessage("Message sent successfully!"))
                    clearForm()
                
                }else{
                    isError()
                }
            })
            .catch(() => {
                isError()
            });
            setLoading(false)
        
    }
    const isError = () => {
        dispatch(toggleShowAlert(true))
        dispatch(setAlertMessage("Failed to send message!"))
        dispatch(setAlertType("error"))
    }

    const clearForm = () => {
        setFormInputs({
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
            subject: ""
        })
    }




    return(
        <>
            <Helmet>
                <title>
                    Contact Onidson Travels and Logistics Ltd
                </title>
                <meta name="description" content={`Connect with Onidson Travels and Logistics Ltd through our contact information. Reach us by phone at ${ContactInfo[0].contact}, email us at  ${ContactInfo[1].contact}, or visit us at  ${ContactInfo[2].contact}. We're here to help!`} />
            </Helmet>            

            <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white">
                <div className="w-11/12 lg:w-10/12 center flex-col text-secondary">
                    <div className="center gap-3 text-center">
                        <BsEnvelopeFill className="text-4xl"/>
                        <h1 className="font-bold text-4xl">
                            Contact Us
                        </h1>
                    </div>

                    <BreadCrumbs links={["Home", "Contact Us"]} />

                    <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                        <div className="bg-secondary flex flex-col justify-start text-gray-300 p-6 md:p-9 py-[6vh] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:w-4/12  gap-[10vh]">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-primary text-2xl font-semibold">Contact Information</h2>
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                            {
                                ContactInfo.map((info, i) => (
                                    <div key={i} className="flex flex-col gap-2 w-full">

                                        <div key={i} className="flex items-center gap-2">
                                            {info.icon}
                                            <p>
                                                {info.text}
                                            </p>

                                        </div>
                                        <a href={info.link} className="pl-6">{info.contact}</a>
                                    </div>
                                ))
                            }
                            </div>

                            
                        </div>


                        <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-9 py-[6vh]">
                            <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-2 gap-6 gap-y-9">
                                <InputField 
                                    label="Full Name"
                                    type="text"
                                    name="fullName"
                                    handleChange={handleChange}
                                    value={formInputs.fullName}
                                />
                                <InputField 
                                    label="Email"
                                    type="email"
                                    name="email"
                                    handleChange={handleChange}
                                    value={formInputs.email}
                                />
                                <InputField 
                                    label="Phone Number"
                                    type="number"
                                    name="phoneNumber"
                                    handleChange={handleChange}
                                    value={formInputs.phoneNumber}
                                />
                                <InputField 
                                    label="Subject"
                                    type="subject"
                                    name="subject"
                                    handleChange={handleChange}
                                    value={formInputs.subject}
                                />



                                <MessageField 
                                    className="col-span-2"
                                    label="Message"
                                    name="message"
                                    placeholder="Write your message"
                                    handleChange={handleChange}
                                    value={formInputs.message}
                                />
                                {emptyFieldsError ? 
                                    <div className="text-red-700 flex gap-2 items-center col-span-2"><BsExclamationCircleFill /> Please, fill out all fields
                                    </div> 
                                    : ""
                                }
                                <div className="flex items-center lg:justify-end w-full lg:col-span-2">
                                    <Button 
                                        className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                        text={`${loading ? "Sending Message" : "Send Message"}`} 
                                        icon={
                                            loading ?
                                            <BiLoaderAlt className="animate-spin" /> :
                                        <BsArrowRight className="ml-3 "/>}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default ContactPage


const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value}) => {
    return(
        <div className={`flex flex-col w-full gap-2 text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>{label}</label>


            <input 
                type={type}
                onChange={(e) => handleChange(e)}
                name={name}
                required
                value={value}
                className={`p-2 rounded-tl-xl rounded-br-xl bg-transparent outline-none border ${value !== "" ? "border focus:border-secondary" : " border-secondary"} hover:border hover:border-secondary cursor-pointer`}
            />
        </div>
    )
}


const MessageField:FC<InputFieldInterface> = ({label, className, handleChange, name, value, placeholder}) => {
    return(
        <div className={`flex flex-col w-full gap-2 text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>{label}</label>


            <textarea 
                onChange={(e) => handleChange(e)}
                name={name}
                placeholder={placeholder || label}
                required
                value={value}
                className={`p-2 min-h-28 max-h-28 rounded-tl-xl rounded-br-xl bg-transparent outline-none border ${value !== "" ? "border focus:border-secondary" : " border-secondary"} hover:border hover:border-secondary cursor-pointer`}
            >

            </textarea>
        </div>
    )
}