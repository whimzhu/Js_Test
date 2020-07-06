import Fs from "./components/fs/father.vue";
import Demo from "./components/demo/home.vue";
import DemoWrite from "./components/demo/write.vue";
import DemoDetail from "./components/demo/detail.vue";

export const routes = [
  { path: "/", component: Fs },
  {
    path: "/demo",
    component: Demo,
    redirect: "/demo/write",
    children: [
      { path: "/demo/write", component: DemoWrite, name: "demo-write" },
      {
        path: "/demo/detail",
        component: DemoDetail,
        name: "demo-detail"
      }
    ]
  },
  { path: "*", redirect: "/" }
];
