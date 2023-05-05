import React from 'react'
import Navbar from './Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
import HomeRenters from './Components/HomeRenters/HomeRenters'
import HomeResident from './Components/HomeResident/HomeResident'
import HomeSocial from './Components/HomeSocial/HomeSocial'
import HomeSearch from './Components/HomeSearch/HomeSearch'
import HomeSerena from './Components/HomeSerena/HomeSerena'
import HomeConnection from './Components/HomeConnection/HomeConnection'
import HomeConnection2 from './Components/HomeConnection2/HomeConnection2'
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
      <HomeConnection2/>
    </div>
  )
}

export default App
