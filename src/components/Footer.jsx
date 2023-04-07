import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer px-14 bg-black">
      <div className="mb-20">
        <div className="w-2/5 pt-14 text-white">
          <h1 className="text-2xl">Join the waitlist</h1>
          <p className="text-base my-7">
            Be among the first to try out Adept — coming soon.
          </p>
        </div>
        <NavLink
          className="text-ase rounded-3xl text-black bg-white hover:bg-gray-200 py-3 px-5"
          to="/"
        >
          Sign up now
        </NavLink>
      </div>
      <div className="w-full pt-10 pb-4 flex justify-between">
        <div className="menuFooter flex gap-7 text-xl text-white">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="icon">
            <NavLink to="/twitter">
              <img src="./twitter-icon.svg" alt="" />
            </NavLink>
          </li>
          <li className="icon">
            <NavLink to="/linkedin">
              <img src="./linkedin-icon.svg" alt="" />
            </NavLink>
          </li>
        </div>
        <div className="logo w-24 h-12">
          <NavLink to="/">
            <img src="./adept-whie.svg" alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
