import information from 'view/common/safe/inf.vue';
import change from 'view/common/safe/change.vue';
import other from 'view/common/other/index.vue';
export default [
    {
        path: '/',
        component: () => import('view/home/home.vue'),
        meta: {
            title: "首页"
        },
        children: [
            {
                path: '/',
                name: "home",
                component: () => import('view/home/index.vue'),
            },
            {
                path: 'system',
                component: () => import('view/home/system.vue'),
                redirect: { name: 'home' },
                meta: {
                    title: "系统管理"
                },
                children: [
                    {
                        path: "rate",
                        name: "Rate",
                        meta: {
                            title: "教师评分"
                        },
                        component: () => import('view/student/rate/rate.vue')
                    },
                    {
                        path: "findTeacher",
                        alias: '/find',
                        name: "findTeacher",
                        meta: {
                            title: "成绩查询"
                        },
                        component: () => import('view/common/find/teacher.vue')

                    },
                    {
                        path: "findStudent",
                        name: "findStudent",
                        meta: {
                            title: "成绩查询"
                        },
                        component: () => import('view/common/find/student.vue')

                    },

                    {
                        path: "class",
                        meta: {
                            title: "成绩分析"
                        },
                        component: () => import('view/common/analysis/teacher.vue'),

                    },
                    {
                        path: "student",
                        meta: {
                            title: "成绩分析"
                        },
                        component: () => import('view/common/analysis/student.vue')
                    },

                    {
                        path: "history",
                        name: "History",
                        component: () => import('view/teacher/history/history.vue')
                    },
                    {
                        path: "resultInput",
                        name: "resultInput",
                        component: () => import('view/teacher/resultInput/resultInput.vue')
                    }
                ]
            },
            {
                path: 'account',
                redirect: { name: 'home' },
                component: () => import('view/home/system.vue'),
                meta: {
                    title: "账号信息"
                },
                children: [
                    {
                        path: "information",
                        name: "Information",
                        meta: {
                            title: "个人信息"
                        },
                        component: information
                    },
                    {
                        path: "change",
                        name: "ChangePassword",
                        meta: {
                            title: "修改密码"
                        },
                        component: change
                    },
                ]
            },
            {
                path: 'other',
                redirect: { name: 'home' },
                component: () => import('view/home/system.vue'),
                meta: {
                    title: "其他设置"
                },
                children: [
                    {
                        path: "other1",
                        name: "other1",
                        meta: {
                            title: "其他设置1"
                        },
                        component: other
                    },
                    {
                        path: "other2",
                        name: "other2",
                        meta: {
                            title: "其他设置2"
                        },
                        component: other
                    },
                ]
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        meta: { title: "登录" },
        component: () => import('view/login/login.vue')
    },
]



