import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Email from '../views/Email.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/email',
        name: 'email',
        component: Email
    }
]

const router = createRouter({ history: createWebHistory(), routes });
export default router;