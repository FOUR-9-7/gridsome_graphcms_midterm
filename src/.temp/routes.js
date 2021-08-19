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
    path: "/product/ckdu4a79c0h0g0158pqypj0dp/",
    component: c1
  },
  {
    path: "/product/ckdu4awq00h140104ijzi92kv/",
    component: c1
  },
  {
    path: "/product/ckdu4ch1s0h1s01580ksoy6m5/",
    component: c1
  },
  {
    path: "/product/cksgbabz40viw0c32oaxt1k10/",
    component: c1
  },
  {
    path: "/product/cksgbghfc0u6j0d41ntx16xk0/",
    component: c1
  },
  {
    path: "/product/cksgbhzfs0u8y0d411wu6408f/",
    component: c1
  },
  {
    path: "/product/cksgbkd340ura0b82owjquhw9/",
    component: c1
  },
  {
    path: "/product/cksgbm54o0vnm0b36xlhqlyxm/",
    component: c1
  },
  {
    path: "/product/cksgbo7z40w910c32emqlx9bs/",
    component: c1
  },
  {
    path: "/product/cksgbqq940vvv0b362o1ifqd5/",
    component: c1
  },
  {
    path: "/product/cksgbtik80wau0b3611l4tdw7/",
    component: c1
  },
  {
    path: "/product/cksgbw68o0v360d4122rcvkq9/",
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
