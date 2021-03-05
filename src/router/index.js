import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
// import { getCookie } from '@/lib/utils';

const router = createRouter({
    history: createWebHashHistory(), routes
})

// router.beforeEach((to, from, next) => {
//     const Cookie = getCookie()
//     if (!Cookie) {
//         if (to.name === 'login') next()
//         else next({ name: 'login' })
//     } else {
//         if (to.name === 'login') next('/')
//         else next()
//     }
// })

export default router