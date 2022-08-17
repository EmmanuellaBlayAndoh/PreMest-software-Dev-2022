import pic from './logo.svg';
import './Nav.css';

function Nav() {
    return(
        <div className="nav">
            <div className="facts">
                <img src={pic} alt={"React logo"} />
                <h2>ReactFacts</h2>
            </div>
            <h2 className="react">React Course - Project 1</h2>
        </div>  
)}
export default Nav;