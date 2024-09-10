import { motion } from 'framer-motion'
import { Footer, HomePage, Navbar } from '../../components'


const Home = () => {
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <Navbar/>
        <HomePage/>
        <Footer/>
    </motion.div>
  )
}

export  {Home}