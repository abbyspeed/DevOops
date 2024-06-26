import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import SearchPage from './pages/SearchPage.vue'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin.vue'
import ManagePage from './pages/ManagePage.vue'
import AboutUsPage from './pages/AboutUsPage.vue'
import CreatePage from './pages/CreatePage.vue'
import CategoriesPage from './pages/CategoriesPage.vue'

const routes = [
  { path: '/', name: "HomePageBL", component: HomePageBeforeLogin },
  { path: '/Login', name: "Login", component: LoginPage },
  { path: '/Signup', name: "Signup", component: SignupPage },
  { path: '/Search', name: "Search", component: SearchPage },
  { path: '/Manage', name: "Manage", component: ManagePage},
  { path: '/About', name: "About", component: AboutUsPage},
  { path: '/Create', name:"Create", component: CreatePage},
  { path: '/Categories', name:"Categories", component: CategoriesPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;