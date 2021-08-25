import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-theme-default/dist/all.css'
import { GlobalEvents } from 'vue-global-events'

const app = createApp(App)
app.use(store).use(router).mount('#app')
// register globally
app.component('GlobalEvents', GlobalEvents)
