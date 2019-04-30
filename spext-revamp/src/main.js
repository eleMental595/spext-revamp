import Vue from 'vue'
import App from './App.vue';
import VTooltip from 'v-tooltip';
import VModal from 'vue-js-modal';
Vue.use(VTooltip);
Vue.use(VModal);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')