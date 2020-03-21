import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.box}>
                <TouchableOpacity>
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.vote}>{this.props.vote}</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.release}>{this.props.release}</Text>
                </TouchableOpacity>

                <Image 
                    style={{width: 120, height: 180}}
                    source={{uri: `https://image.tmdb.org/t/p/w500${this.props.poster}`
                    }} 
                />
                    {/*
                        `` : 문자열과 변수를 동시에 같이 쓸 수 있음.
                    */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        margin: 10,
        padding: 10,
        backgroundColor: '#DFF9FB',
        borderRadius: 15
    },
    title: {
        fontWeight: '600'
    },
    vote: {
        color: 'grey'
    },
    release: {
        color: 'red'
    }
});

export default MovieContainer;