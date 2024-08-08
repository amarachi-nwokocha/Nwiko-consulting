import React from "react";

const Team = () => {
  return (
    <div className="min-h-[70vh] bg-blue md:px-20 px-5 pt-10 pb-10">
      <div className="text-center my-5 md:mb-20 text-white text-5xl">
        <h2>
          Meet The <span className="text-yellow">Team</span>
        </h2>
      </div>

      <div className="flex flex-col-reverse  ml-6 md:ml-0  lg:flex-row md:justify-around ">
        <div className="grid gap-96 md:gap-4 snap-x mt-14 md:mt-0 grid-cols-4 overflow-auto  md:grid-cols-2">
          {/* card1 */}
          <div className="p-4 snap-start mx-10 md:mx-0 w-72">
            <p className="text-md text-white">
              “Participating in the design contest on was a game-changer for my
              career. The exposure and recognition I received opened doors to
              exciting opportunities and collaborations. It's a platform that
              truly values and celebrates design talent.”{" "}
            </p>
            <div className="flex  mt-10 justify-between">
              <div className="flex">
                {/* <img src={eclipse} alt="" /> */}
                <div className="leading-0 pl-3">
                  <p className="font-bold">Sarah C</p>
                  <span className="text-sm text-[#9F9393]">
                    Graphic designer
                  </span>
                </div>
              </div>
              <div>
                {/* <img src={} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
