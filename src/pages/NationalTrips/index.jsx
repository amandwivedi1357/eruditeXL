import { motion } from "framer-motion"
import { Footer, Navbar, Trips } from "../../components"

const NationalTrips = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
       <Navbar/>
       <Trips/>
       <Footer/>
    </motion.div>
  )
}

export  {NationalTrips}