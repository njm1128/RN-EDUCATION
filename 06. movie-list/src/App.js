import React from "react";
import axios from "axios";

/*
  1. 네트워크에 존재하는 데이터를 가져와서 const 변수에 넣는다.
    How ?
    : fetch - promise (x)
    : axios
  2. const 변수를 View 시킨다.
*/

// componentDidMount();

// 라이프싸이클

// 컴포넌트(App) 만들어진 후 -> 자동으로 실행하는 함수

// render() -> didMount();

const API_KEY = "baa198c470d011d441a0eb01eacfb02b";
const URL = "https://api.themoviedb.org/3/";
const param = {
  path: "movie/popular",
  lan: "en"
};

function App() {
  const axios = require("axios"); // 네트워크에 있는 데이터를 불러오는 기능

  let movies = null;

  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        API_KEY +
        "&language=en-US&page=1"
    )
    .then(function(response) {
      // handle success
      movies = response.data.results;

      const movieList = document.getElementById("movieList");

      for (let i = 0; i < movies.length; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");

        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        span.innerText = movies[i].title;
        li.appendChild(span);
        li.appendChild(img);

        movieList.appendChild(li);
      }
    }) // 억지스러운 자바스크립트
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

  return <ol id="movieList"></ol>;
}

// map이 에러가 나는 이유
/*
  ES6 문법 => render (화면에 뿌려주는 것)
  babel이라는 기능이 필요. map은 실행이 되는데, 화면에 뿌려줄 때 에러 발생
*/
export default App;
