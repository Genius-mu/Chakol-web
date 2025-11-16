import React from "react";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <>
      <section className="w-full bg-black/60 bg-[url(/images/img12.webp)] bg-blend-darken bg-cover bg-center flex justify-center items-center py-[6%]">
        <div className="w-[90%] flex justify-center items-center flex-col gap-y-4">
          <h2 className="font-bold text-xl sm:text-3xl [text-shadow:1px_1px_2px_#000] text-center text-white">
            Looking For a Hardwood Supplier in France
          </h2>
          <p className="text-white [text-shadow:1px_1px_2px_#000] text-[13px] sm:text-[15px] max-w-[700px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            praesentium enim eos maiores modi, deleniti similique iste quaerat
            odio iusto quam laudantium asperiores provident, earum eum quae
            itaque! Tenetur, alias?
          </p>
          <Link
            to=""
            className="group flex items-center justify-center text-[13px] sm:text-[15px] py-2 px-5 bg-blue-700 shadow-xl rounded uppercase text-white hover:bg-blue-600 transition-all ease-in-out duration-300 w-fit"
          >
            <span className="transition-all duration-300">Contact Us</span>
            <span className="pl-2 transition-all duration-300 group-hover:pl-4">
              {">"}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Section6;
