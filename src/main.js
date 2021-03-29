import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import "styles/index.scss";
import "./mock/index.js"

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const APP = createApp(App)
APP.use(router)
APP.use(store)
APP.use(ElementPlus)
APP.mount('#app')
