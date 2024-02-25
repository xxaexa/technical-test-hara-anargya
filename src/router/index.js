import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./../view/Dashboard.vue";
import Layout from "./../view/Layout.vue";
import Overview from "./../view/Overview.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
    ],
  },

  {
    path: "/:catchAll(.*)",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
