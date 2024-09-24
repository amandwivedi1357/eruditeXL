import { Route, Routes, useNavigate } from 'react-router-dom'
import { AboutUs, Camps, ContactUs, Gallery, Home,  NationalTrips } from '../pages'
import { Khoj } from '../pages/Khoj'

const NotFound = () => {
  const navigate= useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <p onClick={()=>navigate('/')} className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
        Go Back Home
      </p>
    </div>
  );
};
const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={
          
            
          <Home/>
          
       
          }/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/camps/:single' element={<Camps/>}/>
        <Route path='/camp/captain-khoj' element={<Khoj/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/national-trips' element={<NationalTrips/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Allroutes