import Vue from 'vue'
import Router from 'vue-router'
import Get from './views/Get.vue'
import Post from './views/Post.vue'
import Put from './views/Put.vue'
import Patch from './views/Patch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'get',
      component: Get
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/put',
      name: 'put',
      component: Put
    },
    {
      path: '/patch',
      name: 'patch',
      component: Patch
    }
  ]
})
