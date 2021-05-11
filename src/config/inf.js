function getInf (params) {

    if (params == '学生') {
        return {
            Route: [{
                name: "教师评分",
                route: "/rate"
            }, {
                name: "成绩查询",
                route: "/find/student"
            }, {
                name: "成绩分析",
                route: "/analysis/student"
            }],
        }
    } else {
        return {
            Route: [{
                name: "成绩录入",
                route: "/resultInput"
            }, {
                name: "成绩查询",
                route: "/find/teacher"
            }, {
                name: "修改记录",
                route: "/history"
            }, {
                name: "成绩分析",
                route: "/analysis/teacher"
            }]
        }
    }
}

export {
    getInf
}