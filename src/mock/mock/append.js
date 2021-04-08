import Mock from 'mockjs'
const Random = Mock.Random

export const append = () => {
    return {
        name: Random.cname(),
    }
}
