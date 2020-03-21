import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { BTN_COLOR } from './colors/colors'
import { koreaFood, italyFood } from "./model/foods";
import { FontAwesome } from '@expo/vector-icons';

// Dimensions 안에서 width, height를 추출해야 한다.
const {width, height} = Dimensions.get("window");

export default class App extends React.Component {

  // state 안에 있는 데이터가 변경이 되면, 변경을 감지하여 화면을 리로드 한다. (ajax, 비동기)
  state = {
    korea: false,
    italy: false,
    mexico: false
  }

  // return은 하나의 Component만 리턴할 수 있다.
  // Component 두개를 하나로 묶어주는 기능 : Fragment
  render() {
    const {korea, italy, mexico} = this.state;

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch} onPress={this.btnHandleKorea}>
            <FontAwesome name="users" />
            <Text style={styles.btnText}>KOREA</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.touch} onPress={this.btnHandleItaly}>
            <FontAwesome name="users" />
            <Text style={styles.btnText}>ITALY</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.touch} onPress={this.btnHandleMexico}>
            <FontAwesome name="users" />  
            <Text style={styles.btnText}>MEXICO</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.container2}>
          {korea 
          ? 
            koreaFood.map( food => {
              <Text key={food.id}>
                aa
              </Text>
            }) 
          : null}
          {italy 
          ? italyFood.map( food => {
             console.log(food.name);
              <Text key={food.id}>
                {food.name} | {food.price}
              </Text>
            })  
          : null}
        </View>
      </>
    );
  }

  btnHandleKorea = () => {
    this.setState({
      korea: true,
      italy: false
    })
  }

  btnHandleItaly = () => {
    this.setState({
      italy: true,
      korea: false
    })
  }

  btnHandleMexico = () => {
    alert('Have Not Food List... Sorry!');
    this.setState({
      italy: false,
      korea: false
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  btnText: {

  },
  touch: {
    backgroundColor: BTN_COLOR,
    width: width / 2,
    height: 30,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});
