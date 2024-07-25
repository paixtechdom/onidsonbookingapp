import { useEffect } from "react"
import { AppRouter } from "./AppRouter"
import Alert from "./assets/components/Alert"
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";

export const DocscrollTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 50 ? true : false))
    })
    document.removeEventListener('scroll', () => null)
  }, [])

  useEffect(() => {
    DocscrollTop()
  }, [window.URL])

  
  return (
    <main className='bg-white center flex-col w-full relative'>

    <Alert />
    <AppRouter />

    </main>
  )
}

export default App


