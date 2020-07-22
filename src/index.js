import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import ReduxComp from './ReduxComp'
import App from './Components/App'
import reducers from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    // <ReduxComp/>,
    document.getElementById('root')
)