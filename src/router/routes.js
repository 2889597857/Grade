export default [
    {
        path: '/home',
        component: () => import('view/home.vue'),
        children: [
            {
                path: "/",
                name: "index",
                component: () => import('view/common/main/index.vue')
            },
            {
                path: "/change",
                name: "change",
                component: () => import('view/common/safe/change.vue')
            },
            {
                path: "/information",
                name: "information",
                component: () => import('view/common/safe/inf.vue')
            },
            {
                path: "/rate",
                name: "rate",
                component: () => import('view/student/rate/rate.vue')
            },
            {
                path: "/find",
                name: "find",
                component: () => import('view/common/find/find.vue')
            },
            {
                path: "/analysis",
                name: "analysis",
                component: () => import('view/common/analysis/analysis.vue')
            },
            {
                path: "/history",
                name: "history",
                component: () => import('view/teacher/history/history.vue')
            },
            {
                path: "/resultInput",
                name: "resultInput",
                component: () => import('view/teacher/resultInput/resultInput.vue')
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import('view/login.vue')
    },
]



