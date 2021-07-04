import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Login from "@/views/Login/Login.vue"
import store from "@/store"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home/Home.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["isLoggedIn"]
  if (to.name !== "Login" && !isAuthenticated)
    next({ name: "Login", query: { to: to.path } })
  else if (to.name === "Login" && isAuthenticated) {
    next({ name: "Home" })
  } else next()
})

export default router
