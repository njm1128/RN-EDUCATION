import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

/*
  1. function (React)
  2. class (React, React-Native) O
  3. react-hooks (React, React-Native)
*/

// View == div
// Text == span
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>4LEAF-EDU</Text>
        <TextInput style={styles.input} placeholder="email..." />
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          placeholder="password..."
        />
        
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면을 100% 사용
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10
  },
  btnArea: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 20,
    margin: 10
  },
  btnText: {
    color: 'white'
  }
});

export default App;