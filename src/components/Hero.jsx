import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* <section className="w-full flex justify-center items-center py-[10%] bg-[url('/images/img1.webp')] bg-cover bg-center bg-fixed"> */}
      <section className="w-full flex justify-center items-center py-[25%] md:py-[17%] xl:py-[10%] bg-[url('/images/img1.webp')] bg-cover bg-center bg-fixed">
        <div className="w-[90%] flex flex-col justify-between gap-y-1 sm:gap-y-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white font-bold [text-shadow:1px_1px_2px_#000] text-xl sm:text-2xl md:text-3xl"
          >
            Premium Hardwood
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white font-bold [text-shadow:1px_1px_2px_#000] text-xl sm:text-2xl md:text-3xl"
          >
            Charcoal Suppliers in France
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-[15px] [text-shadow:1px_1px_2px_#000] leading-5 max-w-[500px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            ratione! Tempore enim mollitia optio vero!
          </motion.p>
          <span className="flex justify-center mt-3 items-center w-fit h-fit gap-x-4">
            <Link
              to=""
              className="group flex items-center justify-center text-[13px] sm:text-[15px] py-2 px-5 
             border-2 border-blue-600 bg-blue-600 shadow-xl rounded uppercase text-white hover:border-blue-500 hover:bg-blue-500 transition-all ease-in-out duration-300"
            >
              <span className="transition-all duration-300">shop now</span>
              <span className="pl-2 transition-all duration-300 group-hover:pl-4">
                {">"}
              </span>
            </Link>

            <Link
              to=""
              className="group flex justify-center items-center text-[13px] sm:text-[15px] py-2 px-5 border-2 border-blue-600 shadow-xl rounded uppercase text-white hover:bg-blue-600 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
            >
              <span className="transition-all duration-300">contact us</span>
              <span className="pl-2 transition-all duration-300 group-hover:pl-4">
                {">"}
              </span>
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
