function getInf (params) {

    if (params == '学生') {
        return {
            Route: [{
                name: "教师评分",
                route: "/system/rate"
            }, {
                name: "成绩查询",
                route: "/system/findStudent"
            }, {
                name: "成绩分析",
                route: "/system/student"
            }],
        }
    } else {
        return {
            Route: [{
                name: "成绩录入",
                route: "/system/resultInput"
            }, {
                name: "成绩查询",
                route: "/system/find"
            }, {
                name: "修改记录",
                route: "/system /history"
            }, {
                name: "成绩分析",
                route: "/analysis/class"
            }]
        }
    }
}

export {
    getInf
}