import { useState } from "react";
import { Link } from "react-router-dom";

const Section5 = () => {
  const [Cards, setCards] = useState([
    {
      imgVal: "/images/img2.webp",
      h2Val: "Premium Hardwood Charcoal",
      pVal: "Lorem ipsum dolor sit elit. Possimus maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
    {
      imgVal: "/images/img5.webp",
      h2Val: "Eco-Friendly Charcoal",
      pVal: "Lorem ipsum dolor sit elit. Possimus maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
    {
      imgVal: "/images/img4.webp",
      h2Val: "Hardwood Lump Charcoal",
      pVal: "Lorem ipsum dolor sit elit. Possimus maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
  ]);

  return (
    <>
      <section className="w-full flex justify-center items-center pt-[10%] pb-[5%]">
        <div className="w-[90%] flex justify-center items-center flex-col gap-y-7">
          <div className="w-full flex justify-center gap-y-3 items-center flex-col">
            <h2 className="text-black font-bold [text-shadow:1px_1px_2px_#000] text-center text-3xl">
              Why Choose Omega Hardwood
            </h2>
            <p className="text-black text-[15px] leading-5 text-center">
              Lorem ipsum ullam fuga esse totam. Modi quae inventore dolorem
              repellendus.
            </p>
          </div>

          <div className="w-full h-full gap-3 flex flex-wrap justify-center items-center">
            {Cards.map((card, index) => (
              <>
                <div className="w-full md:w-[30%] flex justify-center gap-4 pb-5 flex-col h-fit bg-white shadow-xl hover:scale-101 transition ease-in-out duration-200">
                  <div className="w-full h-[12em] overflow-hidden shadow-xl flex justify-center items-center">
                    <img
                      src={card.imgVal}
                      alt=""
                      className="object-center hover:scale-105 w-full h-full shadow-xl transition ease-in-out duration-200"
                    />
                  </div>
                  <div className="flex pl-4 flex-col gap-y-3 justify-center">
                    <h2 className="text-black text-[16px] font-semibold">
                      {card.h2Val}
                    </h2>
                    <p className="text-black text-[15px] max-w-[320px]">
                      {card.pVal}
                    </p>
                    <Link
                      to=""
                      className="group flex items-center justify-center text-[15px] py-1 px-5 
                         border-2 border-blue-600 bg-blue-600 shadow-xl rounded uppercase text-white
                         hover:border-blue-500 hover:bg-blue-500
                         transition-all ease-in-out duration-300 w-fit"
                    >
                      <span className="transition-all duration-300">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
