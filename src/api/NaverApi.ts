import { objectToQuerystring } from "util/commonUtil";
import instance from "../util/http";

export const getNaverBlogData = async (params: {}) => {
  const result = await instance.get(
    `/v1/search/blog.json${objectToQuerystring(params)}`
  );
  return result;
};
