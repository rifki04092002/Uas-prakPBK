import { createRouter, createWebHistory } from "vue-router";
import Weather from "../components/Weather.vue";

const routes = [{ path: "/", component: Weather }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
