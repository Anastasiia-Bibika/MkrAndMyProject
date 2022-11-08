import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SecondPage from "@/pages/SecondPage.vue";
import ThirdPage from "@/pages/ThirdPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/second",
    component: SecondPage,
  },
  {
    path: "/third",
    component: ThirdPage,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
