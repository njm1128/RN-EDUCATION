import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

// propTypes: 데이터를 받아올 때, 어떤 데이터를 받을지 미리 지정. Validation
// npm install prop-types


const Button = ({iconName, action}) => {
    return (
        <TouchableOpacity onPress={action}>
            <FontAwesome name={iconName} size={60} />
        </TouchableOpacity>
    );
}

// iconName은 문자열 이여야하고, 필수값 이여야 한다.
// onPress는 function이여야 하고, 필수값 이어야 한다.

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}


export default Button;