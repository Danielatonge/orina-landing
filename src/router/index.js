import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import BlogPost from '../components/BlogPost.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/blog/:slug',
        name: 'blog-post',
        component: BlogPost,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { top: 0 }
        }
    }
})

export default router 