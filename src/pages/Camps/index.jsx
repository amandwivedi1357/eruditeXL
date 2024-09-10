import { motion } from 'framer-motion'
import { Footer, Navbar } from '../../components'
import {  SingleCamp } from '../../components/camps'

const Camps = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
       <Navbar/>
       <SingleCamp/>
       <Footer/>
    </motion.div>
  )
}

export  {Camps}