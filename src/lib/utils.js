function nowTime () {
    const date = new Date()

    let year = date.getFullYear()
    let month = isTen(date.getMonth() + 1)
    let day = isTen(date.getDate())

    let hour = isTen(date.getHours())
    let minute = isTen(date.getMinutes())
    let second = isTen(date.getSeconds())

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
function isTen (params) {
    return params > 10 ? params : '0' + params
}




export {
    nowTime
}