import { motion } from 'framer-motion'
import { About, Footer, Navbar } from '../../components'
import FadeUpAnimation from '../../utils/FadeUp'

const AboutUs = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <Navbar/>
        <About/>
        <Footer/>
    </motion.div>
  )
}

export  {AboutUs}