export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('view/home.vue'),
        children: [
            {
                path: "/",
                name: "index",
                component: () => import('com/main/index.vue')
            },
            {
                path: "/change",
                name: "change",
                component: () => import('com/safe/change.vue')
            },
            {
                path: "/information",
                name: "information",
                component: () => import('com/safe/inf.vue')
            },
            {
                path: "/rate",
                name: "rate",
                component: () => import('com/rate/rate.vue')
            },
            {
                path: "/find",
                name: "find",
                component: () => import('com/find/find.vue')
            },
            {
                path: "/analysis",
                name: "analysis",
                component: () => import('com/analysis/analysis.vue')
            },
            {
                path: "/history",
                name: "history",
                component: () => import('com/history/history.vue')
            },
            {
                path: "/resultInput",
                name: "resultInput",
                component: () => import('com/resultInput/resultInput.vue')
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import('view/login.vue')
    },
]



