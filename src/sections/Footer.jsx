import front from "./../assets/img/frontporch.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-25 py-5 mt-5 justify-between ">
      <img
        src={front}
        alt="Frontyard"
        className="min-w-75 max-h-50 rounded-3xl object-cover"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Page</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Property</p>
        <p>Service</p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>X</p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Newsletter</h3>
        <form
          action=""
          className="border border-black/30 p-2 rounded-3xl w-60 lg:w-full"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none"
          />
          <button className="bg-green-400 rounded-full size-6">{">"}</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
