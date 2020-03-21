import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer'
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// createStore: 가상의 공간을 만드는데 사용
// provider: store를 가질 수 있게 해줌.
// 1. store를 받아오는 것
// 2. 받아온 store를 children에게 전달

let store = createStore(reducer);
// store는 reducer를 받아서 store를 생성한다.
// 가상의 공간을 reducer와 연결하여 만든다.

// reducer를 redux store(전체가 사용 가능한 가상 공간)에 넣고 앱이 실행된다.

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

export default App;