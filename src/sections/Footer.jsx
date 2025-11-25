import front from "./../assets/img/frontporch.jpg";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 py-5 lg:px-25 lg:py-5 mt-5 justify-between bg-white border border-gray-300">
      <img
        src={front}
        alt="Frontyard"
        className="max-w-45 max-h-35 lg:min-w-75 lg:max-h-50 rounded-3xl object-cover"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Page</h3>
        <a href="#" className="hover:text-black/70">
          Home
        </a>
        <a href="#" className="hover:text-black/70">
          About Us
        </a>
        <a href="#" className="hover:text-black/70">
          Property
        </a>
        <a href="#" className="hover:text-black/70">
          Service
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <a href="#" className="hover:text-black/70">
          Instagram
        </a>
        <a href="#" className="hover:text-black/70">
          Facebook
        </a>
        <a href="#" className="hover:text-black/70">
          X
        </a>
      </div>
      <div className="flex flex-col gap-3 w-70">
        <h3 className="text-xl font-semibold">Newsletter</h3>
        <form
          action=""
          className="border border-black/30 p-1 rounded-3xl h-10 w-60 lg:w-full flex items-center"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none flex-1 px-2 py-2 rounded-l-3xl border-none"
          />
          <button className="flex justify-center items-center bg-green-400 rounded-r-3xl size-8">
            <VscSend className="text-white text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
