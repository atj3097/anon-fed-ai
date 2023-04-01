import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#004385" }}>
      <div className="header-left">
        <Link to="/">
          <h1>FedAI</h1>
        </Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="header-right">
        <button>Connect Metamask Wallet</button>
      </div>
    </header>
  );
};

export default Header;
