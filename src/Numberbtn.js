import  "./bootstrap.min.css";
import "./style.css";


function Numberbtn({digit}) {
 return (
     <>
<button className="fw-bold bg-light num-btn">{digit}</button>
     </>
 )   
}

export default Numberbtn;