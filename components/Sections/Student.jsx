import Wrapper from "../Wrappers/Wrapper";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Button from "../ui/Button";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

const Student = () => {
  return (
    <Wrapper>
      <div className="bg-white text-black">
        <div className="max-w-[60rem] mx-auto pt-20">
          <div>
            <div className="flex flex-col items- start bg-[#EEEEEE] w-[37.875rem] mx-auto p-5">
              <h1>Begriff</h1>
              <div className="border-2 border-gray-200 bg-white p-2">
                <p>Suchen Sie nach Begriffen aus dem Uni-Glossar</p>
              </div>
              <div className="w-48 mt-4 text-">
                <Button style="bg-[#004191] text-white text-xs">
                  BEGRIFF SUCHEN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}

      <div className="bg-white text-black">
        <div className="max-w-[60rem] mx-auto py-20">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <div>
                <img
                  src="https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[1.125rem] my-4 leading-[1.575rem] font-UniversOne font-bold">
                  Digital services
                </p>
                <div className="space-y-5">
                  {[1, 2, 3, 4, 5, 6].map((e, i) => {
                    return (
                      <div key={i} className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#333"
                            width="1.25rem"
                            height="1.25rem"
                            viewBox="0 0 20 20"
                          >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                          </svg>
                        </span>
                        <span className="font-bold text-[#004191]">
                          C@MPUS - campus management and lectures
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <img
                  src="https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[1.125rem] my-3 leading-[1.575rem] font-UniversOne font-bold">
                  Digital services
                </p>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <div key={i} className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#333"
                            width="1.25rem"
                            height="1.25rem"
                            viewBox="0 0 20 20"
                          >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                          </svg>
                        </span>
                        <span className="font-bold text-[#004191]">
                          Getting started
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <img
                  src="https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[1.125rem] leading-[1.575rem] font-UniversOne font-bold">
                  Digital services
                </p>
                <div>
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <div key={i} className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#333"
                            width="1.25rem"
                            height="1.25rem"
                            viewBox="0 0 20 20"
                          >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                          </svg>
                        </span>
                        <span className="font-bold text-[#004191]">
                          stuvus - the Student Union of the University of
                          Stuttgart [de]
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex flex-col items-center">
            <Button style="bg-[#004191] text-white">
              STUDY PROGRAMS&APOS;WEBPAGES FOR STUDENTS
            </Button>
          </div>
        </div>
      </div>

      {/* NEWS */}

      <div className="bg-black text-white mb-10">
        <div className="max-w-[60rem] mx-auto py-20">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col space-y-8">
              <div className="bg-white text-black py-8 px-6 space-y-2">
                <h1 className="text-[22px] leafing-[28.6px] nmb-[15px] font-bold">
                  Newsticker: Information on the coronavirus
                </h1>
                <div className="flex text-black space-x-2">
                  <p className="border-r pr-2">Article</p>
                  <p className="">11/10/22</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5 bg-white">
                <img
                  src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                  alt=""
                />
                <div className="text-black py-8 px-6">
                  <h1>
                    Everyone feels sometimes stressed during their studies. But
                    what can you do against it? Constanza has a few tips.
                  </h1>
                  <div className="flex text-black space-x-2 mt-4">
                    <div>
                      <p className="border-r pr-2">Article</p>
                      <p className="">11/10/22</p>
                    </div>
                    <div>
                      <div className="border rounded-full w-[60px] h-[60px] text-white flex flex-col items-center justify-center">
                        <FontAwesomeIcon
                          icon={faBlogger}
                          style={{ width: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white">
                <div className="p-[0.9375rem] flex flex-col items-center space-y-5">
                  <img
                    src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                    alt=""
                    className="rounded-full w-[13.75rem]"
                  />
                  <div className="text-black py-8">
                    <h1>Sim & Tech solve their 3rd case</h1>
                    <div className="flex">
                      <p>Article</p>
                      <p>11/10/22</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-5 bg-white">
                  <img
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="text-black py-8">
                    <h1>
                      Everyone feels sometimes stressed during their studies.
                      But what can you do against it? Constanza has a few tips.
                    </h1>
                    <div className="flex">
                      <p>Article</p>
                      <p>11/10/22</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white">
                  <div className="p-[0.9375rem] flex flex-col items-center space-y-5">
                    <img
                      src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                      alt=""
                      className="rounded-full w-[13.75rem]"
                    />
                    <div className="text-black py-8">
                      <h1>Sim & Tech solve their 3rd case</h1>
                      <div className="flex">
                        <p>Article</p>
                        <p>11/10/22</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-white">
                  <div className="p-[0.9375rem] flex flex-col items-center space-y-5">
                    <img
                      src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                      alt=""
                      className="rounded-full w-[13.75rem]"
                    />
                    <div className="text-black py-8">
                      <h1>Sim & Tech solve their 3rd case</h1>
                      <div className="flex">
                        <p>Article</p>
                        <p>11/10/22</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-20">
                <Button style="w-full text-[0.8125rem]">ALL NEWS</Button>
                <Button>ALL NEWS</Button>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-5 bg-white">
                <img
                  src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
                  alt=""
                />
                <div className="text-black py-8">
                  <h1>
                    Everyone feels sometimes stressed during their studies. But
                    what can you do against it? Constanza has a few tips.
                  </h1>
                  <div className="flex">
                    <p>Article</p>
                    <p>11/10/22</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black p-10">
                <h1>Newsticker: Information on the coronavirus</h1>
                <div className="flex">
                  <p>Article</p>
                  <p>11/10/22</p>
                </div>
              </div>
              <div className=" bg-white">
                <div className="p-[0.9375rem] flex flex-col items-center space-y-5">
                  <img
                    src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                    alt=""
                    className="rounded-full w-[13.75rem]"
                  />
                  <div className="text-black py-8">
                    <h1>Sim & Tech solve their 3rd case</h1>
                    <div className="flex">
                      <p>Article</p>
                      <p>11/10/22</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMATION */}
      <div className="bg-[#004595] text-white">
        <div className="max-w-[60rem] mx-auto py-20">
          <h1 className="text-3xl leading-[1.575rem] font-UniversOne font-bold mb-10">
            Information for students
          </h1>
          <div>
            <div className="grid grid-cols-2 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13].map((e, i) => {
                return (
                  <div key={i} className="flex gap-5">
                    <div>
                      {" "}
                      <div className="border-2 rounded-full w-32 h-32 flex flex-col items-center justify-center">
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
                    <div>
                      <h1 className="text-[22px] leading-[28.6px] font-bold">
                        All study programs
                      </h1>
                      <p>
                        On the webpages of your degree program you will find
                        information on the study program structure, …
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Student;
