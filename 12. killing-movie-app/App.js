import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CommonBtn from "./components/CommonBtn";
import { movies } from "./api/movies";
import MovieContainer from "./components/MovieContainer";

class App extends React.Component {
  // state: 변경되면 화면을 재시작 한다.
  state = {
    viewPopular: null,
    viewNowPlaying: null,
    popularBtn: false,
    nowPlayingBtn: false,
    loading: false
  };

  // redux :: state를 모든 js가 사용할 수 있게 만들어주는 기능
  // state를 메모리(컴퓨터 전역)에 올려줌
  // 사용하고 싶은 곳에서만 전역변수가 된다.

  // contextAPI :: state를 모든 js가 API처럼 사용할 수 있게 만드는 기능
  // state를 api로 가져옴
  // 호환성이 떨어짐

  // render() 후 자동으로 실행되는 function
  componentDidMount = async () => {
    // async - await :: await이 완료될 때 까지 기다려!
    let popular, nowPlaying;
    let sample;

    // 실행해 !
    try {
      popular = await movies.getPopular(); // await이 실행되는 동안
      nowPlaying = await movies.getNowPlaying();
      sample = await movies.getSample();
      // getPopular()를 가져올 때 까지 기다려, 프로그램을 멈춰
      // 만약에 가져오고 있는 중인데 프로그램이 실행된다면 에러가 발생할 수도 있음.
    } catch (error) {
      // 만약 에러가 나면 너가 잡아줘!
      alert("영화 데이터를 가져오는데 실패!");
    } finally {
      // 정상구동 하든, 에러나든, 마지막에 나를 거쳐
      // console.log(popular.data.results);

      var parseString = require("react-native-xml2js").parseString;
      var xml = sample.data;
      var array = new Array();
      parseString(xml, function(err, result) {
        // console.log(result.ProductSearchResponse.Products);
        var data = result.ProductSearchResponse.Products;
        data.map(prod => {
          var list = prod.Product;
          list.map(p => {
            var obj = {
              name: p.ProductName[0],
              price: p.ProductPrice[0],
              image: p.ProductImage[0],
              grade: 0
            };
            array.push(obj);
          });
        });
        return;
      });
      console.log(array);

      popular = popular.data.results;
      nowPlaying = nowPlaying.data.results;

      this.setState({
        viewPopular: popular,
        viewNowPlaying: nowPlaying,
        loading: true
      });
    }
  };

  // onPress     === onClick      : 누름과 동시에 실행
  // onPresOut   === After click  : 누르고 마우스를 떼야 실행

  render() {
    const {
      viewPopular,
      viewNowPlaying,
      popularBtn,
      nowPlayingBtn,
      loading
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          {/* <CommonBtn onPress={ () => this.handlePopularClick }>Popular</CommonBtn> */}
          {/* <CommonBtn onPress={ () => this.handleNowPlayingClick }>NowPlaying</CommonBtn> */}
          <TouchableOpacity onPress={this.handlePopularClick}>
            <Text>Popular</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleNowPlayingClick}>
            <Text>NowPlaying</Text>
          </TouchableOpacity>

          {/* runtime Error :: 버그 */}
          {/* CommonBtn은 state를 가지고 있지 않아서 에러 발생 */}
        </View>

        <ScrollView>
          {popularBtn ? (
            loading ? (
              viewPopular.map(movie => (
                <MovieContainer
                  key={movie.id}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                  poster={movie.poster_path}
                />
              ))
            ) : (
              <Text>Loading ...</Text>
            )
          ) : null}

          {nowPlayingBtn ? (
            loading ? (
              viewNowPlaying.map(movie => (
                <MovieContainer
                  key={movie.id}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                  poster={movie.poster_path}
                />
              ))
            ) : (
              <Text>Loading ...</Text>
            )
          ) : null}
        </ScrollView>
      </View>
    );
  }

  handlePopularClick = () => {
    this.setState({
      popularBtn: true,
      nowPlayingBtn: false
    });
  };

  handleNowPlayingClick = () => {
    this.setState({
      popularBtn: false,
      nowPlayingBtn: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50
  },
  btnArea: {
    flexDirection: "row"
  }
});

export default App;
