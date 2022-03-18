import  "./bootstrap.min.css";
import "./style.css";


function Operator({value}) {
    return (
        <>
   <button className="fw-bold bg-light-grey num-btn">{value}</button>
        </>
    )   
}

export default Operator;