import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import grp from "../../../assets/images/grp.png";
import grp1 from "../../../assets/images/grp-1.png";
import grp2 from "../../../assets/images/grp-2.png";
import grp3 from "../../../assets/images/grp-3.png";



// export default class SimpleSlider extends Component {
//     render() {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//       return (
//         <div className=" ">
//           <h2> Single Item</h2>
//           <Slider {...settings}>
//             <div>
//             <img src={grp} alt=""/>
//             </div>
//             <div className="justify-center align-item-center">
//             <img className="w-4/6 h- " src={grp1} alt=""/>
//             </div>
//             <div>
//             <img src={grp2} alt=""/>
//             </div>
           
//           </Slider>
//         </div>
//       );
//     }
//   }




  export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      return (
        <div className="py-8 mb-10 ">
          <h2 className="text-center py-8 text-4xl text-[#681EA5] font-bold"> Team Lfzero </h2>
          <p className="text-center mb-8">Lfzero is led by a dynamic team of talented and skilled people. <br /> Aiming to make quality education accessible to all, Lfzero <br /> has many dreamers with work experience in various <br /> domestic and multinational organizations.</p>
          <Slider {...settings}>
            <div>
            <img className="px-8" src={grp} alt=""/>
            </div>
            <div>
            <img className="px-8" src={grp1} alt=""/>
            </div>
            <div>
            <img className="px-8" src={grp2} alt=""/>
            </div>
            <div>
            <img className="px-8" src={grp3} alt=""/>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }