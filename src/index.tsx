import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:5000/graphql',
})

const client = new ApolloClient({
  networkInterface,
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById('root')
)
registerServiceWorker()