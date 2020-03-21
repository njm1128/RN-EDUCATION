/*
    1. React를 가져온다.
    2. 필요한 컴포넌트를 React-Native에서 가져온다.
    3. 사용한다. (function, class, hooks)
    4. export를 통해 외부에서 사용할 수 있게 선언한다.
*/

import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

class CommonTextInput extends React.Component {
    // props 주세요.
    constructor(props) {
        // props 안에, App이 전달해준 txt가 존재한다.
        super(props);
    }

    render() {
        return (
            <TextInput style={styles.input} placeholder={this.props.placeholder} placeholderTextColor='skyblue' />
        );
    }
}

// 중괄호를 여는 경우
// 1. return 안에서 > javascript를 사용해야 할 경우              [ES6]
// 2. javascript 안에서 > json 데이터를 사용해야 할 경우         [javascript]
// 3. 우항의 값을 추출할 경우, 우항 안에 있는 녀석을 가져올 때   [ES6]

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingLeft: 25,
        width: width / 1.4,
        height: 40,
        borderColor: 'skyblue',
        borderWidth: 1,
    }
});

export default CommonTextInput;