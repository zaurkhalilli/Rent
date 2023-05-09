import React from 'react'
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Layout from "./Layout/Layout";
import BlogDetail from "./Pages/BlogDetail/Detail";
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route index path='/about' element={<About />} />
          <Route index path='/blog' element={<Blog />} />
          <Route index path='/blogdetail' element={<BlogDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  )
}

export default App