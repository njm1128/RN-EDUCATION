import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const {width, height} = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              source={require('./assets/images/ico_logo.png')}
              style={styles.logo_img}
            />
            <Text style={styles.logo_txt}>4LEAF-EDU</Text>     
          </View>
          
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="id"
            />

            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="password"
            />

            <View style={styles.btn_box}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_txt}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_txt}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.copyright}>&copy;copyright 4leaf.ysh</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    flexDirection: 'row',
    marginBottom: 80
  },

  logo_img: {
    width: 40,
    height: 40,
  },

  logo_txt: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },

  content: {
    width: '75%'
  },

  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: '#dedede',
    borderWidth: 1,
    fontSize: 14,
    color: '#999'
  },

  btn_box: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  btn: {
    width: '49%'
  },

  btn_txt: {
    height: 50,
    lineHeight: 42,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#475476',
    borderRadius: 5,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 120
  },

  copyright: {
    color: '#666'
  }
});
