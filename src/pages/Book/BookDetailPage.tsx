import { Container } from "@mui/material";
import axios from "axios";
import BookCard from "components/Book/BookCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty, objectToQuerystring } from "util/commonUtil";
import instance from "util/http";

export interface AladinBookDetailDataType {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: {
    cardReviewImgList?: string[];
    itemPage: number;
    originalTitle: string;
    subTitle: string;
    ratingInfo: {
      ratingScore: number;
      ratingCount: number;
      commentReviewCount: number;
      myReviewCount: number;
    };
  };
}
export interface NaverBookDetailDataType {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

const BookDetailPage = () => {
  const [aladinBookDetailData, setAladinBookDetailData] =
    useState<AladinBookDetailDataType | null>(null);
  const [naverBookDetailData, setNaverBookDetailData] =
    useState<NaverBookDetailDataType | null>(null);
  const bookIdParams = useParams();

  const aladinDetailParams = {
    ttbkey: process.env.REACT_APP_ALADIN_KEY,
    output: "js",
    ItemId: bookIdParams.id,
    // Version: 20131101444,
    Version: 20131101,
    OptResult: "ratingInfo,Toc,Story,cardReviewImgList",
  };
  const naverDetailParam = {
    d_isbn: bookIdParams.id,
  };
  const multipleAixos = () => {
    const axiosReqArr = [
      instance.get(
        `/v1/search/book_adv.json${objectToQuerystring(naverDetailParam)}`
      ),
      instance.get("/ttb/api/ItemLookUp.aspx", { params: aladinDetailParams }),
    ];
    axios
      .all(axiosReqArr)
      .then(
        axios.spread((...res) => {
          const [naverData, aladinData] = [
            res[0].data.items[0],
            res[1].data.item[0],
          ];
          if (!isEmpty(naverData)) {
            setNaverBookDetailData(naverData);
          }
          if (!isEmpty(aladinData)) {
            setAladinBookDetailData(aladinData);
          }
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getDetailData();
    multipleAixos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookIdParams]);
  return (
    <>
      <Container>
        <BookCard
          aladinDetailData={aladinBookDetailData}
          naverBookDetailData={naverBookDetailData}
        />
      </Container>
    </>
  );
};

export default BookDetailPage;

/* 
{
    "title": "부자 아빠 가난한 아빠 1 (20주년 특별 기념판) - 개정증보판",
    "link": "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=134925661&amp;partner=openAPI&amp;start=api",
    "author": "로버트 기요사키 (지은이), 안진환 (옮긴이)",
    "pubDate": "2018-02-22",
    "description": "『부자 아빠 가난한 아빠 1』의 내용에 세계 금융 변화에 맞춘 41개의 ‘20년 전 그리고 오늘’과 토론과 실천을 위한 10가지 ‘스터디세션’ 등 원고지 500매 분량이 추가된 업그레이드 에디션.",
    "isbn": "K162532501",
    "isbn13": "9791158883591",
    "itemId": 134925661,
    "priceSales": 15300,
    "priceStandard": 17000,
    "mallType": "BOOK",
    "stockStatus": "",
    "mileage": 850,
    "cover": "https://image.aladin.co.kr/product/13492/56/coversum/k162532501_2.jpg",
    "categoryId": 2225,
    "categoryName": "국내도서>경제경영>재테크/투자>재테크/투자 일반",
    "publisher": "민음인",
    "salesPoint": 130521,
    "adult": false,
    "fixedPrice": true,
    "customerReviewRank": 8,
    "subInfo": {
        "subTitle": "개정증보판",
        "originalTitle": "Rich Dad Poor Dad (2017년)",
        "itemPage": 448,
        "cardReviewImgList": [
            "https://image.aladin.co.kr/product/13492/56/cardview/K162532501_t1.jpg",
            "https://image.aladin.co.kr/product/13492/56/cardview/K162532501_t2.jpg",
            "https://image.aladin.co.kr/product/13492/56/cardview/K162532501_t8.jpg"
        ],
        "ratingInfo": {
            "ratingScore": 7.7,
            "ratingCount": 81,
            "commentReviewCount": 50,
            "myReviewCount": 32
        }
    }
},
{
    "title": "사장학개론",
    "link": "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=313250109&amp;partner=openAPI&amp;start=api",
    "author": "김승호 (지은이)",
    "pubDate": "2023-04-19",
    "description": "한국과 미국, 전 세계를 오가며 ‘사장을 가르치는 사장’으로 알려진 『돈의 속성』의 저자 김승호 회장의 신간이다. 평생 사장으로 살아온 그의 경영철학 모두를 10여 년에 걸쳐 정리해 온 그는, 이번 『사장학개론』 책을 통해 120가지 주제로 그 내용을 모두 담아 완성했다.",
    "isbn": "K832832683",
    "isbn13": "9791188331888",
    "itemId": 313250109,
    "priceSales": 22500,
    "priceStandard": 25000,
    "mallType": "BOOK",
    "stockStatus": "",
    "mileage": 1250,
    "cover": "https://image.aladin.co.kr/product/31325/1/coversum/k832832683_3.jpg",
    "categoryId": 3103,
    "categoryName": "국내도서>경제경영>기업 경영>경영 일반",
    "publisher": "스노우폭스북스",
    "salesPoint": 142555,
    "adult": false,
    "fixedPrice": true,
    "customerReviewRank": 9,
    "subInfo": {
        "subTitle": "",
        "originalTitle": "",
        "itemPage": 438,
        "ratingInfo": {
            "ratingScore": 9.1,
            "ratingCount": 16,
            "commentReviewCount": 12,
            "myReviewCount": 5
        }
    }
},
{
    "title": "세이노의 가르침",
    "link": "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=309295168&amp;partner=openAPI&amp;start=api",
    "author": "세이노 (지은이)",
    "pubDate": "2023-03-02",
    "description": "2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.",
    "isbn": "K732831392",
    "isbn13": "9791168473690",
    "itemId": 309295168,
    "priceSales": 6480,
    "priceStandard": 7200,
    "mallType": "BOOK",
    "stockStatus": "",
    "mileage": 360,
    "cover": "https://image.aladin.co.kr/product/30929/51/coversum/s302832892_1.jpg",
    "categoryId": 70216,
    "categoryName": "국내도서>자기계발>성공>성공학",
    "publisher": "데이원",
    "salesPoint": 837828,
    "adult": false,
    "fixedPrice": true,
    "customerReviewRank": 9,
    "subInfo": {
        "subTitle": "",
        "originalTitle": "",
        "itemPage": 736,
        "ratingInfo": {
            "ratingScore": 8.9,
            "ratingCount": 150,
            "commentReviewCount": 137,
            "myReviewCount": 16
        }
    }
}
*/
