import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import CustomForm from "./components/CustomForm.vue"
import NavBar from "./components/NavBar.vue"
import SearchPage from "./pages/SearchPage.vue"

const app = createApp(App);
app.component("customForm", CustomForm);
app.component("navBar", NavBar);
app.component("searchPage", SearchPage);

app.use(router);
app.mount("#app");