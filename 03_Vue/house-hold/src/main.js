import { createApp } from "vue";
import { createPinia } from "pinia";
// import axios from "axios";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// Vue.prototype.$http = axios;

app.use(createPinia());
app.use(router);

app.mount("#app");
