import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App'

import 'assets/css/reset.scss'
import 'assets/css/common.scss'

createApp(App).use(router).use(store).mount('#app')
