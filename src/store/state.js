export default {
    stuRoute: [{
        name: "教师评分",
        route: "/rate"
    }, {
        name: "成绩查询",
        route: "/find"
    }, {
        name: "成绩分析",
        route: "/analysis"
    }],
    information: {
        jurisdiction: 1,
        name: '李四',
        role: '老师',
        teachRoute: [{
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