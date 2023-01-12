import { FaMapMarkerAlt } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <Wrapper>
      <div className="bg-white text-black">
        <div className="max-w-[960px] mx-auto py-20">
          <p className="text-[22px] leading-[28.6px] pt-[20px] pb-[15px] font-bold">
            Contact
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="border-2 border-black py-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="px-8 mt-10 space-y-4 ">
                <h1 className="leading-[22.8px] font-UniversTwo font-bold text-xl">
                Dezernat Internationales
                </h1>
                <div className="space-y-3">
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span>
                      <span className="underline">Profile page:</span> Mon & Wed
                      10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m.
                      to 4 p.m. , Tue & Thur, 10 a.m. to noon
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-black py-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="px-8 mt-10 space-y-4 ">
                <h1 className="leading-[22.8px] font-UniversTwo font-bold text-xl">
                Student Counseling Center
                </h1>
                <div className="space-y-3">
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span>
                      <span className="underline">Profile page:</span> Mon & Wed
                      10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m.
                      to 4 p.m. , Tue & Thur, 10 a.m. to noon
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-black py-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="px-8 mt-10 space-y-4 ">
                <h1 className="leading-[22.8px] font-UniversTwo font-bold text-xl">
                Student Service and Examination Office
                </h1>
                <div className="space-y-3">
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span className="underline">Profile page</span>
                  </p>
                  <p>
                    <span></span>
                    <span>
                      <span className="underline">Profile page:</span> Mon & Wed
                      10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m.
                      to 4 p.m. , Tue & Thur, 10 a.m. to noon
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
