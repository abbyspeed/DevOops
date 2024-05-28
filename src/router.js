import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'

const routes = [
  { path: '/', name: "Login", component: LoginPage },
  { path: '/Signup', name: "Signup", component: SignupPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;