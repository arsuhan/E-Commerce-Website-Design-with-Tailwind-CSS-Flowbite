import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import './assets/main.css'

import App from './App.vue'

import router from './router'

const app = createApp(App)

const vfm = createVfm()

// app.use(vfm).mount('#app')

app.use(router)

app.mount('#app')
