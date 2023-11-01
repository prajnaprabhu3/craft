import Badge from "./badge";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 my-20 ">
      <Badge />
      <div className="flex flex-col items-center text-4xl gap-y-3 font-bold">
        <h2>Crafting Beautiful User</h2>
        {/* <h2 className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-[#e8778c]"> */}
        <h2 className="text-transparent text-5xl bg-clip-text bg-gradient-to-r to-purple-300 from-[#e8778c]">
          Interface
        </h2>
      </div>

      <p className="text-sm font-medium">
        With React, TailwindCSS, Framer motion
      </p>
    </div>
  );
};

export default Hero;
