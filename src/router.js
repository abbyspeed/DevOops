import { createMemoryHistory, createRouter } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import SearchPage from './pages/SearchPage.vue'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin.vue'
import ManagePage from './pages/ManagePage.vue'

const routes = [
  {path:'/',name:"HomePageBL",component:HomePageBeforeLogin},
  { path: '/Login', name: "Login", component: LoginPage },
  { path: '/Signup', name: "Signup", component: SignupPage },
  { path: '/Search', name: "Search", component: SearchPage },
  { path: '/Manage', name: "Manage", component: ManagePage},
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
})

export default router;