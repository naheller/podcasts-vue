import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import App from './App.vue'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'https://pods-gql.herokuapp.com/graphql',
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  apolloProvider,
  render: (h) => h(App),
})
