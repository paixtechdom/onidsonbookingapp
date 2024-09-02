import { useEffect } from "react"
import { AppRouter } from "./AppRouter"
import Alert from "./assets/components/Alert"
import { useDispatch, useSelector } from "react-redux";
import { toggleScrolledDown } from "./assets/store/Slices/navigationSlice";
import { Processing } from "./assets/components/Loadings/Processing";
import { RootState } from "./assets/store/AppStore";

export const DocscrollTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function App() {
  const dispatch = useDispatch()
  const processing = useSelector((state: RootState) => state.processing)
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
    {
      processing.showProcessing &&
      <Processing /> 
    }

    </main>
  )
}

export default App


