import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    //source={{ uri: 'https://gratisography.com/wp-content/uploads/2020/07/gratisography-wild-t-rex-1170x780.jpg' }}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}> Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number
            <Text style={styles.highlight}> {props.userNumber}</Text>.</BodyText>
                <MainButton onPress={props.onRestart}>
                    NEW GAME
                </MainButton>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30
    },
    resultText: {
        textAlign: 'center'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;