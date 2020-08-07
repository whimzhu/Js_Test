import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Home",
    meta: {
      title: "首页"
    },
    component: Home,
    children: [{
        path: "hello1",
        component: () => import("../components/Hello1.vue")
      },
      {
        path: "hello2",
        component: () => import("../components/Hello2.vue")
      },
      // {
      //   path: "",
      //   redirect: "hello1"
      // }
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于"
    },
    component: () => import("../views/About.vue")
  },
  {
    path: "",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;