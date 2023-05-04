import instance from "../util/http";

export const getSearchBook = async (params: {}) => {
  const result = await instance.get("/ttb/api/ItemSearch.aspx", { params });
  return result;
};
