import { motion } from "framer-motion"
import { slideIn } from "../../utils/data"
import emailjs from '@emailjs/browser'; // Import emailjs
import { useToast } from '@chakra-ui/react'; // Import useToast from Chakra UI
import { useState } from 'react'; // Import useState from React

const Contactus = () => {
  const toast = useToast(); // Initialize useToast
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    schoolName: '',
    phoneNumber: '',
    campType: '' // Added campType to form state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yyng78', 'template_wv4sq48', e.target, 'rDRNi75GBWU1GwL_U')
      .then((result) => {
          console.log(result.text);
          toast({
            title: "Email sent.",
            description: "Your email has been sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormData({
            fullName: '',
            email: '',
            schoolName: '',
            phoneNumber: '',
            campType: '' // Reset campType
          });
      }, (error) => {
          console.log(error.text);
          toast({
            title: "Error.",
            description: "Failed to send email. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
      });
  };

  return (
    <div className="w-full">
        <div className="w-full relative sm:h-[650px] sm:bg-[#01497B]">
            <img loading="lazy" src="/trips/contact.webp" alt="" className="w-full h-[701px] sm:hidden"/>

            <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
            className="w-[661px] sm:w-[95%] sm:m-2 sm:top-0 sm:left-0 h-[631px] sm:h-[630px] rounded-lg card absolute top-[5%] left-[5%]">
                <div className="m-[40px]">
                    <p className="text-white text-[30px] font-inter font-bold">
                        Contact us
                    </p>
                    <p className="text-[16px] font-inter text-opacity-90 text-white w-[80%] sm:w-full mt-[20px]">
                    Not sure what you need? The team at Eruditexl will be happy to listen to you.
                    </p>
                    <form onSubmit={sendEmail} className="w-full mt-[30px] py-4">
  <div className="flex flex-row sm:flex-col flex-wrap justify-between">
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
    <div className="w-full md:w-[48%] mb-8">
      <select
        name="campType"
        value={formData.campType}
        onChange={handleChange}
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      >
        <option className="text-black" value="" disabled>Select Camp Type</option>
        <option className="text-black" value="Inschool camp">Inschool camp</option>
        <option className="text-black" value="Student outbound camp">Student outbound camp</option>
        <option className="text-black" value="Kashmir khoj">Kashmir khoj</option>
        <option className="text-black" value="Space settlement camp">Space settlement camp</option>
      </select>
    </div>
  </div>
  <div className="flex flex-row sm:flex-col flex-wrap justify-between">
    <div className="w-full text-white md:w-[48%] mb-8">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
    
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="text"
        name="schoolName"
        value={formData.schoolName}
        onChange={handleChange}
        placeholder="School Name"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
  </div>

  <button type="submit" className="px-6 py-2 rounded-md hover:bg-white hover:text-black text-white bg-[#DE8500]">
    Submit
  </button>
</form>

                </div>
            </motion.div>
        </div>
    </div>
  )
}

export  {Contactus}