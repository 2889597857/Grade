import Mock from 'mockjs'
import { find } from './mock/find.js';
import { login } from './mock/login.js';
import { history } from './mock/history.js';
import { append } from './mock/append.js';

Mock.mock('/api/find', 'get', find)
Mock.mock('/api/login', 'get', login)
Mock.mock('/api/history', 'get', history)
Mock.mock('/api/append', 'get', append)

Mock.setup({
    timeout: 1000
})