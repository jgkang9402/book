import { useState, useEffect, useRef } from "react";
// import { AxiosRequestConfig } from "axios";
import instance from "../util/http";

type AxiosProps = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  params?: {};
  apiType: string;
};
type ResponseType = {
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
};

const useAxios = ({ method, url, params, apiType }: AxiosProps) => {
  const [response, setResponse] = useState<Array<ResponseType>>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  const axiosData = async () => {
    await instance[method](url, { params })
      .then((res) => {
        console.log(res);
        setResponse(res.data.item);
        // response.current = res.data.item;
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (apiType === "aladin" && params) {
      // params.ttbkey = process.env.REACT_APP_ALADIN_KEY;
    }

    axiosData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
