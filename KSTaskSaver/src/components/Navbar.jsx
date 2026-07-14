import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            KS Task Saver
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
