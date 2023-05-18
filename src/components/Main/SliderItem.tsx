import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { alaDum } from "../../util/aladinDummy";

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #acb1d6;
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
    <StyledSlider {...tabSlideSet}>
      {alaDum?.map((item, idx) => {
        // {response?.map((item, idx) => {
        return (
          <Box key={idx} sx={{ display: "flex", flexDirection: "column" }}>
            <Card
              sx={{
                display: "flex",
                maxHeight: "45vh",
                minHeight: "45vh",
                // height: "100%",
                width: "100%",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2) inset",
              }}
            >
              <Box sx={{ padding: "2%", width: "40%", pt: "15%", pb: "15%" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%", objectFit: "fill" }}
                  image={item.cover}
                />
              </Box>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  // width: "55%",
                  width: "60%",
                  pt: "2%",
                  maxHeight: "45vh",
                  height: "45vh",
                  // overflowY: "scroll",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: ".5rem",
                  }}
                >
                  <Typography component="span" color="text.secondary">
                    {item.bestDuration ? item.bestDuration : "신규진입"}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    // sx={{ margin: "0 auto" }}
                  >
                    책 정보 보러가기
                  </Button>
                </Box>
                {/* <Typography component="span" color="text.secondary">
                  {item.bestDuration ? item.bestDuration : "신규진입"}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ margin: "0 auto" }}
                >
                  책 정보 보러가기
                </Button> */}

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
                    // overflow: "hidden",
                    overflow: "auto",
                    // height: "70%",
                    // maxHeight: "50%",
                    maxHeight: "25vh",
                    mt: "2%",
                  }}
                >
                  {item.description}
                </Typography>
                {/* <Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ margin: "0 auto" }}
                  >
                    책 정보 보러가기
                  </Button>
                </Box> */}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </StyledSlider>
  );
};

export default SliderItem;
