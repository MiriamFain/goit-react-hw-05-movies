import React from 'react';

const NotFound = () => {
  return (
    <div className="m-[10px] md:my-[40px] md:mx-[77px] font-[Inconsolata] font-bold">
      <div className="mt-[4%] block md:flex w-full">
        <div className="md:w-[50%]">
          <img
            src="https://krishnandinesh.github.io/404-Error/images/scarecrow.png"
            alt="img"
          />
        </div>
        <div className="ml-[10%] md:w-[50%]">
          <div className="font-[Space Mono] font-bold text-[64px]">
            I Have Bad News <br /> For You
          </div>
          <div
            className="font-[Space Mono] font-bold text-[32px] md:text-[24px] mt-[34px] mb-[64px] leading-11"
            style={{ letterSpacing: '-0.035em' }}
          >
            The page you are looking <br />
            for might be removed or is <br />
            temporarily unavailable
          </div>
          <button className="font-[Space Mono] py-[23px] px-[43px] bg-[#333333] text-white">
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
