import React from 'react'
import About from './pages/About'
import Features from './pages/Features'
import Layout  from './components/root/Layout'
import Home from './pages/Home'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contactpage from './pages/Contactpage'


let multipage = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/contact' element={<Contactpage/>}></Route>
  </Route>
))

  

const App = () => {
  return (
    <RouterProvider router={multipage}/>
  )
}

export default App