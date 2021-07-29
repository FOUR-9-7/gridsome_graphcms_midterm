const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/home/hong/Videos/asi/gridsome/src/templates/Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/hong/Videos/asi/gridsome/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/hong/Videos/asi/gridsome/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/hong/Videos/asi/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/product/ckdu44mn40gxh010405uwgbtw/",
    component: c1
  },
  {
    path: "/product/ckdu48unc0gzq0158mbzvyzg3/",
    component: c1
  },
  {
    path: "/product/ckdu49mfc0h070102jgprxnj0/",
    component: c1
  },
  {
    path: "/product/ckdu4a79c0h0g0158pqypj0dp/",
    component: c1
  },
  {
    path: "/product/ckdu4awq00h140104ijzi92kv/",
    component: c1
  },
  {
    path: "/product/ckdu4bmyg0h1f0102jk0mwn2g/",
    component: c1
  },
  {
    path: "/product/ckdu4ch1s0h1s01580ksoy6m5/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
