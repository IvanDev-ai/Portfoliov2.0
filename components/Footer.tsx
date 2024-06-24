import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-36 mt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
      </div>

      <div className="flex flex-col mx-5 lg:mx-0 items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Do you have an<span className="text-black-700 opacity-50"> innovative </span>idea to carry out?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <button className="mt-8 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300 ">
          <a href="mailto:imartin.desarrollo@gmail.com">Contact with me!</a>
        </button>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                download={info.id === 2 ? "IvanLM_CV.pdf" : undefined}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;