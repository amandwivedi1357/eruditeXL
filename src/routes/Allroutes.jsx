import { Route, Routes } from 'react-router-dom'
import { AboutUs, Camps, ContactUs, Gallery, Home,  NationalTrips } from '../pages'
import { Khoj } from '../pages/Khoj'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/camps/:single' element={<Camps/>}/>
        <Route path='/camp/captain-khoj' element={<Khoj/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/national-trips' element={<NationalTrips/>}/>
    </Routes>
  )
}

export default Allroutes