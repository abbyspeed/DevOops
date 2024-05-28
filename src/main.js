import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import CustomForm from "./components/CustomForm.vue"

const app = createApp(App);
app.component("customForm", CustomForm);

app.use(router);
app.mount("#app");