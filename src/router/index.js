import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/todo',
            name: 'todo',
            component: () => import('../views/TodoView.vue')
        },
        {
            path: '/todo/ref',
            name: 'todoRef',
            component: () => import('../views/TodoRefView.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../views/UserView.vue')
        },
        {
            path: '/user/:name',
            name: 'userGreeting',
            component: () => import('../views/UserGreetingView.vue')
        }
    ]
})

export default router
