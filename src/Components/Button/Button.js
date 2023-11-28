import "./Button.css"

const Button = ({text, bgC}) => {
  return (
    <button className="global_btn" style={{backgroundColor: bgC}}>
      {text}
    </button>
  )
}

Button.defaultProps = 
{
    text : "card content",
    bgC: "var(--bright_red)"
}

export default Button
