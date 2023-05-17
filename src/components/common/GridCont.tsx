import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import GridItem from "./GridItem";

interface itemDataPropsType {
  adult: boolean;
  author: string;
  // bestDuration?: string;
  // bestRank: number;
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
interface GridContPropsType {
  itemData: itemDataPropsType[] | null | [];
  // clickEvent: (data: string) => void;
  clickEvent: (bookIsbn: string, bookName: string) => void;
}

export default function GridCont({ itemData, clickEvent }: GridContPropsType) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
        sx={{ overflow: "scroll" }}
      >
        {itemData !== null
          ? itemData?.map((item, idx) => (
              <Grid
                sx={{
                  height: "30vh",
                }}
                xs={2}
                sm={3}
                md={3}
                key={idx}
              >
                <GridItem itemData={item} clickEvent={clickEvent} />
              </Grid>
            ))
          : ""}
      </Grid>
    </Box>
  );
}
