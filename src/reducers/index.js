import { combineReducers } from 'redux'
import {crypto} from './cryptoReducer'
import {coinDetails} from './coinDetailsReducer'

export default combineReducers({
    crypto: crypto,
    details: coinDetails
})