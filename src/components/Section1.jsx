import {
  Bolt,
  BriefcaseBusiness,
  CodeXml,
  DiamondPercent,
  Drone,
  Hourglass,
  LockKeyhole,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const [Cards, setCards] = useState([
    {
      iconVal: (
        <Hourglass
          className="text-blue-700 [text-shadow:1px_1px_2px_#000] group-hover:text-white"
          strokeWidth={3}
        />
      ),
      h2Val: "Long-Lasting Burn",
      pVal: "Lorem ipsum dolor sit elit. Magni ad amet tempora impedit assumenda. Possimus, facere maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
    {
      iconVal: (
        <BriefcaseBusiness
          className="text-blue-700 [text-shadow:1px_1px_2px_#000] group-hover:text-white"
          strokeWidth={3}
        />
      ),
      h2Val: "100% Natural",
      pVal: "Lorem ipsum dolor sit elit. Magni ad amet tempora impedit assumenda. Possimus, facere maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
    {
      iconVal: (
        <Drone
          className="text-blue-700 [text-shadow:1px_1px_2px_#000] group-hover:text-white"
          strokeWidth={3}
        />
      ),
      h2Val: "Low Smoke, High Performance",
      pVal: "Lorem ipsum dolor sit elit. Magni ad amet tempora impedit assumenda. Possimus, facere maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
    {
      iconVal: (
        <Bolt
          className="text-blue-700 [text-shadow:1px_1px_2px_#000] group-hover:text-white"
          strokeWidth={3}
        />
      ),
      h2Val: "Trusted Quality & Reliable Supply",
      pVal: "Lorem ipsum dolor sit elit. Magni ad amet tempora impedit assumenda. Possimus, facere maiores eius nihil. Eum eos asperiores assumenda delectus modi",
    },
  ]);

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
                <motion.div
                  variants={cardVariants}
                  initial="hiddenRight"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.3 }}
                  className="group w-full flex p-3 rounded justify-center items-center flex-col gap-y-3 h-[18em] bg-white shadow-xl hover:bg-blue-600 hover:scale-103 transition ease-in-out duration-200"
                >
                  {card.iconVal}
                  <h2 className="text-black group-hover:text-white text-xl font-semibold text-center">
                    {card.h2Val}
                  </h2>
                  <p className="text-black group-hover:text-white text-[15px] max-w-[320px] text-center">
                    {card.pVal}
                  </p>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
