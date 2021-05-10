import Mock from 'mockjs'
import { login } from './mock/login.js';
import { find } from './mock/find.js';
import { history } from './mock/history.js';
import { append } from './mock/append.js';
import { rate } from './mock/rate.js';

// 拦截登录请求
// Mock.mock('/api/login', 'get', login)
// Mock.mock('/api/find', 'get', find)
// Mock.mock('/api/history', 'get', history)

Mock.mock('/api/append', 'get', append)
// 拦截评分请求
Mock.mock('/api/rate', 'get', rate)

// 模仿真实网络环境，设置延时
Mock.setup({
    timeout: 1000
})