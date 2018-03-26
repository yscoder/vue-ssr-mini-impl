import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const createRouter = () => {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: () => import('../views/home')
            },
            {
                path: '/foo',
                component: () => import('../views/foo')
            },
            {
                path: '/bar',
                component: () => import('../views/bar')
            }
        ]
    })
}
