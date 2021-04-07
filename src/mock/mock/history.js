import Mock from 'mockjs'
const Random = Mock.Random

const a2 = ['语文', '数学', '英语', '政治', '历史', '地理', '生物']


export const history = () => {
    let a = []
    for (let index = 0; index < 5; index++) {
        const obj = Mock.mock({
            'id|0-6': 0
        })

        const a1 = Mock.mock({
            'oldVal|60-100': 0,
            'newVal|60-100': 0,
        })
        a.push({
            id: parseInt(Math.random() * 1000000),
            name: Random.cname(),
            object: a2[obj.id],
            history: a1,
            operator: Random.cname(),
            time: Random.datetime(),
        })

    }
    return a
}


