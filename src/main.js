import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Auth0Plugin } from "./plugins/auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  client_id: process.env.VUE_APP_AUTH0_CLIENTID,
  cacheLocation: 'localstorage',
  audience: 'https://GameDeckWut/',
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
