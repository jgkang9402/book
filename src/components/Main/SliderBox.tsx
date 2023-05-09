import React, { useState } from "react";
import SliderItem from "./SliderItem";

const SliderBox = (): React.ReactElement => {
  // const [data, setData] = useState<BookDataType[]>([]);
  // const [step, setStep] = useState("all");
  // const step = useRef("all");
  const [tabTarget, setTabTarget] = useState(0);
  const tabSlideSet = {
    // dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // slideToShow: 2,
          dots: false,
        },
      },
    ],
    // autoplaySpeed: 2500,
  };
  console.log("box");

  const allParams = {
    ttbkey: process.env.REACT_APP_ALADIN_KEY,
    QueryType: "Bestseller",
    MaxResults: 20,
    start: 1,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    Cover: "Big",
  };
  const programingParams = {
    ttbkey: process.env.REACT_APP_ALADIN_KEY,
    QueryType: "ItemNewSpecial",
    // CategoryId: 5058,
    MaxResults: 20,
    start: 1,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    Cover: "Big",
  };
  const economyParams = {
    ttbkey: process.env.REACT_APP_ALADIN_KEY,
    QueryType: "ItemEditorChoice",
    // QueryType: "ItemNewSpecial",
    CategoryId: 170,
    MaxResults: 20,
    start: 1,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    Cover: "Big",
  };
  const historyParams = {
    ttbkey: process.env.REACT_APP_ALADIN_KEY,
    QueryType: "BlogBest",
    // QueryType: "ItemNewSpecial",
    // CategoryId: 8984,
    MaxResults: 20,
    start: 1,
    SearchTarget: "Book",
    output: "js",
    Version: 20131101,
    Cover: "Big",
  };
  return (
    <>
      {(() => {
        switch (tabTarget) {
          case 0:
            return (
              <SliderItem
                tabSlideSet={tabSlideSet}
                tabTarget={tabTarget}
                apiParams={allParams}
              />
            );
          case 1:
            return (
              <SliderItem
                tabSlideSet={tabSlideSet}
                tabTarget={tabTarget}
                apiParams={programingParams}
              />
            );
          case 2:
            return (
              <SliderItem
                tabSlideSet={tabSlideSet}
                tabTarget={tabTarget}
                apiParams={economyParams}
              />
            );

          case 3:
            return (
              <SliderItem
                tabSlideSet={tabSlideSet}
                tabTarget={tabTarget}
                apiParams={historyParams}
              />
            );
        }
      })()}
      {/* <SliderItem tabSlideSet={tabSlideSet} tabTarget={tabTarget} /> */}
    </>
  );
};

export default SliderBox;
