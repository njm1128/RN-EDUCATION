import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import { publicColors } from "../assets/colors";

const { width } = Dimensions.get("window");

class ComInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureText}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: width / 1.3,
    height: 50,
    borderColor: publicColors.GEY_COLOR,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default ComInput;
