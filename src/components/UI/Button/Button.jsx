// STYLE
import "./button.scss";

const Button = ({ color, text, changeList, element}) => {
  return (
    <div 
    className={`button${color} button`} 
    onClick={ () => {changeList(element)} }>
      <p>{text}</p>
    </div>
  );
};

export default Button;
