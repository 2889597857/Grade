import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import NProgress from "@/lib/nprogress.js";
import { getCookie } from '@/lib/utils';

const router = createRouter({
    history: createWebHashHistory(), routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    const Cookie = getCookie()
    if (!Cookie) {
        if (to.name === 'login') next()
        else next({ name: 'login' })
    } else {
        if (to.name === 'login') next('/')
        else next()
    }
})
router.afterEach(() => {
    NProgress.done();
});
export default router