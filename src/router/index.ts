import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '@/components/Test.vue'
import Demo from '../views/Demo.vue'
import MyButton from '@/components/button.vue'
import ColumnDemo from '../views/ColumnDemo.vue'
import ShortcutDemo from '@/components/develop/ShortcutDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/button',
    name: 'Button',
    component: MyButton
  },
  {
    path: '/shortcut',
    name: 'ShortcutDemo',
    component: ShortcutDemo
  },
  {
    path: '/column',
    name: 'ColumnDemo',
    component: ColumnDemo
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
