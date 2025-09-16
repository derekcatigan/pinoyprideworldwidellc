import { createApp } from 'vue'
import './main.css'
import fadeSlideUp from '@/directives/fadeSlideUp';
import router from '@/routes/router'
import App from './App.vue'

createApp(App)
    .use(router)
    .directive("fade-slide-up", fadeSlideUp)
    .mount('#app')
