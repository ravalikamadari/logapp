import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08d091d6 = () => interopDefault(import('..\\pages\\AllUsers.vue' /* webpackChunkName: "pages/AllUsers" */))
const _79926cc2 = () => interopDefault(import('..\\pages\\CreateTag.vue' /* webpackChunkName: "pages/CreateTag" */))
const _7830cbd4 = () => interopDefault(import('..\\pages\\CreateUser.vue' /* webpackChunkName: "pages/CreateUser" */))
const _70e15fa5 = () => interopDefault(import('..\\pages\\Log.vue' /* webpackChunkName: "pages/Log" */))
const _d4debd8e = () => interopDefault(import('..\\pages\\LoginPage.vue' /* webpackChunkName: "pages/LoginPage" */))
const _74b851ac = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _04885eaa = () => interopDefault(import('..\\pages\\TagPage.vue' /* webpackChunkName: "pages/TagPage" */))
const _7e6fd63a = () => interopDefault(import('..\\pages\\UpdateUser.vue' /* webpackChunkName: "pages/UpdateUser" */))
const _3de8ffda = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllUsers",
    component: _08d091d6,
    name: "AllUsers"
  }, {
    path: "/CreateTag",
    component: _79926cc2,
    name: "CreateTag"
  }, {
    path: "/CreateUser",
    component: _7830cbd4,
    name: "CreateUser"
  }, {
    path: "/Log",
    component: _70e15fa5,
    name: "Log"
  }, {
    path: "/LoginPage",
    component: _d4debd8e,
    name: "LoginPage"
  }, {
    path: "/profile",
    component: _74b851ac,
    name: "profile"
  }, {
    path: "/TagPage",
    component: _04885eaa,
    name: "TagPage"
  }, {
    path: "/UpdateUser",
    component: _7e6fd63a,
    name: "UpdateUser"
  }, {
    path: "/",
    component: _3de8ffda,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
