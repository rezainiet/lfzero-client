import React from "react";
import devices from "../../../assets/images/devices.svg";
import device from "../../../assets/images/handelDevice.png";
const Devices = () => {
  return (
    <div className="my-28 mx-28">
      <div>
        <div className="text-center ">
          <h1
            className="text-3xl font-bold uppercase pb-5"
            style={{ color: "#5D10E3" }}
          >
            Available On
          </h1>
        </div>
        <div>
          <h3 className="text-center">
            Available On Our Products can be used in all devies <br />
            like Computer, Laptop, Mobiile, Tablet etc
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 items-center justify-center">
        <div>
          <div>
          <h1 className="text-4xl font-bold uppercase px-48 mx-48 mt-28"><span className="text-4xl font-bold uppercase pb-5"
          style={{ color: "#5C71EF" }}>Available on </span> <br /> all Platforms</h1>
            <img src={devices} className="max-w-sm mb-16 mx-48 mt-12" alt="" />
          </div>
        </div>

        <div>
          <img src={device} className="max-w-sm mt-48 mx-2" alt="" />
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
