// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <header className="w-full h-[5em] flex justify-center items-center bg-transparent fixed top-0 left-0 z-50">
//         <div className="w-[90%] border border-white flex justify-between items-center bg-[rgba(0,0,0,.1)] backdrop-blur-2xl px-4 py-3 rounded-2xl">
//           <h1 className="text-xl md:text-2xl text-white [text-shadow:1px_1px_2px_#000] font-bold uppercase">
//             omega
//           </h1>
//           <nav className="hidden md:flex justify-center items-center gap-x-3">
//             <Link
//               to=""
//               className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//             >
//               Home
//             </Link>
//             <Link
//               to=""
//               className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//             >
//               About
//             </Link>
//             <Link
//               to=""
//               className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//             >
//               Blog
//             </Link>
//             <Link
//               to=""
//               className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//             >
//               Contact Us
//             </Link>
//             <Link
//               to=""
//               className="text-[15px] py-2 px-5 bg-blue-600 rounded-xl uppercase text-white hover:bg-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//             >
//               shop now
//             </Link>
//           </nav>

//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X size={28} strokeWidth={3} color="black" />
//             ) : (
//               <Menu size={28} strokeWidth={3} color="black" />
//             )}
//           </button>
//         </div>

//         <div
//           className={`md:hidden flex flex-col gap-4 bg-blue-700 text-white px-[7%] transition-all duration-300 overflow-hidden w-full ${
//             isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
//           }`}
//         >
//           <Link
//             to=""
//             className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//           >
//             Home
//           </Link>
//           <Link
//             to=""
//             className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//           >
//             About
//           </Link>
//           <Link
//             to=""
//             className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//           >
//             Blog
//           </Link>
//           <Link
//             to=""
//             className="text-[16px] text-white hover:text-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//           >
//             Contact Us
//           </Link>
//           <Link
//             to=""
//             className="text-[15px] py-2 px-5 bg-blue-600 rounded-xl uppercase text-white hover:bg-blue-500 transition [text-shadow:1px_1px_2px_#000] ease-in-out duration-200"
//           >
//             shop now
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
        {/* MAIN BAR */}
        <div className="w-full flex justify-center">
          <div
            className="max-w-[90%] w-full flex justify-between items-center 
    bg-[rgba(0,0,0,.25)] backdrop-blur-xl 
    px-4 py-4 mt-3 rounded-2xl"
          >
            {/* LOGO */}
            <h1 className="text-xl md:text-2xl text-white font-bold uppercase [text-shadow:1px_1px_2px_#000]">
              omega
            </h1>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-x-5">
              <Link className="text-white hover:text-blue-400 transition duration-200 [text-shadow:1px_1px_2px_#000]">
                Home
              </Link>
              <Link className="text-white hover:text-blue-400 transition duration-200 [text-shadow:1px_1px_2px_#000]">
                About
              </Link>
              <Link className="text-white hover:text-blue-400 transition duration-200 [text-shadow:1px_1px_2px_#000]">
                Blog
              </Link>
              <Link className="text-white hover:text-blue-400 transition duration-200 [text-shadow:1px_1px_2px_#000]">
                Contact Us
              </Link>

              <Link className="py-2 px-5 bg-blue-600 rounded-xl uppercase text-white hover:bg-blue-500 transition duration-200 [text-shadow:1px_1px_2px_#000]">
                shop now
              </Link>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} strokeWidth={3} color="white" />
              ) : (
                <Menu size={28} strokeWidth={3} color="white" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`md:hidden flex flex-col gap-4 bg-black/90 text-white 
  px-6 transition-all duration-300 overflow-hidden 
  w-full ${isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"}`}
        >
          <Link className="text-white hover:text-blue-500 transition duration-200">
            Home
          </Link>
          <Link className="text-white hover:text-blue-500 transition duration-200">
            About
          </Link>
          <Link className="text-white hover:text-blue-500 transition duration-200">
            Blog
          </Link>
          <Link className="text-white hover:text-blue-500 transition duration-200">
            Contact Us
          </Link>

          <Link className="py-2 px-5 bg-blue-600 rounded-xl uppercase text-white hover:bg-blue-500 transition duration-200">
            shop now
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
