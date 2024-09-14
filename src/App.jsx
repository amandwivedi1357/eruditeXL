import Allroutes from "./routes/Allroutes"
import"./App.css"
import SmoothScroll from "./utils/SmoothScroll"
import ScrollToTop from "./routes/ScrolltoTop"
const App = () => {
  return (
    <>
    <SmoothScroll>
    <ScrollToTop/>
      <Allroutes/>
    </SmoothScroll>
    </>
  )
}

export default App
