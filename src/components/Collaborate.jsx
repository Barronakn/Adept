import { NavLink } from "react-router-dom";

const Collaborate = () => {
  return (
    <div className="collaborate relative px-20 pt-10 pb-32">
      <h1 className="text-gray-500 text-2xl pt-16">Collaborate and create</h1>
      <p className="text-black text-5xl py-32 mx-16 text-justify">
        Your hands on the wheel.
        <span className="text-gray-500">
          {" "}
          We believe that AI systems should be built with users at the center —
          where machines work together with people in the driver's seat:
          discovering new solutions, enabling more informed decisions, and
          giving us more time for the work we love.
        </span>
      </p>
      <div>
        <NavLink
          className="read text-center bg-white border-2 border-black py-4 px-10 text-2xl rounded-xll hover:bg-gray-300"
          to="read"
        >
          Join the waitlist
        </NavLink>
      </div>
    </div>
  );
};

export default Collaborate;
