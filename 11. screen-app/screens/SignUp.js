import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ComInput from '../components/ComInput';
import ComButton from '../components/ComButton';
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 40px;
`;

// none Class
// stateLess Component라

// state 역할
// state 가 바뀌면 화면이 재구성 된다. 
// 클래스 안에서만 사용할 수 있다.
class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 10, height: 50}}></View>
                <Title>Join Member</Title>
                <ComInput placeholder="email" />
                <ComInput placeholder="username" />
                <ComInput placeholder="password" />
                <ComInput placeholder="verify password" />
                <ComInput placeholder="mobile" />
                <ComButton text='Join US' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default SignUp;

// 80% class
// 10% none Class
// 10% mix (혼합)

