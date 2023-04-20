import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { BookDataType } from "./SliderBox";
import { alaDum, alaDum2, alaDum3 } from "../../util/aladinDummy";
import Slider from "react-slick";
import useAxios from "../../hooks/useAxios";

export interface BookDataType {
  // type BookDataType = {
  adult: boolean;
  author: string;
  bestDuration?: string;
  bestRank: number;
  categoryId: number;
  categoryName: string;
  cover: string;
  customerReviewRank: number;
  description: string;
  fixedPrice: boolean;
  isbn: string;
  isbn13: string;
  itemId: number;
  link: string;
  mallType: string;
  mileage: number;
  priceSales: number;
  priceStandard: number;
  pubDate: string;
  publisher: string;
  salesPoint: number;
  stockStatus: string;
  subInfo: object;
  title: string;
}
interface SliderItemPropsType {
  tabSlideSet?: object;
}

const SliderItem = ({
  tabSlideSet,
}: SliderItemPropsType): React.ReactElement => {
  // 슬라이드셋팅, axios파라미터,
  // const [bookData, setBookData] = useState<BookDataType[]>([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/ttb/api/ItemList.aspx",
    params: {
      ttbkey: process.env.REACT_APP_ALADIN_KEY,
      QueryType: "Bestseller",
      MaxResults: 20,
      start: 1,
      SearchTarget: "Book",
      output: "js",
      Version: 20131101,
      Cover: "Big",
    },
    apiType: "aladin",
  });

  useEffect(() => {
    console.log(response);
  });
  return (
    <Slider {...tabSlideSet}>
      {response?.map((item, idx) => {
        return (
          <Box key={idx} sx={{ display: "flex", flexDirection: "column" }}>
            <Card
              sx={{
                display: "flex",
                height: "50vh",
                maxHeight: "50vh",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2) inset",
              }}
            >
              <Box sx={{ padding: "2%", width: "30%" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%", objectFit: "fill" }}
                  image={item.cover}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  width: "70%",
                  pt: "2%",
                  height: "100%",
                }}
              >
                <Typography component="span" color="text.secondary">
                  {item.bestDuration ? item.bestDuration : "신규"}
                </Typography>
                <Typography component="div" variant="h5">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.author}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    overflow: "auto",
                    maxHeight: "50%",
                    mt: "2%",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Slider>
  );
};

export default SliderItem;
/////////
// import React from "react";
// import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { BookDataType } from "./SliderBox";

// interface Books {
//   bookData: BookDataType;
// }

// const SliderItem = ({ bookData }: Books): React.ReactElement => {
//   const {
//     adult,
//     fixedPrice,
//     subInfo,
//     author,
//     bestDuration,
//     categoryName,
//     cover,
//     isbn,
//     isbn13,
//     link,
//     mallType,
//     pubDate,
//     publisher,
//     stockStatus,
//     title,
//     description,
//   }: BookDataType = bookData;

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column" }}>
//       <Card
//         sx={{
//           display: "flex",
//           height: "50vh",
//           maxHeight: "50vh",
//           boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2) inset",
//         }}
//       >
//         <Box sx={{ padding: "2%", width: "30%" }}>
//           <CardMedia
//             component="img"
//             sx={{ width: "100%", height: "100%", objectFit: "fill" }}
//             image={cover}
//             alt="Live from space album cover"
//           />
//         </Box>
//         <CardContent
//           sx={{
//             flex: "1 0 auto",
//             width: "70%",
//             pt: "2%",
//             height: "100%",
//           }}
//         >
//           <Typography component="span" color="text.secondary">
//             {bestDuration}
//           </Typography>
//           <Typography component="div" variant="h5">
//             {title}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             color="text.secondary"
//             component="div"
//           >
//             {author}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             color="text.secondary"
//             component="div"
//             sx={{
//               overflow: "auto",
//               maxHeight: "50%",
//               mt: "2%",
//             }}
//           >
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SliderItem;
