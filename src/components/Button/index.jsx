import { useNavigate } from "react-router-dom"

const Button = ({text,onClick}) => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(`/${onClick}`)} className='text-white rounded-full  bg-[#DE8500] font-inter border-none px-5 py-3 flex gap-3'>
    <p>{text}</p>
    <img loading="lazy" src="/Home/navbtn.svg" alt="" className="border border-red-500"/>
</button>
  )
}

export  {Button}