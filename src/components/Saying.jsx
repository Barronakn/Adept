const Saying = () => {
  return (
    <div className="saying bg py-16 px-20">
      <h1 className="text-gray-500 text-2xl pt-16">What they’re saying…</h1>
      <div className="flex gap-12 my-40 text justify-center items-center">
        <div className="bg-gray-800 h-96 rounded-2xl p-12 text-white cursor-pointer w-1/2 ml-14">
          <blockquote cite="https://techcrunch.com/2022/04/26/2304039/">
            <p className="text-4xl">
              "Adept aims to build AI that can automate any software process."
            </p>
          </blockquote>
          <figcaption>
            <p className="text-xl">techcrunch.com</p>
          </figcaption>
          <img className="w-20 h-20" src="./tech.svg" alt="" />
        </div>
        <div className="bg-gray-800 h-96 rounded-2xl p-12 text-white cursor-pointer w-1/2 mr-14">
          <blockquote cite="https://fortune.com/2022/07/05/a-i-digital-assistants-adept-eye-on-ai/">
            <p className="text-4xl">
              "A wave of AI experts left Google, Deepmind and Meta — the race is
              on."
            </p>
          </blockquote>
          <figcaption>
            <p className="text-xl">fortune.com</p>
          </figcaption>
          <img className="w-40 h-28" src="./fortune.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Saying;
