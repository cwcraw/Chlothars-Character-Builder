import Vue from "vue";
import App from "./App.vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import Vuex from "vuex";
// import server from '../server.js'
require("dotenv").config(require("find-config")(".env"));
const config = require("../config");

Vue.use(VueApollo);
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currChar: {},
    charList: {},
  },
  mutations: {
    changeChar: () => {},
  },
});
const apolloClient = new ApolloClient({
  uri: process.env.DATABASE_URL || "http://localhost:4000/", // need to add an "or" statement telling it to try both
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
