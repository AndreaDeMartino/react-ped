// STYLE
import "./button.scss";

const Button = ({ color, text, changeList, element, type }) => {
  return (
    <div 
    className={type === 'home' ? `button${color} button home` : `button${color} button`} 
    onClick={ () => {changeList(element)} }>
      <p>{text}</p>
    </div>
  );
};

export default Button;
