import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const handleClick = () => {
    const nav = document.querySelector(".menu");
    const menuLogo = document.querySelector(".menuLogo");
    nav.classList.add("block");
    nav.classList.remove("nn");
    menuLogo.classList.add("nn");
  };

  const handleDelete = () => {
    const nav = document.querySelector(".menu");
    const menuLogo = document.querySelector(".menuLogo");
    nav.classList.remove("block");
    nav.classList.add("nn");
    menuLogo.classList.remove("nn");
  };

  const [showbg, setShowbg] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setShowbg(position);
  };

  const bg = {
    background: showbg > 0 ? "white" : "transparent",
  };

  return (
    <div className="navigation">
      <div
        style={bg}
        className="w-full z-10 fixed top-0 px-20 pt-10 pb-4 flex justify-between"
      >
        <div className="logo w-24 h-12">
          <NavLink to="/">
            <img src="./adept.svg" alt="" />
          </NavLink>
        </div>
        <img
          src="./menu.svg"
          onClick={handleClick}
          className="menuLogo cursor-pointer w-10 h-10 none"
          alt="menu"
        />
        <div className="menu nn">
          <img
            src="./x.svg"
            onClick={handleDelete}
            className="delete cursor-pointer w-10 h-10 none"
            alt="x"
          />
          <ul className="flex gap-7 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="other z-0 px-20">
        <div className="w-2/5 pt-80">
          <h1 className="text-7xl">A new way to use computers</h1>
          <p className="text-2xl my-7">
            We’re building a machine learning model that can interact with
            everything on your computer.
          </p>
        </div>
        <NavLink
          className="text-2xl w-96 b-radius text-white bg-gray-900 hover:bg-gray-800 py-5 px-12"
          to="/"
        >
          Join the waitlist
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
