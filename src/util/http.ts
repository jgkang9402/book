import axios from "axios";

// export const instance = axios.create({
const instance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // console.log("!!!!!리퀘스트컨피그", config);
    if (config.url?.includes("/v1/")) {
      config.headers["X-Naver-Client-Id"] =
        process.env.REACT_APP_NAVER_CLIENT_ID;
      config.headers["X-Naver-Client-Secret"] =
        process.env.REACT_APP_NAVER_CLIENT_SECRET;
    }
    if (config.url?.includes("/ttb")) {
      // config.ttbkey = process.env.REACT_APP_ALADIN_KEY;
    }
    if (!config.url) {
      throw new axios.Cancel("empty requestUrl");
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (config) => {
    // console.log("@@@@@리스폰스컨피그", config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// export const multiInstance = (arr: any) => {
//   // export const multiInstance = axios.all(arr).then(
//     axios.spread((...params) => {
//       console.log(params);
//     })
//   );
// // };
// multiInstance.in

export default instance;
