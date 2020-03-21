import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { publicColors } from '../assets/colors';
import { AntDesign } from '@expo/vector-icons';
import ComInput from '../components/ComInput';
import ComButton from '../components/ComButton';

const Title = styled.Text`
    font-size: 26px;
    color: #4a69bd;
    margin-left: 20px;
`;

const Forget = styled.Text`
    font-size: 16px;
    color: ${publicColors.SUC_COLOR};
    text-decoration: underline;
`;

const Copyright = styled.Text`
    font-size: 12px;
    color: ${publicColors.GREY_COLOR};
`;

// 그냥 객체(Object) -> 아무런 기능이 없다.
// 어떠한 데이터 또는 '그' 무언가를 미리 만들어주는 공간
// 실제 우리 눈에 보이는 모든 것

const ThirdScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box_1}>
                <AntDesign name="login" size={32} />
                <Title>LOGIN</Title>
            </View>

            <View style={styles.box_2}>
                <ComInput placeholder="email" />
                <ComInput placeholder="password" secureText={true} />
                <Forget>Forget your Password ?</Forget>

                <View style={styles.btnArea}>
                    <ComButton text='Sign Up' nav={navigation} signUp={true} />
                    <View style={ { margin: 10 } }></View>
                    <ComButton text='Login' signUp={false} />
                </View>
            </View>

            <View style={styles.box_3}>
                <Copyright>&copy;copyright by developer min of Team InnovationT</Copyright>
                <TouchableOpacity onPress={ () => navigation.navigate({routeName: 'SignUp2'})}>
                    <Text>ETC Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box_1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    box_2: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    box_3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 10
    }
});

export default ThirdScreen;