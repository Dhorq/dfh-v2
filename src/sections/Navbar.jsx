const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white border border-gray-300 px-5 py-5 lg:px-25 lg:py-5 mb-10">
      <h1 className="font-bold text-xl cursor-default">DAHLIA</h1>
      <ul className="hidden sm:flex gap-5">
        <li className="cursor-pointer hover:scale-105">
          <a href="#">Home</a>
        </li>
        <li className="cursor-pointer hover:scale-105">About Us</li>
        <li className="cursor-pointer hover:scale-105">Property</li>
        <li className="cursor-pointer hover:scale-105">Service</li>
        <li className="cursor-pointer hover:scale-105">Contact Us</li>
      </ul>
      <a
        href="https://linktr.ee/DahliaFamilyHouse"
        target="_blank"
        className="text-sm md:text-lg font-medium bg-amber-300 p-2 rounded-2xl cursor-pointer hover:scale-105"
      >
        Explore Now
      </a>
    </div>
  );
};

export default Navbar;
