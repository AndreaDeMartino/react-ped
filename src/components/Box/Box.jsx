// STYLE
import "./box.scss";

const Box = ({ list, colored, setItem }) => {
  return (
    <div className="box">
      {list.map((item, index) => {
        return (
          <div className="boxItem" key={index} onClick={() => setItem(item)}>
            {console.log(item)}
            <p>{item}</p>
            <span
              className={colored ? item.replace(/\s/g, "") : "noBadge"}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
