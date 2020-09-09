import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'

import VueClipboard from 'vue-clipboard2'
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);

Vue.use(VueClipboard)

Vue.config.productionTip = false

// Vue.component('vue-friendly-iframe', VueFriendlyIframe);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
