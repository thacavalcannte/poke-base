import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import NavBar from "./components/NavBar/NavBar"


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
