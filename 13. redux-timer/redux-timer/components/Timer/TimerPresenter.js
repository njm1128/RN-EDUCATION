// presenter는 화면을 구성해주는 것
// 역할이 나누어짐
// 오로지 화면만 구성

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;

  let seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends React.Component {
  // props가 바뀔 때를 검증해야 함.
  // isPlaying이 true가 되면 실행을 시켜야 함
  // false가 되면 멈추고 초기화시켜야 함

  // 검증하는 방법은 lifeCycle에 있다.
  // props 하고 state가 업데이트 될 때마다 실행되는 함수
  shouldComponentUpdate = (nextProps, nextState) => {
    alert("asdfasdf");
    const currentProps = this.props;

    console.log(currentProps);

    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
    }
    return true;
  };

  if(isPlaying) {
    // timerDuration이 timerDuration - 경과시간이 되야 한다.
  }

  render() {
    const {
      isPlaying,
      timerDuration,
      startTimer,
      restartTimer,
      elapsed,
      test
    } = this.props;

    console.log(isPlaying, timerDuration, elapsed, test);

    startTimer("send data");

    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          <Text style={styles.time}>{formatTime(timerDuration - elapsed)}</Text>
        </View>
        <View style={styles.downArea}>
          {isPlaying ? (
            <Button iconName="stop-circle" action={restartTimer} />
          ) : (
            <Button iconName="play-circle" action={startTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  upArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  downArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  time: {
    fontSize: 100
  }
});

export default Timer;
