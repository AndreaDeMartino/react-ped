// STYLE
import "./button.scss";

const Button = ({ color, text }) => {
  console.log(text)
  const getText = () => {
    switch (text) {
      case "Subscribed":
        return "ANNULLA";
      case "Avaible":
        return "ISCRIVITI";
      case "Waiting":
        return "METTITI IN ATTESA";
      case "NotAvaible":
        return "ISCRIVITI";
      default:
        return "ERRORE";
    }
  };

  return (
    <div className={`button${color} button`}>
      <p>{getText()}</p>
    </div>
  );
};

export default Button;
