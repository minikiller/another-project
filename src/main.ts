import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-theme-default/dist/all.css'

createApp(App).use(store).use(router).mount('#app')
