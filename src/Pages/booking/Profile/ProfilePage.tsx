import { main, mainChild } from '../../../assets/StyleClasses'



const ProfilePage = () => {
  return (
    <main className={`${main}`}>
        <div className={`${mainChild}`}>
            <h2 className='font-bold text-3xl'>
                My Profile
            </h2>

            <div className="flex flex-col gap-5">
                First Name
                Last Name
                Phone number
                Email
                Gender
            </div>
        </div>        
    </main>
  )
}




export default ProfilePage