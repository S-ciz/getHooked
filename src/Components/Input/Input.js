import "./Input.css"

const Input = ({submitForm, toggleInput, placeholder}) => {
  return (
    <form onSubmit={submitForm}>
    <input onInput={toggleInput} className="input" placeholder={placeholder} />
    </form>
  )
}

Input.defaultProps = 
{
    submitForm: (e)=>{ e.preventDefault() },
    toggleInput: (e)=>{ console.log(e.target.value)},
    placeholder: "Search..."
}

export default Input
