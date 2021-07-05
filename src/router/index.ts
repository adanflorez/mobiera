import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Login from "@/views/Login/Login.vue"
import store from "@/store"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "",
    component: () => import("@/layouts/full-page/Full.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: Login
      }
    ]
  },
  {
    path: "",
    component: () => import("@/layouts/main/Main.vue"),
    children: [
      {
        path: "/home",
        name: "Inicio",
        component: () => import("@/views/Home/Home.vue")
      },
      {
        path: "/edit",
        name: "Editar",
        component: () => import("@/views/Edit/Edit.vue")
      }
    ]
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
    next({ name: "Inicio" })
  } else next()
})

export default router
