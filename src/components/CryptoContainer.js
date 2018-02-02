import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard'
import Spinner from 'react-native-loading-spinner-overlay'

const styles = {
    contentContainer: {
       paddingBottom: 100,
       paddingTop: 55
    }
}

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const {crypto} = this.props;
        console.log('??????????????????????',crypto.data.length)
        return crypto.isFetching?
            <View>
                <Spinner
                    visible={true}
                    textContent="loading..."
                    textStyle={{color: '#253145'}}
                    animation='fade'
                />
            </View>:
            crypto.data.map((coin, index) =>
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }

    render () {
        const { crypto } = this.props;
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)