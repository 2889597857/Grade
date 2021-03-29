export default {

    information: {
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
    },
    history: [
        {
            id: "18071",
            name: "张三",
            object: "语文",
            history: { oldVal: 78, newVal: 80 },
            operator: "李四",
            notes: "无",
        },
        {
            id: "18034",
            name: "王二",
            object: "语文",
            history: { oldVal: 68, newVal: 70 },
            operator: "李四",
            notes: "无",
        },
        {
            id: "18076",
            name: "王五",
            object: "语文",
            history: { oldVal: 98, newVal: 80 },
            operator: "李四",
            notes: "无",
        },
        {
            id: "18021",
            name: "张三",
            object: "数学",
            history: { oldVal: 78, newVal: 80 },
            operator: "武康",
            notes: "无",
        },
        {
            id: "18071",
            name: "齐兵",
            object: "历史",
            history: { oldVal: 66, newVal: 78 },
            operator: "李四",
            notes: "无",
        },
    ]

}