import instance from "../util/http";

export const getSearchBook = async (params: {}) => {
  const result = await instance.get("/ttb/api/ItemSearch.aspx", { params });
  return result;
};
export const getTypeListBook = async (params: {}) => {
  const result = await instance.get("/ttb/api/ItemList.aspx", { params });
  return result;
};
