import { Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex bg-black justify-center items-center w-full py-[5%]">
        <div className="w-[90%] flex flex-wrap gap-y-7 justify-between items-start">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl text-white [text-shadow:1px_1px_2px_#000] font-bold uppercase">
              omega
            </h1>
            <span className="flex w-fit h-fit gap-x-3">
              <Link
                to=""
                className="group p-2 rounded-[50%] bg-white/90 hover:bg-blue-600 transition-all ease-in-out duration-300 w-fit"
              >
                <Twitter className="text-black group-hover:text-white transition-all ease-in-out duration-300 " />
              </Link>
              <Link
                to=""
                className="group p-2 rounded-[50%] bg-white/90 hover:bg-blue-600 transition-all ease-in-out duration-300 w-fit"
              >
                <Linkedin className="text-black group-hover:text-white transition-all ease-in-out duration-300 " />
              </Link>
              <Link
                to=""
                className="group p-2 rounded-[50%] bg-white/90 hover:bg-blue-600 transition-all ease-in-out duration-300 w-fit"
              >
                <Instagram className="text-black group-hover:text-white transition-all ease-in-out duration-300 " />
              </Link>
            </span>
          </div>

          <div className="flex flex-col justify-center gap-y-4">
            <h1 className="text-xl text-white [text-shadow:1px_1px_2px_#000] font-bold uppercase">
              Quick Links
            </h1>
            <nav className="flex flex-col justify-center gap-y-2">
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  {">"}
                </span>
                <span className="transition-all duration-300">Home</span>
              </Link>
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  {">"}
                </span>
                <span className="transition-all duration-300">About Us</span>
              </Link>
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  {">"}
                </span>
                <span className="transition-all duration-300">Blog</span>
              </Link>
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  {">"}
                </span>
                <span className="transition-all duration-300">Contact Us</span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            <h1 className="text-xl text-white [text-shadow:1px_1px_2px_#000] font-bold uppercase">
              Contact Us
            </h1>
            <nav className="flex flex-col justify-center gap-y-2">
              <a
                href="mailto:adegbitemustapha73@gmail.com"
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="transition-all duration-300">
                  adegbitemustapha73@gmail.com
                </span>
              </a>
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="transition-all duration-300">+234 8020666256</span>
              </Link>
              <Link
                to=""
                className="group flex items-center text-[15px] text-white transition ease-in-out duration-200 hover:text-blue-600"
              >
                <span className="pr-1 transition-all duration-300 group-hover:pr-2 group-hover:text-blue-600 font-bold">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="transition-all duration-300">+234 9164880693</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
