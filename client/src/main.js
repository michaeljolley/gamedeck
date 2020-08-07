import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { Auth0Plugin } from "@/plugins/auth/authPlugin";
import axios from '@/plugins/auth/authInterceptor'
import router from './router'
import store from "@/store";

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

library.add(faTwitter, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
