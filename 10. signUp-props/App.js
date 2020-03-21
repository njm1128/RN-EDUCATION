import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CommonTextInput from './components/CommonTextInput';
import { LinearGradient } from 'expo-linear-gradient';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#dedede', '#fff', '#192f6a']}>
            <Text>Sign Up.</Text>
            <Text>welcome to this page.</Text>
            <CommonTextInput placeholder='id...' />
            <CommonTextInput placeholder='email...' />
            <CommonTextInput placeholder='password...' />
            <CommonTextInput placeholder='verify password...' />
            <CommonTextInput placeholder='name...' />
            <CommonTextInput placeholder='address...' />
            <CommonTextInput placeholder='mobile...' />
            <CommonTextInput placeholder='post number...' />
        </LinearGradient>
      </View>
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
  node 설치
  expo-cli <방화벽 | 안티바이러스 백신 프로그램 종료>
  expo init ProjectName <윈도우 사용자 -> blacklist.js 파일에 정규표현식 수정(역슬래시 추가)>
  여러 컴포넌트들을 사용
  this.state -> 변경되면 화면이 자동으로 리로드 된다.
  this.props -> 컴포넌트 간 데이터를 주고받을 수 있다.

  Linear-gradient, StatusBar, Axios

  -> 인기있는 영화 / 신작
  -> 버튼으로 실시간 데이터 서비스
*/