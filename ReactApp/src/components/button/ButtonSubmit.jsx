
const ButtonSubmit = ({type, name}) => {
  return (
    <button type={type ?? "button"} className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none"> 
        {name ?? "Aceptar"}
    </button>

  )
}

export default ButtonSubmit