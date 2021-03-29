import Mock from 'mockjs'
const Random = Mock.Random

export const login = (id) => {
    return {
        jurisdiction: id.body,
        name: Random.cname(),
        role: id.body ? '学生' : '老师',
        id: parseInt(Math.random() * 1000000),
        email: Random.email(),
        phone: '123 4567 8901',
    }
}

