// STYLE
import './badge.scss';

const Badge = ({color}) => {
  return(
    <span className={`badge${color} badge`}></span>    
  )
}

export default Badge;