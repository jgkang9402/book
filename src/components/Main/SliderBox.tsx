import React, { useEffect, useRef, useState } from "react";
import SliderTab from "./SliderTab";
import SliderItem from "./SliderItem";

const SliderBox = (): React.ReactElement => {
  // const [data, setData] = useState<BookDataType[]>([]);
  // const [step, setStep] = useState("all");
  // const step = useRef("all");
  const tabSlideSet = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // autoplaySpeed: 2500,
  };
  const params = {
    // ttbkey: "",
    QueryType: "Bestseller",
    MaxResults: 20,
    start: 1,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    Cover: "Big",
  };

  return (
    <>
      <SliderTab />
      <SliderItem tabSlideSet={tabSlideSet} />
    </>
  );
};

export default SliderBox;

// import React, { useEffect, useRef, useState } from "react";
// import { alaDum, alaDum2, alaDum3 } from "../../util/aladinDummy";
// import Slider from "react-slick";
// import SliderTab from "./SliderTab";
// import SliderItem from "./SliderItem";

// // export interface BookDataType {
// //   // type BookDataType = {
// //   adult: boolean;
// //   author: string;
// //   bestDuration?: string;
// //   bestRank: number;
// //   categoryId: number;
// //   categoryName: string;
// //   cover: string;
// //   customerReviewRank: number;
// //   description: string;
// //   fixedPrice: boolean;
// //   isbn: string;
// //   isbn13: string;
// //   itemId: number;
// //   link: string;
// //   mallType: string;
// //   mileage: number;
// //   priceSales: number;
// //   priceStandard: number;
// //   pubDate: string;
// //   publisher: string;
// //   salesPoint: number;
// //   stockStatus: string;
// //   subInfo: object;
// //   title: string;
// // }

// const SliderBox = (): React.ReactElement => {
//   // const [data, setData] = useState<BookDataType[]>([]);
//   const [step, setStep] = useState("all");
//   // const step = useRef("all");
//   useEffect(() => {
//     console.log(alaDum);
//     // setData(alaDum);
//     // setData(alaDum2);
//     // setData(alaDum3);
//   }, []);
//   const settings = {
//     dots: true,
//     // lazyLoad: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//   };

//   return (
//     <>
//       <SliderTab />
//       <Slider {...settings}>
//         <SliderItem />;
//         {/* {(() => {
//           switch (step) {
//             case "all":
//               return data.map((item, idx) => {
//                 return <SliderItem key={idx} bookData={item} />;
//               });
//           }
//         })()} */}
//       </Slider>
//     </>
//   );
// };

// export default SliderBox;

// /*
//          {data &&
//           data.map((item, idx) => {
//             return <SliderItem key={idx} bookData={item} />;
//           })}

// */
