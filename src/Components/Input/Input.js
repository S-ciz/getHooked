import "./Input.css"

const Input = ({submitForm}) => {
  return (
    <form onSubmit={submitForm}>
    <input className="input" placeholder="Search..." />
    </form>
  )
}

Input.defaultProps = 
{
    submitForm: (e)=>{ e.preventDefault() }
}

export default Input
