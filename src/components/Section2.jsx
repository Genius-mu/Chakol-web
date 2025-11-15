import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-[5%]">
        <div className="w-[90%] flex justify-between flex-col md:flex-row gap-y-7 items-center">
          <div className="w-fit flex flex-col justify-center gap-2">
            <h3 className="text-blue-700 font-semibold text-[18px]">
              About Omega
            </h3>
            <h2 className="text-black font-bold text-2xl">
              Hardwood supplier in France
            </h2>
            <p className="text-black/80 text-[15px] max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              sint, voluptate quidem voluptatibus eveniet hic delectus qui iusto
              quo corrupti beatae impedit officiis provident at quas laborum
              fuga obcaecati nihil.
            </p>
            <Link
              to=""
              className="group flex items-center justify-center text-[15px] py-2 px-5 
                         border-2 border-blue-600 bg-blue-600 shadow-xl rounded uppercase text-white
                         hover:border-blue-500 hover:bg-blue-500
                         transition-all ease-in-out duration-300 w-fit"
            >
              <span className="transition-all duration-300">read more</span>
              <span className="pl-2 transition-all duration-300 group-hover:pl-4">
                {">"}
              </span>
            </Link>
          </div>
          <div className="w-fit h-[20em] overflow-hidden border shadow-xl border-blue-600 rounded-t-[40%] rounded-br-[40%] p-1 flex justify-center items-center">
            <img
              src="/images/img2.webp"
              alt=""
              className="object-center w-full h-full rounded-t-[40%] shadow-xl rounded-br-[40%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
