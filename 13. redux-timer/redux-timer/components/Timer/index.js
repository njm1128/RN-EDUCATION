import Timer from "./TimerPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

// state를 받아오기 위해 사용

// redux문법 :: as tomatoActions를 붙여줘야 함
// 위 3개 import는 세트로 따라옴

// index.js에서는 store를 받아온다. (역할 구분)

// store 받아오는 절차
// 1. state 받아오기
mapStateProps = state => {
  const { isPlaying, timerDuration, elapsed, test } = state;
  // reducer에서 2개를 가져옴

  // timer와 연결
  return {
    isPlaying,
    timerDuration,
    elapsed,
    test
  };
};
// 2. function 받아오기
mapDispatchToProps = dispatch => {
  // dispatch: 전달받은 function
  // tomatoActions: reducer를 의미한다.
  // tomatoActions가 reducer임.
  return {
    // 전달받은 함수의 startTimer하고 reducer가 가지고 있는 startTimer를 연결 시킨다.
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
};
// result : 받아온 녀석과 Timer를 함께 리턴하기

export default connect(mapStateProps, mapDispatchToProps)(Timer);

//reducer에 state 만들어지고
// return
// index에서 state 받아오고
// return
// presenter에서 state를 props로 받아오고
// console.log
