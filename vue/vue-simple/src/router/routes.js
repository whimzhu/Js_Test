// import Fs from "./components/fs/father.vue";
// import Demo from "./components/demo/home.vue";
// import DemoWrite from "./components/demo/write.vue";
// import DemoDetail from "./components/demo/detail.vue";

//使用路由懒加载

const Fs = () => import("@/views/fs/father.vue")
const Demo = () => import("@/views/demo/home.vue")
const DemoWrite = () => import("@/views/demo/write.vue")
const DemoDetail = () => import("@/views/demo/detail.vue")

export const routes = [{
    path: "/",
    component: Fs
  },
  {
    path: "/demo",
    component: Demo,
    children: [{
        path: "write",
        component: DemoWrite,
        name: "demo-write"
      },
      {
        path: "detail",
        component: DemoDetail,
        name: "demo-detail"
      },
      {
        path: "*",
        redirect: "write"
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
