// STYLE
import "./button.scss";

const Button = ({ color, text }) => {
  return (
    <div className={`button${color} button`}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
