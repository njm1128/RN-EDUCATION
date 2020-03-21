import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TabNavigation from './navigation/TabNavigation';
import MainNavigation from './navigation/MainNavigation';

// MainNavigation 안에 TabNavigation이 있다.
// TabNavigation은 그대로 있고, SignUp Stack이 어딘가에 숨어있다.
// 버튼을 누르면 SignUp을 호출시켜준다.

class App extends React.Component {
  render() {
    return (
      <MainNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

/*
  설치 목록
  npm install react-navigation
  npm install react-navigation-tabs
  npm install react-native-reanimated
  npm install react-native-gesture-handler
  npm install react-native-screens
  npm install react-navigation-stack
*/