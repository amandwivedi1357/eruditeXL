import { Divider } from "@chakra-ui/react"

const Contactus = () => {
  return (
    <div className="w-full">
        <div className="w-full relative sm:h-[600px] sm:bg-[#01497B]">
            <img loading="lazy" src="/trips/contact.png" alt="" className="w-full h-[671px] sm:hidden"/>

            <div className="w-[661px] sm:w-[95%] sm:m-2 sm:top-0 sm:left-0 h-[551px] sm:h-[570px] rounded-lg card absolute top-[10%] left-[5%]">
                <div className="m-[40px]">
                    <p className="text-white text-[30px] font-inter font-bold">
                        Contact us
                    </p>
                    <p className="text-[16px] font-inter text-opacity-90 text-white w-[80%] mt-[20px]">
                    Not sure what you need? The team at Eruditexl will be happy to listen to you.
                    </p>
                    <form action="" className="w-full mt-[30px] py-4">
  <div className="flex flex-row sm:flex-col flex-wrap justify-between">
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="text"
        placeholder="First Name"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="text"
        placeholder="Last Name"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
  </div>
  <div className="flex flex-row sm:flex-col flex-wrap justify-between">
    <div className="w-full text-white md:w-[48%] mb-8">
      <input
        type="email"
        placeholder="Email"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
    
    <div className="w-full md:w-[48%] mb-8">
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full text-white bg-transparent border-b border-white border-opacity-40 placeholder-white focus:outline-none pb-4 sm:pb-[6px]"
      />
    </div>
  </div>

  <button className="px-6 py-2 rounded-md hover:bg-white hover:text-black text-white bg-[#DE8500]">
    Submit
  </button>
</form>


                </div>
            </div>
        </div>
    </div>
  )
}

export  {Contactus}