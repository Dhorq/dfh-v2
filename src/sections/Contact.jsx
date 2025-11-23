import front from "./../assets/img/frontporch.jpg";

const Contact = () => {
  return (
    <div className="px-25 my-10 flex flex-col justify-center items-center">
      <img
        src={front}
        alt=""
        className="min-w-full max-h-100 object-cover rounded-[10px] saturate-50"
      />
      <div className="absolute flex flex-col justify-center items-center text-center gap-2 text-white">
        <h2 className="text-2xl font-bold">Let's Visit Us</h2>
        <p>Try</p>
        <button className="bg-white text-black p-3 rounded-full font-medium cursor-pointer hover:scale-110">
          Contact Us Now!
        </button>
      </div>
    </div>
  );
};

export default Contact;
