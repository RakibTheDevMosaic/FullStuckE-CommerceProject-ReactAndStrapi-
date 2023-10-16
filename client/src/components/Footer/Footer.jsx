import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            culpa totam deserunt aspernatur fugiat quasi iusto non! Accusantium,
            aliquid? Expedita, iste. Nobis rerum aliquid dignissimos.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                    Kayaloram Rd, Punnamada, Kottakulangara, Alappuzha, Kerela, 688006
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">
                   Phone: 0471 323 3432
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">
                    Email: rsdrm@gmail.com
                </div>
            </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                RSDRMSTORE 2023 CREATED BY DEV MOSAIC. PREMIUM E-COMMERCE SLUTIONS.
            </div>
            <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
