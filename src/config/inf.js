function getInf (params) {
    if (params) {
        return {
            jurisdiction: 0,
            name: '张三',
            role: '学生',
            email: '213@qq.com',
            phone: "123 456 7890",
            Route: [{
                name: "教师评分",
                route: "/rate"
            }, {
                name: "成绩查询",
                route: "/find"
            }, {
                name: "成绩分析",
                route: "/analysis"
            }],
        }
    } else {
        return {
            jurisdiction: 1,
            name: '李四',
            role: '老师',
            object: '语文',
            email: '123@qq.com',
            phone: "098 765 4321",
            Route: [{
                name: "成绩录入",
                route: "/resultInput"
            }, {
                name: "成绩查询",
                route: "/find"
            }, {
                name: "修改记录",
                route: "/history"
            }, {
                name: "成绩分析",
                route: "/analysis"
            }]
        }
    }
}

export {
    getInf
}