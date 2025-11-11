const Navbar = () => {
  return (
    <div className="flex justify-between items-center border border-gray-300 px-25 py-5 mb-10">
      <h1 className="font-bold text-xl">DAHLIA</h1>
      <ul className="hidden sm:flex gap-5">
        <li>Home</li>
        <li>About Us</li>
        <li>Property</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>
      <button className="font-bold bg-amber-300 p-2 rounded-2xl">
        Explore Now
      </button>
    </div>
  );
};

export default Navbar;
