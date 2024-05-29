import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import CustomForm from "./components/CustomForm.vue"
import NavBar from "./components/NavBar.vue"
import SlangTable from "./components/SlangTable.vue"
import About from "./components/About.vue"
import Developer from "./components/Developer.vue"
import Team from "./components/Team.vue"
import VisionMission from "./components/VisionMission.vue"
import SearchPage from "./pages/SearchPage.vue"
import HomePageBeforeLogin from './pages/HomePageBeforeLogin.vue';
import ManagePage from './pages/ManagePage.vue'
import AboutUsPage from './pages/AboutUsPage.vue';

const app = createApp(App);
app.component("customForm", CustomForm);
app.component("navBar", NavBar);
app.component("about", About);
app.component("developer", Developer);
app.component("team", Team);
app.component("visionMission", VisionMission);
app.component("searchPage", SearchPage);
app.component("HomePageBeforeLogin",HomePageBeforeLogin);
app.component("managePage", ManagePage);
app.component("slangTable", SlangTable);
app.component("aboutUs", AboutUsPage)

app.use(router);
app.mount("#app");