import { NavLink } from "react-router-dom";

const Hiring = () => {
  const hirings = [
    {
      id: 0,
      parag: "Creative Technologist",
      span: "San Francisco, CA",
      arrow: "→",
    },
    {
      id: 1,
      parag: "Senior Frontend Engineer",
      span: "San Francisco, CA",
      arrow: "→",
    },
    {
      id: 2,
      parag: "Software Engineer",
      span: "San Francisco, CA",
      arrow: "→",
    },
    {
      id: 3,
      parag: "Software Engineer, Foundation Models",
      span: "San Francisco, CA",
      arrow: "→",
    },
    {
      id: 4,
      parag: "Software Engineer, Infrastructure",
      span: "San Francisco, CA",
      arrow: "→",
    },
    {
      id: 5,
      parag: "Technical Sourcer",
      span: "San Francisco, CA",
      arrow: "→",
    },
  ];
  return (
    <div className="hiring mx-14 pb-20">
      <h1 className="text-gray-500 gap-5 text-2xl py-16">We are hiring</h1>
      {hirings.map((hiring) => (
        <NavLink
          to="/job"
          className="flex justify-between border-bottom pb-3 mb-5"
          key={hiring.id}
          {...hiring}
        >
          <p className="text-2xl">
            {hiring.parag} <span className="text-base">{hiring.span}</span>
          </p>
          <p className="text-4xl">{hiring.arrow}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Hiring;
