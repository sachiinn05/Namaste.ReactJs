import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header=()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login")
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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