import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SliderBox from "../../components/Main/SliderBox";
import SliderItem from "../../components/Main/SliderItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const MainPage = () => {
  const tabSlideSet = {
    dots: false,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // slideToShow: 2,
        },
      },
    ],
    // autoplaySpeed: 2500,
  };
  // const test = async () => {
  //   const usersCollectionRef = collection(db, "users");
  //   console.log(usersCollectionRef);
  //   const userSnap = await getDocs(usersCollectionRef);
  //   console.log(userSnap);
  //   const data = userSnap.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   console.log(data);
  // };
  // useEffect(() => {
  //   test();
  // }, []);

  return (
    <Box sx={{}}>
      {/* <Box sx={{ mt: "2rem" }}> */}
      <SliderBox />
      <Box
        sx={{ height: "500px", backgroundColor: "red", margin: "5px" }}
      ></Box>
      <Box
        sx={{ height: "500px", backgroundColor: "blue", margin: "5px" }}
      ></Box>
      <Box
        sx={{ height: "500px", backgroundColor: "yellow", margin: "5px" }}
      ></Box>
      {/* <SliderBox />
      <SliderBox /> */}
    </Box>
  );
};

export default MainPage;
