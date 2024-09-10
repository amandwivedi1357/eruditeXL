import React from 'react'
import { Contactus, Footer, Navbar } from '../../components'
import FadeUpAnimation from '../../utils/FadeUp'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
       <Navbar/>
       <Contactus/>
       <Footer/>
    </motion.div>
  )
}

export  {ContactUs}