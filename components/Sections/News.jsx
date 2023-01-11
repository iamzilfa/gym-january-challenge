import { FaMapMarkerAlt } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const News = () => {
  return (
    <Wrapper>
      <div className="bg-[#00BEFF] text-black">
        <div className="max-w-[960px] mx-auto pt-20">
          <div className="flex gap-2">
            <div>
              <h1 className="text-[32px] leading-[41.6px] font-Univers font-bold">
                Students
              </h1>
              <p className="text-[17px] leading-[20px] pt-[20px] font-UniversTwo">
                Important news, links, documents, and tips for students of the
                University of Stuttgart: This page offers information on your
                studies.
              </p>
            </div>
            <div className="bg-black relative  -mb-10 relative z-50 text-white rounded-full w-[380px] h-[270px] flex flex-col items-center justify-center">
              <p className="text-[14px] w-48">
                INFORMATION FOR PROSPECTIVE STUDENTS
              </p>
              <span className="absolute bottom-0 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
