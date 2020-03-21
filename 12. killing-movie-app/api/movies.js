// axios를 통해서 영화 데이터를 가져오는 function을 만든다.
// baseURL: https://api.themoviedb.org/3/
// get: movie/popular
// params: api_key=baa198c470d011d441a0eb01eacfb02b
// params: language=en-US

import axios from "axios";

// axios에게 설정을 준다.
//  1) 기본 URL
//  2) params

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "baa198c470d011d441a0eb01eacfb02b", language: "en-US" }
});

const api2 = axios.create({
  baseURL: "http://openapi.11st.co.kr/openapi/OpenApiService.tmall",
  params: {
    key: "81a6e54a50e4421d19afd67807ce1e7b",
    apiCode: "ProductSearch",
    keyword: ""
  }
});

export const movies = {
  getPopular: () => api.get("movie/popular"),
  getNowPlaying: () => api.get("movie/now_playing"),
  getSample: () => api2.get()
};
// api.get("") => https://api.themoviedb.org/3/movie/popular?api_key=baa198c470d011d441a0eb01eacfb02b&language=en-US
// 로 자동으로 URL을 만들어줌
