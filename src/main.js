import "@babel/polyfill";
import Vue from "vue";
// import Vuex from 'vuex'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BinAdmin from "./plugin";
import "./assets/styles/index.styl";
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import { Calendar } from "element-ui";
import "./assets/styles/calendar.styl";
// mock
import "./mock/mockServer";

import SvgIcon from "./components/SvgIcon.vue";
import "./assets/iconfont/iconfont.js";

Vue.use(BinAdmin);
// Vue.component(Subarea)
Vue.component("chart", ECharts);
Vue.component("SvgIcon", SvgIcon);
Vue.use(Calendar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
