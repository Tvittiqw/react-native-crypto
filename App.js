import React from 'react';
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import Store from './src/Store'
import RootStack, {Auth} from './src/Navigation/Navigation'
import { Font } from 'expo';

export default class App extends React.Component {
    state = {
        fontsLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Lato-Hairline': require('./src/assets/fonts/Lato-Hairline.ttf'),
            'Lato-Light': require('./src/assets/fonts/Lato-Light.ttf'),
            'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
            'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
        });
        this.setState({fontsLoaded: true})
    }

    render() {
        return (
            this.state.fontsLoaded?
            <Provider store={Store}>
                <Auth/>
            </Provider>:null
        );
    }
}

AppRegistry.registerComponent('App', () => App);