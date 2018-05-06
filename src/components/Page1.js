import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Page1 extends Component {
    static navigationOptions = {
        title: 'Page1',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={{padding: 50}}>
                <Text>
                    Page1
                </Text>
            </View>
        );
    }
}

export default Page1;