import { useState } from "react";
const Section3 = () => {
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
    {
      imgVal: "/images/img3.webp",
      h2Val: "Restaurant Grade Charcoal",
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

          <div className="w-full h-full gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center">
            {Cards.map((card, index) => (
              <>
                <div className="w-full flex rounded-t-xl justify-between items-center flex-col h-[20em] md:h-[18em] p-2 bg-white shadow-xl border-b-2 border-blue-500 hover:scale-101 transition ease-in-out duration-200">
                  <div className="w-full h-[50%] overflow-hidden border shadow-xl border-blue-600 rounded flex justify-center items-center">
                    <img
                      src={card.imgVal}
                      alt=""
                      className="object-center hover:scale-105 w-full h-full shadow-xl transition ease-in-out duration-200"
                    />
                  </div>
                  <h2 className="text-black text-[16px] font-semibold text-center">
                    {card.h2Val}
                  </h2>
                  <p className="text-black text-[15px] max-w-[320px] text-center">
                    {card.pVal}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
