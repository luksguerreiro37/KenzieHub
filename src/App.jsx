import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import "react-toastify/dist/ReactToastify.min.css"
import { useContext } from "react"
import { UserContext } from "./providers/UserContext"
import { Loading } from "./components/Loading/indes"

const App = () => {
  const {loading} = useContext(UserContext)  
  return (
    <>
      {loading?<Loading />:<RoutesMain />}
      <ToastContainer autoClose={3*1000}/>
    </>
  )
}

export default App
""