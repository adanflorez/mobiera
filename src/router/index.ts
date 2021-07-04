import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Login from "@/views/Login/Login.vue"

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
  const mobiera = localStorage.getItem("mobiera")
  let isAuthenticated = false
  if (mobiera) {
    const mobieraParsed = JSON.parse(mobiera)
    isAuthenticated = mobieraParsed.user.accessToken ? true : false
  }
  if (to.name !== "Login" && !isAuthenticated)
    next({ name: "Login", query: { to: to.path } })
  else next()
})

export default router
