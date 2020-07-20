import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ReduxComp from './ReduxComp'
import App from './Components/App'
import reducers from './Reducers'

const store = createStore(reducers)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    // <ReduxComp/>,
    document.getElementById('root')
)