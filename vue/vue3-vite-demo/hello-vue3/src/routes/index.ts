import { createRouter, createWebHashHistory } from "vue-router";
import News from "@/pages/News/index.vue";
import Activity from "@/pages/Activity/index.vue";
import About from "@/pages/About/index.vue";
import NewsDetail from "@/pages/News/Detail/index.vue";

const routes = [
  {
    path: "/news",
    component: News,
    children: [
      {
        name: "news-detail",
        path: "detail",
        component: NewsDetail,
      },
    ],
  },
  {
    path: "/activity",
    component: Activity,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
