import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

import App from "./App.vue";
import { store } from "@/store";

Vue.config.productionTip = false;

Vue.use(VueNativeSock, process.env.VUE_APP_DISPLAY_SERVICE_URI, {
  store: store,
  format: "json",
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 500
});

new Vue({
  render: h => h(App)
}).$mount("#app");
