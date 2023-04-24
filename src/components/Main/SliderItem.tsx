import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import useAxios from "../../hooks/useAxios";
import styled from "@emotion/styled";
import { alaDum } from "../../util/aladinDummy";
import Spinner from "../common/Spinner";

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #d2c8c0;
  }
`;
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
  apiParams: object;
  tabTarget: number;
}

const SliderItem = ({
  tabSlideSet,
  apiParams,
  tabTarget,
}: SliderItemPropsType): React.ReactElement => {
  // 슬라이드셋팅, axios파라미터,
  // const [bookData, setBookData] = useState<BookDataType[]>([]);

  // const { response, loading, error } = useAxios({
  //   method: "get",
  //   url: "/ttb/api/ItemList.aspx",
  //   params: apiParams,
  //   apiType: "aladin",
  //   tabTarget: tabTarget,
  // });

  useEffect(() => {
    console.log(123);
  }, [tabTarget]);
  return (
    // <>
    //   {!loading ? (
    //     <StyledSlider {...tabSlideSet}>
    //       {response?.map((item, idx) => {
    //         return (
    //           <Box key={idx} sx={{ display: "flex", flexDirection: "column" }}>
    //             <Card
    //               sx={{
    //                 display: "flex",
    //                 height: "50vh",
    //                 maxHeight: "50vh",
    //                 boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2) inset",
    //               }}
    //             >
    //               <Box sx={{ padding: "2%", width: "30%" }}>
    //                 <CardMedia
    //                   component="img"
    //                   sx={{ width: "100%", height: "100%", objectFit: "fill" }}
    //                   image={item.cover}
    //                 />
    //               </Box>
    //               <CardContent
    //                 sx={{
    //                   flex: "1 0 auto",
    //                   width: "70%",
    //                   pt: "2%",
    //                   height: "100%",
    //                 }}
    //               >
    //                 <Typography component="span" color="text.secondary">
    //                   {item.bestDuration ? item.bestDuration : "신규진입"}
    //                 </Typography>
    //                 <Typography component="div" variant="h5">
    //                   {item.title}
    //                 </Typography>
    //                 <Typography
    //                   variant="subtitle1"
    //                   color="text.secondary"
    //                   component="div"
    //                 >
    //                   {item.author}
    //                 </Typography>
    //                 <Typography
    //                   variant="subtitle1"
    //                   color="text.secondary"
    //                   component="div"
    //                   sx={{
    //                     overflow: "auto",
    //                     maxHeight: "50%",
    //                     mt: "2%",
    //                   }}
    //                 >
    //                   {item.description}
    //                 </Typography>
    //               </CardContent>
    //             </Card>
    //           </Box>
    //         );
    //       })}
    //     </StyledSlider>
    //   ) : (
    //     <Spinner />
    //   )}
    // </>
    //
    <StyledSlider {...tabSlideSet}>
      {alaDum?.map((item, idx) => {
        // {response?.map((item, idx) => {
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
                  {item.bestDuration ? item.bestDuration : "신규진입"}
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
    </StyledSlider>
  );
};

export default SliderItem;
