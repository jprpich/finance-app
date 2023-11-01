import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InlineSvg from './components/InlineSvg.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('InlineSvg', InlineSvg)

app.mount('#app')
