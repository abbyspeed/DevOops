import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import CustomForm from "./components/CustomForm.vue"
import NavBar from "./components/NavBar.vue"
import SlangTable from "./components/SlangTable.vue"
import SearchPage from "./pages/SearchPage.vue"
import HomePageBeforeLogin from './pages/HomePageBeforeLogin.vue';
import ManagePage from './pages/ManagePage.vue'

const app = createApp(App);
app.component("customForm", CustomForm);
app.component("navBar", NavBar);
app.component("searchPage", SearchPage);
app.component("HomePageBeforeLogin",HomePageBeforeLogin);
app.component("managePage", ManagePage);
app.component("slangTable", SlangTable);

app.use(router);
app.mount("#app");