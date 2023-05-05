import React from 'react'
import Navbar from './Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
import HomeRenters from './Components/HomeRenters/HomeRenters'
import HomeResident from './Components/HomeResident/HomeResident'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HomeRenters/>
      <HomeResident/>
    </div>
  )
}

export default App
