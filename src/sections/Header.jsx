import front from "./../assets/img/frontporch.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center px-25 my-10">
      <h2 className="font-bold text-9xl">DAHLIA FAMILY HOUSE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-16">
        <div className="w-full h-[500px] border rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={front}
            alt="Front Porch"
          />
        </div>
        <div className="border rounded-2xl">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
