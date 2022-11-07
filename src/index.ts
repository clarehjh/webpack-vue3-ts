/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2022-11-07 14:20:43
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2022-11-07 14:41:55
 */
import App from "./App.vue";
import { createApp } from "vue";
import store from "./store";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
