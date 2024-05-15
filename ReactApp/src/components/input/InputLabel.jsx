// type Props = {
//   label: string,
//   name: string,
//   placeholder: string,
//   id?:String,
//   error?: String;
//   type?: 'text' | 'email' | 'password' | 'date',
// }

const InputLabel = ({type, label, name, placeholder, id, error, onChange, value}) => {
  return (
    <div>
      <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <input 
        type={type ?? 'text'}
        name={name}
        id={id} 
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg' 
        placeholder={placeholder}
        onChange={onChange}
        value={value?? ""}
        />
        {
          error && <small className='text-red-500'> {error} </small>
        }
    </div>
  )
}

export default InputLabel