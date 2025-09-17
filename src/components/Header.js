import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
const Header=()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login")
  const onlineStatus=userOnlineStatus()
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
                  <div className="company-name">
              Snap Food
                 </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status :{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us</Link>  

                    </li>
                    <li>
                       <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login" onClick={()=>{
                       btnNameReact==="Login"?setBtnNameReact("Logout"): setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button>
                </ul>

            </div>
        </div>
    )
};
export default Header;