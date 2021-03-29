import Mock from 'mockjs'
import { find } from './mock/find.js';
import { login } from './mock/login.js';

Mock.mock('/api/find', 'get', find)
Mock.mock('/api/login', 'get', login)

Mock.setup({
    timeout: 1000
})