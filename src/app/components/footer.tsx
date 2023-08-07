const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <div className="mx-auto max-w-2xl text-xs h-12 flex flex-col justify-center pb-6">
        <div className="border border-t-0 border-gray-300 mb-2.5 "></div>

        <div className="flex justify-between ">
          <p>
            Inspired from
            <a href="https://rauno.me" target="_blank">
              ranuo&apos;s work
            </a>
          </p>

          <p>©Prajna Prabhu 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
