import React from 'react'
import { CaptainKhoj, Footer, Navbar } from '../../components'
import { motion } from 'framer-motion'

const Khoj = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <Navbar/>
        <CaptainKhoj/>
        <Footer/>
    </motion.div>
  )
}

export { Khoj}