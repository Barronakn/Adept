import { NavLink } from "react-router-dom";

const Model = () => {
  return (
    <div className="bg">
      <div className="px-20">
        <h1 className="text-gray-500 text-2xl pt-16">Introducing our model</h1>
        <p className="uppercase text-4xl mt-5 mb-20">Act-1</p>
      </div>
      <div className="row">
        <div className="row_1 text-4xl flex">
          <div className="rounded-2xl p-8 width bg-beige">
            <h1>Salesforce</h1>
            <p>Convert Andy Isaac into a new sales opportunity</p>
          </div>
          <div className="rounded-2xl p-8 width bg-pink">
            <h1>Google Sheets</h1>
            <p>Create profit and loss columns for the last quarter</p>
          </div>
          <div className="rounded-2xl p-8 width bg-green">
            <h1>Salesforce</h1>
            <p>Add Emma Jacobs from Acme Co as a new contact</p>
          </div>
          <div className="rounded-2xl p-8 width bg-purple">
            <h1>Google Sheets</h1>
            <p>Update revenue sum in 2022 column</p>
          </div>
        </div>
        <div className="row_2 text-4xl flex">
          <div className="rounded-2xl p-8 width bg-blue">
            <h1>Redfin</h1>
            <p>Find me a property in Houston under $600,000</p>
          </div>
          <div className="rounded-2xl p-8 width bg-yellow">
            <h1>Salesforce</h1>
            <p>Set a reminder to email Sho Ito in the morning</p>
          </div>
          <div className="rounded-2xl p-8 width bg-aubergine">
            <h1>Craigslist</h1>
            <p>Find me a refrigerator for under $1,000</p>
          </div>
          <div className="rounded-2xl p-8 width bg-beige">
            <h1>Google Sheets</h1>
            <p>Add a new column showing average spend</p>
          </div>
        </div>
      </div>
      <div className="row_3 px-20 py-40 flex">
        <p className="text-2xl w-1/2">
          Designed and trained specifically for taking actions on computers in
          response to your natural language commands. ACT-1 is our first step
          towards a foundation model that can use every software tool, API and
          website that exists.
        </p>
        <NavLink
          className="w-96 text-center ml-56 mt-20 bg-white border-2 border-black p-5 text-2xl rounded-xll hover:bg-gray-300"
          to="read"
        >
          Read more about ACT-1
        </NavLink>
      </div>
    </div>
  );
};

export default Model;
