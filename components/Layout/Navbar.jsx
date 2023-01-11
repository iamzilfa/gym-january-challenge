import Image from "next/image";
import Logo from "../../public/assets/vectors/logo-en.svg";
import Logos from "../../public/assets/vectors/logo-inverted-en.svg";

import { FaMapMarkerAlt } from "react-icons/fa";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import {
  faLanguage,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Wrappers/Wrapper";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <nav className="bg-[#ddd]">
        <div className="bg-blue-800 text-white">
          <div className="max-w-[960px] mx-auto">
            <div className="py-2 flex justify-end items-center gap-2">
              <p>University of Sturttrt</p>
              <div className="border-2 rounded-full w-5 h-5 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="">University of Stortag</p> */}
        <div className=" pt-[50px] pb-[20px] text-black bg-white ">
          <div className="max-w-[960px] mx-auto">
            <div className="flex justify-between mb-[20px] items-center">
              <div className="flex flex-col items-center">
                <Image src={Logo} alt="Logo" className="w-80" />
                <span className="-mt-4 -ml-16">For Students</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <FontAwesomeIcon icon={faLanguage} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#333"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </div>
                <div onClick={() => setShow(!show)}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {show && (
        <div className="h-screen bg-[#333333] bg-opacity-90 text-white -mt-[165px]">
          <div className="flex items-center bg-[#333333] justify-between px-[5.625rem] py-10">
            <div className="flex items-center gap-2">
              <span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </div>
              </span>
              <span onClick={() => setShow(!show)}>
                <Image src={Logo} alt="Logo" className="w-56" />
              </span>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col gap-5 text-lg text-white px-[5.625rem]">
              {["home", "about", "contact", "blog", "pages", "More"].map(
                (item, i) => {
                  return (
                    <>
                      <span className="border-b-2 border-dashed p-2 hover:bg-[#00bcff]">
                        <Link
                          href={item}
                          key={i}
                          className="flex justify-between"
                        >
                          <span>{item}</span>
                          <span>icon</span>
                        </Link>
                      </span>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Navbar;
