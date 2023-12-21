import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./index.scss";
let style ={color:"black"}
function Footer() {
  return (
      <footer>
        <div className="container">
          <div className="footer">
            <div className="infos">
              <div className="info">
                <FaLocationDot />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className="info">
                <MdOutlineMail />
                <p>demo@gmail.com</p>
              </div>
              <div className="info">
                <FaPhoneAlt />
                <p>Call: + 09239392392</p>
              </div>
            </div>
            <div className="bottom">
              <div className="subs">
                <input type="email" placeholder="Enter Your email" />
                <button>SUBSCRIBE</button>
              </div>
              <div className="icons">
                <div className="icon"><FaFacebookF style={style}/></div>
                <div className="icon"><FaTwitter style={style}/></div>
                <div className="icon"><FaInstagram style={style} /></div>

              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
export default Footer;
