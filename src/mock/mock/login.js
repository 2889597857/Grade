import Mock from 'mockjs'
const Random = Mock.Random
const objs = ['chinese', 'math', 'English', 'politics', 'history', 'geography', 'biology',]
const a = ['语文老师', '数学老师', '英语老师', '政治老师', '历史老师', '地理老师', '生物老师']

const obj = Mock.mock({
    'id|0-6': 0
})


export const login = (id) => {
    return {
        jurisdiction: id.body,
        name: Random.cname(),
        role: id.body ? '学生' : a[obj.id],
        object: id.body ? '' : objs[obj.id],
        classID: parseInt(Math.random() * 1000000),
        id: parseInt(Math.random() * 1000000),
        email: Random.email(),
        phone: '123 4567 8901',
    }
}

