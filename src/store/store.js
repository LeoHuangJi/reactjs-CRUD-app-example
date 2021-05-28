import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './../reducers/index'

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducers, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;