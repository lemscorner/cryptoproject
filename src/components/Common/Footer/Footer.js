import React from "react";
import "../../../styles/footer.scss";
import Github from "../../../images/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-right footer-item">
        https://lemscorner.com
      </p>
      <a className="nolink" href="https://github.com/lemscorner/cryptoproject" target="_blank" rel="noopener noreferrer"><img className="footer-item float-right" src={Github} alt="Github" /></a>
      <a className="nolink" href="https://twitter.com/lemscorner" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-twitter float-right" aria-hidden="true"></i></a>
      <a className="nolink" href="mailto:lemscorner@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-envelope float-right" aria-hidden="true"></i></a>
    </div>
  );
};

export default Footer;