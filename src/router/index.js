import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import UsersApp from '../Pages/UsersApp.vue'
import PostsApp from '../Pages/PostsApp.vue'
import CommentsApp from '../Pages/CommentsApp.vue'
import PhotosApp from '../Pages/PhotosApp.vue'
import TodosApp from '../Pages/TodosApp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path :'/',
      name : 'users',
      component : UsersApp
    },
    {
      path:'/posts',
      name:'posts', 
      component:PostsApp
    },
    {
      path:'/comments',
      name:'comments',
      component : CommentsApp
    },
    {
      path:'/photos',
      name : 'photos',
      component:PhotosApp
    },
    {
      path :'/todos',
      name :'todos',
      component:TodosApp
    }
  ]
  
})

export default router
