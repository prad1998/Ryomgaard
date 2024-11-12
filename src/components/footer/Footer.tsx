//import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Ryomgård Pizza og Kebab</h1>
          <p className="font-semibold text-l pb-0">
            Om os
          </p>
          <p className="text-sm">
          Hos Venedig Pizza finder du mange lækre retter. Vi serverer alt fra Drikke, Italiensk Pizza, Pesto Pizzaer, Salat Pizza, Mexicanske Pizzaer, Indbagt Pizza, Åben indbagte, Special Pizza, Hjemmelavet, Special Retter, Grillretter, Pommes frites, Pastaretter, Burger, Børnemenu, Salater, Nachos, Tilbehør, Vi er sikre på, at der er en, som vil falde i din smag.
          </p>
        </div>  
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="speciality"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Speciality
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Review
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="speciality"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Speciality
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Menu
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Kontakt os</h1>
          <div className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
             86 37 30 00
            </Link>
            <a className="hover:text-yellow-500 transition duration-300" href="https://www.facebook.com/Ryompizzakebab/?locale=da_DK" >
              Find os på facebook
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-yellow-500"> Pradeep Thayaparan</span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;