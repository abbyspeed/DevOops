import { createApp } from 'vue'
import App from './App.vue'

import CustomForm from "./components/CustomForm.vue"

const app = createApp(App);
app.component("customForm", CustomForm);

app.mount("#app");