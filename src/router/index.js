import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import BachelorClass from "../pages/BachelorClass.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bachelorClass",
    name: "bachelorClass",
    component: BachelorClass,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;