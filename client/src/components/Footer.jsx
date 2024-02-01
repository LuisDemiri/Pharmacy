import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"footerSection"}>
          <h3>Contact Us</h3>
          <p>" Pharmacy Tirana , Albania , Rruga Peti "</p>
          <p> Email: info@pharmatech.com </p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className={"footerSection"}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={"socialLinks"}>
          <h3>Follow us</h3>
          <ul>
            <li>
              {" "}
              <a href="#">
                <i className="fab fa-facebook-f"></i>
                Pharma Tech
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fab fa-twitter"></i>
                Pharma Tech
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fab fa-instagram"></i>
                pharma_tech
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={"bottomBar"}>
        <p>&copy; 2024 PharmaTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
