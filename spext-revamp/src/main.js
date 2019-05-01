import Vue from "vue";
import App from "./App.vue";
import soundsRouter from "./components/Sounds/soundsRouter";
import VTooltip from "v-tooltip";
import VModal from "vue-js-modal";
Vue.use(VTooltip);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  soundsRouter,
  render: h => h(App)
}).$mount("#app");
