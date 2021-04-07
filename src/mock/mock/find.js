import Mock from 'mockjs'
const Random = Mock.Random

function c () {
    const a = Mock.mock({
        'chinese|60-100': 0,
        'math|60-100': 0,
        'English|60-100': 0,
        'politics|60-100': 0,
        'history|60-100': 0,
        'geography|60-100': 0,
        'biology|60-100': 0,
    })

    return a
}

export const find = () => {
    return {
        name: Random.cname(),
        id: parseInt(Math.random() * 1000000),
        grade: c()
    }
}

