import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/main.css'
import '@/assets/css/media-query.css'

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

import instance from '@/plugins/axios.js'

Vue.prototype.$axios = instance
Vue.prototype.$toastify = Toastify
    // Vue.use(http)

import { Icon } from '@iconify/vue2';

Vue.component("IconComponent", Icon)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.ignoredElements = [/^ion-/]
Vue.config.ignoredElements = [/^IconComponent-/]

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')