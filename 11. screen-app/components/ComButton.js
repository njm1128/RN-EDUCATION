import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { publicColors } from '../assets/colors';
import { withNavigation } from 'react-navigation';

// Button 을 쓰지 않는 이유: 안드로이드, 아이폰이 생긴게 다르다.
// withNavigation: 이것을 가져오면 navigation이라는 객체를 자동으로 받아오도록 되어있다.
// Class로 쓰게되면 props로 들어오게 되어 this.props.navigation이라 해야 됨.
// this.props.navigation.navigate가 undifined라 뜸.
// props에 들어오지도 않았는데 미리 실행되어 버림

const { width } = Dimensions.get('window');

// stateless를 만들어 해결 할 것임.
// functionable (state, props 가 없음)
const ComButton = ({ text, nav, signUp }) => {
    return (
        <TouchableOpacity 
            style={styles.btn}
            onPress={ signUp 
                             ? () => nav.navigate({routeName: 'SignUp'}) 
                             : () => alert('아직 개발 안했슈...')
                    }
        >
            <Text style={styles.btnTxt}>{text}</Text>
        </TouchableOpacity>
    );
}

/* 
class ComButton extends React.Component {
    constructor(props) {
        super(props); // 나를 호출할때 준 props만 사용하겠다. 그래서 navigation이 안 생김.
    }

    // onPress={function()} => 즉시 실행하세요.
    // onPress={function} => 눌리면 실행하세요.

    // 1차 해결방안: () => 이용. arrowFunction을 눌렀을 때 함수를 실행

    render() {
        return (
            <TouchableOpacity 
                style={styles.btn} 
                onPress={ this.props.navigation.navigate({routeName: 'SignUp'}) }>
                
                <Text style={styles.btnTxt}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
*/



const styles = StyleSheet.create({
    btn: {
        width: width / 2.6,
        height: 60,
        backgroundColor: publicColors.BTN_COLOR,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 16,
        color: publicColors.WHITE_COLOR,
        fontWeight: '600'
    }
});

export default ComButton;