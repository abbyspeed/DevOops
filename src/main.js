import { createApp } from 'vue'
import App from './App.vue'

import CustomForm from "./components/CustomForm.vue"

import router from "./router.js"

const app = createApp(App);
app.component("customForm", CustomForm);

app.use(router);
app.mount("#app");