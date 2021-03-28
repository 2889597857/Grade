function role (params) {
    if (params == 0) {

    } else {
        return {
            jurisdiction: 1,
            name: '李四',
            role: '老师',
            object: '语文',
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