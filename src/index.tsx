import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:5000/graphql',
})

const client = new ApolloClient({
  networkInterface,
})

const store = createStore(
  combineReducers({
    ...reducers,
    apollo: client.reducer()
  }),
  {},
  composeWithDevTools(
      applyMiddleware(client.middleware()),
  )
)

ReactDOM.render((
  <ApolloProvider client={client} store={store}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById('root')
)
registerServiceWorker()