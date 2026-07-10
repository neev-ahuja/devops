import { Routes , Route }  from "react-router-dom"
import Profile from "./pages/Profile"
import LandingPage from "./pages/LandingPage"
import NavBar from "./components/navbar/NavBar"
import Footor from "./components/general/Footor"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
      <Footor />
    </div>
  )
}

export default App
