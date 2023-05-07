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
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ overflow: "scroll" }}
        // sx={{ maxHeight: "50vh", overflow: "scroll" }}
      >
        {itemData !== null
          ? itemData?.map((item, idx) => (
              <Grid
                sx={{
                  height: "30vh",
                  // overflow: "hidden",
                  // border: "1px solid #000",
                }}
                xs={2}
                // sm={6}
                // md={6}
                // sm={4}
                // md={4}
                sm={3}
                md={3}
                key={idx}
              >
                {/* <GridItem itemData={itemData} /> */}
                <GridItem itemData={item} clickEvent={clickEvent} />
              </Grid>
            ))
          : ""}
      </Grid>
    </Box>
  );
}

const test = [
  {
    title:
      "10대를 위한 정의란 무엇인가 - 하버드대 마이클 샌델 교수의 정의 수업",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=49477879&amp;partner=openAPI&amp;start=api",
    author: "마이클 샌델 (원작), 신현주 (글), 조혜진 (그림), 김선욱 (감수)",
    pubDate: "2014-11-30",
    description:
      "세상엔 하나의 답으로 풀 수 없는 문제가 많다. 그래서 서로 대화하고 다른 사람의 입장을 들으며 합의를 이루어 나가는 것이 중요하다. 또, 다양한 상황에 마주쳤을 때, 여러 사람의 입장에서 문제를 보고 생각하여 바른 결정을 내리는 것이 중요하다.",
    isbn: "8937886960",
    isbn13: "9788937886966",
    itemId: 49477879,
    priceSales: 10800,
    priceStandard: 12000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 600,
    cover:
      "https://image.aladin.co.kr/product/4947/78/coversum/8937886960_1.jpg",
    categoryId: 48912,
    categoryName: "국내도서>어린이>사회/역사/철학>철학",
    publisher: "미래엔아이세움",
    salesPoint: 36177,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 9,
    subInfo: {},
  },
  {
    title: "어린이를 위한 정의란 무엇인가",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=11420013&amp;partner=openAPI&amp;start=api",
    author: "안미란 (지은이), 정진희 (그림), 조광제 (감수)",
    pubDate: "2011-04-19",
    description:
      "초등학생 눈높이에 맞추어, 정의란 무엇인가에 대해 함께 읽고 토론할 수 있도록 구성한 책이다. 아이들이 일상적으로 겪는 충돌, 여러 사람들과의 관계 속에서 발생할 수 있는 문제들을 8가지 이야기를 들려준다. 그리고 각각 문제들을 정의라는 관점에서 어떻게 풀어나갈 것인지 고민하게 한다.",
    isbn: "8934950528",
    isbn13: "9788934950523",
    itemId: 11420013,
    priceSales: 10800,
    priceStandard: 12000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 600,
    cover:
      "https://image.aladin.co.kr/product/1142/0/coversum/8934950528_1.jpg",
    categoryId: 48909,
    categoryName: "국내도서>어린이>사회/역사/철학>정치/경제/법",
    publisher: "주니어김영사",
    salesPoint: 7229,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 10,
    seriesInfo: {
      seriesId: 43392,
      seriesLink:
        "http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=43392&amp;partner=openAPI",
      seriesName: "스토리텔링 가치토론 교과서 2",
    },
    subInfo: {},
  },
  {
    title: "[세트] 공정하다는 착각 + 정의란 무엇인가 - 전2권",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=256537043&amp;partner=openAPI&amp;start=api",
    author: "마이클 샌델 (지은이), 김명철, 함규진 (옮긴이), 김선욱 (감수)",
    pubDate: "2020-12-01",
    description:
      "“우리가 ‘노력하면 성공할 수 있다’고 너무나도 당연히 생각해왔던, 개인의 능력을 우선시하고 보상해주는 능력주의 이상이 근본적으로 크게 잘못되어 있다”고 주장한다. 이러한 능력주의가 제대로 공정하게 작동하고 있는지, ‘공정함=정의’란 공식은 정말 맞는 건지 진지하게 되짚어본다.",
    isbn: "K022735149",
    isbn13: "",
    itemId: 256537043,
    priceSales: 29700,
    priceStandard: 33000,
    mallType: "BOOK",
    stockStatus: "품절",
    mileage: 1650,
    cover:
      "https://image.aladin.co.kr/product/25653/70/coversum/k022735149_1.jpg",
    categoryId: 51304,
    categoryName: "국내도서>사회과학>사회학>사회학 일반",
    publisher: "와이즈베리",
    salesPoint: 2209,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 4,
    subInfo: {},
  },
  {
    title:
      "팀 켈러의 정의란 무엇인가 - 하나님의 은혜가 우리를 어떻게 정의롭게 만드는가?",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=15392651&amp;partner=openAPI&amp;start=api",
    author: "팀 켈러 (지은이), 최종훈 (옮긴이)",
    pubDate: "2012-02-20",
    description:
      "미국 기독교 지도자들이 뽑은 ‘가장 영향력 있는 목회자’, 팀 켈러의 성경적 정의론. 탁월한 변증가이자 미국 최고의 지성으로 손꼽히는 목사, 한국 유학생들에게 가장 존경받는 사람 중 한 명인 그가 우리 시대의 화두인 ‘정의’에 대해 입을 열었다. 이 책은 ‘정의’를 둘러싼 교회 안팎의 논쟁과 질문에 대한 근본적이고도 탁월한 대답이다.",
    isbn: "8953117097",
    isbn13: "9788953117099",
    itemId: 15392651,
    priceSales: 13500,
    priceStandard: 15000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 750,
    cover:
      "https://image.aladin.co.kr/product/1539/26/coversum/8953117097_1.jpg",
    categoryId: 51596,
    categoryName:
      "국내도서>종교/역학>기독교(개신교)>기독교(개신교) 신앙생활>간증/영적성장",
    publisher: "두란노",
    salesPoint: 1844,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 10,
    subInfo: {},
  },
  {
    title: "신양반사회 - 586, 그들이 말하는 정의란 무엇인가",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=289322906&amp;partner=openAPI&amp;start=api",
    author: "김은희 (지은이)",
    pubDate: "2022-03-04",
    description:
      "정치와 도덕이 분리되지 않았던 조선시대 양반사회를 떠받친 성리학적 인식체계가 여전히 살아 숨 쉬고, 재현되고, 재생산되는 작금의 현실에 주목하고 이를 ‘신양반사회’라 명명한다.",
    isbn: "K632836310",
    isbn13: "9791190955522",
    itemId: 289322906,
    priceSales: 15300,
    priceStandard: 17000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 850,
    cover:
      "https://image.aladin.co.kr/product/28932/29/coversum/k632836310_1.jpg",
    categoryId: 51304,
    categoryName: "국내도서>사회과학>사회학>사회학 일반",
    publisher: "생각의힘",
    salesPoint: 1300,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 7,
    subInfo: {},
  },
  {
    title:
      "한국 사회에서 정의란 무엇인가 - 우리 헌법에 담긴 정의와 공정의 문법",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=251701433&amp;partner=openAPI&amp;start=api",
    author: "김도균 (지은이)",
    pubDate: "2020-09-16",
    description:
      "한국 사회의 비원이자 숙원이라고 할 질문을 다시 꺼내들며 정치문화와 헌법 속에서 ‘정의와 공정의 문법’을 탐색한다.",
    isbn: "8957336966",
    isbn13: "9788957336960",
    itemId: 251701433,
    priceSales: 16200,
    priceStandard: 18000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 900,
    cover:
      "https://image.aladin.co.kr/product/25170/14/coversum/8957336966_1.jpg",
    categoryId: 51304,
    categoryName: "국내도서>사회과학>사회학>사회학 일반",
    publisher: "아카넷",
    salesPoint: 1040,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 10,
    subInfo: {},
  },
  {
    title: "정의란 무엇인가는 틀렸다",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=20395650&amp;partner=openAPI&amp;start=api",
    author: "이한 (지은이)",
    pubDate: "2012-10-22",
    description:
      "정치철학에 대한 이해를 바탕으로 마이클 샌델의 정치철학을 비판한 정치교양서. 독자들은 정의론의 대가로 알려진 마이클 샌델이 실제로는 정의의 ‘한계’를 주장하고 있으며, 따라서 그에게서 뚜렷한 정의론을 찾아볼 수 없다는 점을 이해할 수 있을 것이다.",
    isbn: "8994142258",
    isbn13: "9788994142258",
    itemId: 20395650,
    priceSales: 13500,
    priceStandard: 15000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 750,
    cover:
      "https://image.aladin.co.kr/product/2039/56/coversum/8994142258_1.jpg",
    categoryId: 51449,
    categoryName: "국내도서>인문학>서양철학>윤리학/도덕철학",
    publisher: "미지북스",
    salesPoint: 871,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 6,
    subInfo: {},
  },
  {
    title: "니체, 철학적 정치를 말하다 - 국가, 법, 정의란 무엇인가",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=131711095&amp;partner=openAPI&amp;start=api",
    author: "백승영 (지은이)",
    pubDate: "2018-02-28",
    description:
      "니체 전문가로서 니체전집의 번역자, 편집위원으로 활동하며 니체에 대한 가장 성실한 작품 내재적 분석을 쌓아온 백승영 교수가 이번에는 사회·정치론, 국가론, 법론, 정의론 등을 포함하는 니체의 실천철학의 전모를 총체적으로 밝혔다.",
    isbn: "K882532725",
    isbn13: "9791159312175",
    itemId: 131711095,
    priceSales: 22500,
    priceStandard: 25000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 1250,
    cover:
      "https://image.aladin.co.kr/product/13171/10/coversum/k882532725_1.jpg",
    categoryId: 51475,
    categoryName: "국내도서>인문학>서양철학>현대철학>프리드리히 니체",
    publisher: "책세상",
    salesPoint: 286,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 10,
    subInfo: {},
  },
  {
    title: "정의란 무엇인가",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=6132592&amp;partner=openAPI&amp;start=api",
    author: "한스 켈젠 (지은이), 김선복 (옮긴이)",
    pubDate: "2010-02-15",
    description: "",
    isbn: "8991516815",
    isbn13: "9788991516816",
    itemId: 6132592,
    priceSales: 9000,
    priceStandard: 10000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 500,
    cover:
      "https://image.aladin.co.kr/product/613/25/coversum/8991516815_1.jpg",
    categoryId: 51145,
    categoryName: "국내도서>사회과학>사회사상/사회사상사>민주주의",
    publisher: "책과사람들(법서출판사)",
    salesPoint: 159,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 9,
    subInfo: {},
  },
  {
    title: "사회 정의란 무엇인가 - 현대 정의 이론과 공동선 탐구",
    link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=60363037&amp;partner=openAPI&amp;start=api",
    author: "이종은 (지은이)",
    pubDate: "2015-06-05",
    description:
      "정치철학의 근본 과제는 권력으로 하여금 정의를 달성하게 하는 것이며, 권력이 정의를 달성할 때 좋은 정치 질서가 이루어진다는 시각에서 정의로운 사회를 위한 합리적 원칙을 모색해온 이종은 교수의 정치철학 4부작의 완결본이다.",
    isbn: "8970139281",
    isbn13: "9788970139289",
    itemId: 60363037,
    priceSales: 31500,
    priceStandard: 35000,
    mallType: "BOOK",
    stockStatus: "",
    mileage: 1750,
    cover:
      "https://image.aladin.co.kr/product/6036/30/coversum/8970139281_1.jpg",
    categoryId: 51154,
    categoryName:
      "국내도서>사회과학>사회사상/사회사상사>사회사상/사회사상사 일반",
    publisher: "책세상",
    salesPoint: 116,
    adult: false,
    fixedPrice: true,
    customerReviewRank: 0,
    subInfo: {},
  },
];
