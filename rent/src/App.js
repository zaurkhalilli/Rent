import React from 'react'
import Navbar from './Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
import HomeRenters from './Components/HomeRenters/HomeRenters'
import HomeResident from './Components/HomeResident/HomeResident'
import HomeSocial from './Components/HomeSocial/HomeSocial'
import HomeSearch from './Components/HomeSearch/HomeSearch'
import HomeSerena from './Components/HomeSerena/HomeSerena'
import HomeConnection from './Components/HomeConnection/HomeConnection'
import HomeTarget from './Components/HomeTarget/HomeTarget'
import HomeFrequently from './Components/HomeFrequently/HomeFrequently'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HomeRenters/>
      <HomeResident/>
      <HomeSocial/>
      <HomeSearch/>
      <HomeSerena/>
      <HomeConnection/>
      <HomeTarget/>
      <HomeFrequently/>
    </div>
  )
}

export default App
