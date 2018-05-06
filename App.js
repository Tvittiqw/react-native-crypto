import React from 'react';
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import Store from './src/Store'
import RootStack from './src/Navigation/Navigation'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <RootStack/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('App', () => App);