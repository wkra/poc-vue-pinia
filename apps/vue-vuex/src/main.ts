import { createApp } from 'vue'
import App from './App.vue'
import stores from './stores'

import './assets/main.css'

createApp(App).use(stores).mount('#app')
