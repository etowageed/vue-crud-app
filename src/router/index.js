import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PeopleView from "../views/PeopleView.vue";
import CreateView from "../views/CreateView.vue";
import PeopleEdit from "../views/Edit.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/people",
      name: "people",
      component: PeopleView,
    },
    {
      path: "/people/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/people/:id/edit",
      name: "peopleEdit",
      component: PeopleEdit,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
