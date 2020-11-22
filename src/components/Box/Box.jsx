// STYLE
import "./box.scss";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { boxAnimation } from "./../../utility";

const Box = ({ list, colored, setItem }) => {
  return (
    <motion.div
      className="box"
      variants={boxAnimation}
      initial="hidden"
      animate="show"
    >
      {list.map((item, index) => {
        return (
          <div className="boxItem" key={index} onClick={() => setItem(item)}>
            <p>{item}</p>
            <span
              className={colored ? item.replace(/\s/g, "") : "noBadge"}
            ></span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Box;
