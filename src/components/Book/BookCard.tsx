// import React from "react";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AladinBookDetailDataType,
  NaverBookDetailDataType,
} from "pages/Book/BookDetailPage";
import { Box } from "@mui/material";
import { getNaverBlogData } from "api/NaverApi";
import { isEmpty } from "util/commonUtil";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface BlogDataType {
  bloggerlink: string;
  bloggername: string;
  description: string;
  link: string;
  postdate: string;
  title: string;
}

interface BookCardProps {
  aladinDetailData: AladinBookDetailDataType | null;
  naverBookDetailData: NaverBookDetailDataType | null;
}

const BookCard: React.FC<BookCardProps> = ({
  aladinDetailData,
  naverBookDetailData,
}) => {
  console.log(naverBookDetailData);
  const [blogList, setBlogList] = useState<BlogDataType[] | [] | null>([]);
  const [expanded, setExpanded] = useState(false);
  const getNaverBlog = async () => {
    const naverBlogParam = {
      query: naverBookDetailData
        ? naverBookDetailData.title
        : aladinDetailData?.title,
    };
    const response = await getNaverBlogData(naverBlogParam);
    if (!isEmpty(response.data.items)) {
      setBlogList(response.data.items);
    } else {
      setBlogList(null);
    }

    console.log(response);
    console.log(response.data.items);
  };

  const handleExpandClick = () => {
    if (blogList?.length === 0 && expanded !== true) {
      getNaverBlog();
    }
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%", padding: "5%" }}>
      <CardMedia
        component="img"
        image={
          naverBookDetailData
            ? naverBookDetailData?.image
            : aladinDetailData?.cover
        }
        alt={aladinDetailData?.title}
        sx={{ margin: "0 auto", width: "70%", height: "50vh" }}
      />
      <CardContent>
        <Typography component="div" variant="h5">
          {aladinDetailData?.title}
        </Typography>
        <Typography component="div" variant="h6">
          {aladinDetailData?.author}
          <br />
          {aladinDetailData?.pubDate}
          <br />
          {aladinDetailData?.subInfo.ratingInfo.ratingScore}/10
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {aladinDetailData?.description}
        </Typography>
      </CardContent>
      <Box display={"flex"}>
        {aladinDetailData?.subInfo.cardReviewImgList?.map((item) => {
          return (
            <CardMedia
              key={item}
              component="img"
              image={item}
              alt={aladinDetailData?.title}
              sx={{ margin: "0 auto", width: "20%", height: "10vh" }}
            />
          );
        })}
      </Box>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="warning" />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/*  */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>책 소개:</Typography>
          <Typography paragraph>{naverBookDetailData?.description}</Typography>
          <br />
          <Typography paragraph>블로그:</Typography>
          {blogList?.map((item) => (
            <Typography key={item.link} paragraph>
              <a href={item.link} target="_blank" rel="noreferrer">
                <span
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></span>
              </a>
              <br />
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BookCard;
