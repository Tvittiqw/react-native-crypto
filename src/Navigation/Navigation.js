import React from 'react'
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Crypto from '../containers/Crypto'
import CoinDetails from '../containers/CoinDetails'
import Page1 from '../components/Page1'
import OpenDrawer from '../components/OpenDrawer'


const Enother = StackNavigator({
        enother: {screen: Page1},
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: <OpenDrawer navigate={navigation.navigate}/>,
        }),
    });

const CryptoStack = StackNavigator({
        header: {screen: Crypto},
        details: {screen: CoinDetails},
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: <OpenDrawer navigate={navigation.navigate}/>,
        }),
    });

export default RootStack = DrawerNavigator({
    Home: {screen: CryptoStack,},
    Enother: {screen: Enother}
});