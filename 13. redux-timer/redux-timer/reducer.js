// 공통된 저장 공간 :: global state
// action을 주거나 받아오는 것을 reducer라고 함

// redux라는 공간이 있고, 공간 안에 있는 global state를 제어하거나 가져오는 액션을 reducer라고 한다.

// * redux 사용
// react-redux, redux 가 필요 npm install redux react-redux
// redux라는 녀석은 react에서만 구동되는게 아니라, Jquery, javascript, native, android, swift ...
// front를 사용하는 거의 모든 것은 redux를 사용할 수 있다.

// 1. 필요한 기능을 import 한다.
import { textFn } from "./ware";

// 2. Action을 준다. -> variable area (변수 공간)
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// 두개의 redux를 사용하겠다. (게시판에 2개를 적어놓음)

// 3. Action Creator -> How to working ? (어떻게 작동할건데 ?)
const startTimer = data => {
  alert(data);
  return {
    type: START_TIMER
  };
};
// return을 하게되면 reducer로 이동되도록 약속 되어있다.
// 이것을 action이라고 함.

const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// 4. Reducer (메인) 여기가 중요함.
const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false, // 타이머가 작동하는지, 초기값은 false
  timerDuration: TIMER_DURATION, // 얼마동안 작동할건데
  elapsed: 0, // 경과시간
  test: "a"
};
/* initialState로 시작할거고, 액션을 보낼 때마다 -> 디폴트 값으로 리듀서를 실행한다 */
// 서버가 시작하면 initial state가 Redux store에 올라간다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// 5. Reducer Function (reducer를 어떻게 실행시킬꺼야)
const applyStartTimer = state => {
  return {
    ...state, // 기존의 state를 가져옴
    isPlaying: true,
    test: "hello"
  };
};

const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsed: 0
  };
};

const applyAddSecond = state => {
  return {
    ...state,
    elapsed: state.elapsed + 1
  };
};

// 6. Export Action Creator
const actionCreator = {
  startTimer,
  restartTimer,
  addSecond
};
// 밖에서 사용할 수 있도록 actionCreator에 담아서 export 시킨다.

export { actionCreator };
// actionCreator.startTimer로 사용한다.

// 7. Export Reducer
export default reducer;

// 사고방식

// 시작 어디서 부터 ?

// 1. 사용자가 무언가를 했다.
