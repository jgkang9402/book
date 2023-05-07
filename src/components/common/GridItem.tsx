import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface itemDataPropsType {
  itemData: {
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
  };
  clickEvent: (bookIsbn: string, bookName: string) => void;
}
export default function GridItem({ itemData, clickEvent }: itemDataPropsType) {
  const chooseBookFunc = (bookName: string, bookIsbn: string): void => {
    console.log(bookIsbn, bookName);
    clickEvent(bookIsbn, bookName);
  };

  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        sx={{ height: "50%", backgroundSize: "contain" }}
        image={itemData.cover}
        title="green iguana"
      />
      <CardContent sx={{ pb: "0", height: "25%", overflow: "scroll" }}>
        <Typography gutterBottom component="div" sx={{ fontSize: ".8rem" }}>
          {itemData.title}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: ".8rem" }}>
          {itemData.author}
        </Typography>
        {/* <Typography color="text.secondary" sx={{ fontSize: ".8rem" }}>
          {itemData.publisher}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          fullWidth
          sx={{ mb: "1px" }}
          onClick={() => chooseBookFunc(itemData.title, itemData.isbn13)}
        >
          선택
        </Button>
      </CardActions>
    </Card>
  );
}
