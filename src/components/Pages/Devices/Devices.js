import React from "react";
import devices from "../../../assets/images/devices.svg";
import device from "../../../assets/images/handelDevice.png";
const Devices = () => {
  return (
    <div className="my-28 mx-28">
      <div>
        <div className="text-center ">
          <h1 className="text-[#5D10E3] text-2xl font-bold">
            Available On
          </h1>
        </div>
        <div>
          <p className="text-center mt-5">
            Available On Our Products can be used in all devies <br />
            like Computer, Laptop, Mobiile, Tablet etc
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 items-center justify-center my-12 gap-12">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-5xl text-black font-bold text-center"><span className="text-[#5D10E3] ">Available on </span> <br /> all Platforms</h1>
            <img className="mt-12" src={devices} alt="" />
          </div>
        </div>

        <div>
          <img src={device} alt="" />
        </div>
      </div>

      {/* <div className="my-28 mx-48  flex-col lg:flex-row-reverse">
          <h1 className="text-4xl font-bold uppercase px-48 mx-8"><span className="text-4xl font-bold uppercase pb-5"
          style={{ color: "#5C71EF" }}>Available on </span> <br /> all Platforms</h1>
      <div  className="flex flex-row-reverse space-x-4 space-x-reverse  ">
        <img src={device} className="max-w-sm mb-16 mx-44" alt='' />
        <img src={devices} className="py-8 px-2" alt='' />
      </div>
      </div> */}
    </div>
  );
};

export default Devices;
