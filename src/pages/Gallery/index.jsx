import React from 'react'
import { Footer, GalleryPage, Navbar } from '../../components'
import FadeUpAnimation from '../../utils/FadeUp'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
       <Navbar/>
       <GalleryPage/>
       <Footer/>
    </motion.div>
  )
}

export  {Gallery}