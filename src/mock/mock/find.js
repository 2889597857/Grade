import Mock from 'mockjs'
const Random = Mock.Random



function c (params) {
    const a = Mock.mock({
        '语文|60-100': 0,
        '数学|60-100': 0,
        '英语|60-100': 0,
        '政治|60-100': 0,
        '历史|60-100': 0,
        '地理|60-100': 0,
        '生物|60-100': 0,
    })
    let b = []
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            b.push(a[key])
        }
    }
    return b
}

export const find = (id) => {


    return {
        name: Random.cname(),
        grade: c()
    }
}

