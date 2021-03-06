import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/following',
        name: 'following',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Following.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
