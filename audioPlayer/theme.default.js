import React from 'react';
import { StyleSheet, Image, StatusBar } from 'react-native';

const lg = require('./assets/logo.png');
const bg = require('./assets/bg-gradient.png');
const bgi = require('./assets/bg-gradient-inverse.png');

const LogoTitle = () => {
    return (<Image style={{ width: 48, height: 48 }} source={require('./assets/logo128px.png')} />);
}

export default DefaultTheme = {
    yupErrorMsg: {
        marginStart: 2,
        alignSelf: 'stretch',
        color: 'orange',
        justifyContent: 'center',
        width: 240
    },
    defaultHeaderScreen: {
        headerShown: true,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: 'lightgray',
        headerTitle: (props) => <LogoTitle {...props} />

    },
    defaultHeaderWithoutLogoScreen: {
        headerShown: true,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: 'lightgray'
    },
    defaultHeaderWithoutBackButtonScreen: {
        headerShown: true,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: 'lightgray',
        headerLeft: null,
        headerTitle: (props) => <LogoTitle {...props} />
    },
    defaultHeaderWithoutBackButtonLogoScreen: {
        headerShown: true,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: 'lightgray',
        headerLeft: null
    },
    activityIndicator: {
        color: '#00ff00',
        size: 'large'
    },
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    },
    row: {
        margin: 9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    backgroundImage: bg,
    backgroundImageInverse: bgi,
    cssBackgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto'
    },
    logo: lg,
    cssLogo: {
        height: 200,
        width: 200
    },
    dashboard: {
        cssBackgroundImage: {
            flex: 1,
            width: 'auto',
            height: 'auto'
        },
    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 9,
        padding: 10,
        alignSelf: 'stretch',
        color: 'black',
        width: 250,
        backgroundColor: 'white'
    },
    inputDate: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 9,
        paddingHorizontal: 10,
        fontSize: 18,
        alignSelf: 'stretch',
        color: 'lightgray',
        backgroundColor: 'white'
    },
    topics:{
        container: {
            marginTop: StatusBar.currentHeight,
            flex: 1,
            alignItems: 'stretch'
        },
        layout: {
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            },
            body: {}
        },
        pageTitle: {
            color: 'lightgray',
            fontSize: 26,
            fontWeight: '700',
            alignSelf: 'center'
        },
        boxTopic: {
            flexDirection: 'row',
            marginBottom: 12,
            gap: 12,
            alignSelf: 'center',
            marginTop: 70,
            borderRadius: 9,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 18,
            marginHorizontal: 18
        },
        labelBoxTopic: {
            verticalAlign: 'middle',
            flexShrink: 1,
            fontSize: 18,
            minWidth: 130
        },
        imgBoxTopic: {
            width: 70,
            height: 70
        }
    }
}

