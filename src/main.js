import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Links from './components/Links.vue'
import TheFooter from './components/TheFooter.vue'
import 'boxicons'

const app = createApp(App)


app.component('the-footer', TheFooter);
app.component('links', Links);


app.use(router).mount('#app')