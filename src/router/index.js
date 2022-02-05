import { views } from "./views.js"

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: views,
})
