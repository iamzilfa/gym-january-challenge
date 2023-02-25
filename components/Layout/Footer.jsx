import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../../public/assets/vectors/logo-inverted-en.svg";
import Usus from "../../public/assets/vectors/ususs.svg";
import Usus2 from "../../public/assets/vectors/usus.svg";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons

import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebookF,
  faMastodon,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#ddd]">
      <div className="container pt-[50px] pb-[20px] text-white bg-[#333] w-[1170px] mx-auto pl-[15px]">
        <div className="max-w-[960px] mx-auto">
          <div className="flex sm:flex-col gap-10 mb-[20px] -mx-[15px]">
            <div>
              <Image src={Logo} alt="Logo" className="w-56" />
            </div>

            <div className="grid grid-cols-7 gap-3">
              <div className="flex flex-col items-center space-y-1">
                <div className="border hover:bg-[#4267B2] hover:border-none rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ width: "15px" }}
                  />
                </div>
                <p>Facebook</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border instaa hover:border-none  rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faInstagram}
                    style={{ width: "20px" }}
                  />
                </div>
                <p>Instagram</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border hover:bg-[#1DA1F2] hover:border-none rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faTwitter} style={{ width: "20px" }} />
                </div>
                <p>Twitter</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border hover:bg-[#5B4AE0] hover:border-none rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMastodon}
                    style={{ width: "20px" }}
                  />
                </div>
                <p>Mastodon</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border hover:border-none hover:bg-[#c4302b] rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faYoutube} style={{ width: "20px" }} />
                </div>
                <p>YouTube</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border hover:bg-[#0072b1] hover:border-none rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: "20px" }}
                  />
                </div>
                <p>LinkedIn</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="border group hover:bg-white rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center">
                  <Image className="group-hover:hidden" src={Usus} alt="" />
                  <Image className="hidden group-hover:block" src={Usus2} alt="" />
                </div>
                <p>USUS-blog</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 -mx-[15px] gap-10 my-[80px]">
            <div className="">
              <p className="mt-[20px] mb-[15px] leading-[20.8px] font-bold">
                Audience
              </p>
              <div>
                {[
                  "Students",
                  "Employees",
                  "Alumni and supporters",
                  "Industry",
                ].map((e, i) => {
                  return (
                    <div key={i}>
                      <p className="underline hover:no-underline">{e}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-[30px]">
              <p className="mt-[20px] mb-[15px] leading-[20.8px] font-bold">
                Audience
              </p>
              <div>
                {[
                  "Legal notice",
                  "Privacy notice",
                  "Accessibility",
                  "Certificates",
                ].map((e, i) => {
                  return (
                    <div key={i}>
                      <p className="underline hover:no-underline">{e}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-[30px]">
              <p className="mt-[20px] mb-[15px] leading-[20.8px] font-bold">
                Audience
              </p>
              <div>
                {[
                  "Contact",
                  "Press",
                  "Jobs",
                  "Apply for a Doctorate or Postdoc",
                  "Uni-Shop",
                ].map((e, i) => {
                  return (
                    <div key={i}>
                      <p className="underline hover:no-underline">{e}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-[30px]">
              <p className="mt-[20px] mb-[15px] leading-[20.8px] font-bold">
                Audience
              </p>
              <div>
                {[
                  "Faculties and Institutes",
                  "Facilities",
                  "Central Administration",
                ].map((e, i) => {
                  return (
                    <div key={i}>
                      <p className="underline hover:no-underline">{e}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
