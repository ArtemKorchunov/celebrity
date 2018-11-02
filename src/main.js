import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

import App from "./App.vue";
import { store } from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
