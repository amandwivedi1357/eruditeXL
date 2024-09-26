import Allroutes from "./routes/Allroutes"
import"./App.css"
import SmoothScroll from "./utils/SmoothScroll"
import ScrollToTop from "./routes/ScrolltoTop"
const App = () => {
  return (
    <div className="overflow-hidden">

<div className="whatsapp-icon-container sm:w-20 ">
  <img 
    src="/Home/whatsappnew.svg" 
    alt="WhatsApp Icon" 
    className="whatsapp-icon sm:w-16 sm:hidden shadow-black-900_b2 shadow-2xl rounded-2xl"
  />
  <div className="whatsapp-info cursor-pointer" onClick={()=>window.open('https://api.whatsapp.com/send?phone=919247121026','_blank')}>
    <img 
      src="/Home/whatsappnew.svg" 
      alt="WhatsApp Icon" 
      className="whatsapp-info-icon"
    />
    <p className="whatsapp-info-text">+91 92471 21026</p>
  </div>
  
</div>
<img 
    src="/Home/whatsappnew.svg" 
    alt="WhatsApp Icon" 
    onClick={()=>window.open('https://api.whatsapp.com/send?phone=919247121026','_blank')}
    className=" sm:w-16 sm:block hidden cursor-pointer fixed bottom-4 z-10 right-5 shadow-black-900_b2 shadow-2xl rounded-2xl"
  />
    <SmoothScroll>
    <ScrollToTop/>
      <Allroutes/>
    </SmoothScroll>
    </div>
  )
}

export default App
