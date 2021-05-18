import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Sidebar from 'primevue/sidebar';
import Toolbar from 'primevue/toolbar'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(router).mount('#app')

app.use(PrimeVue)

app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Sidebar', Sidebar)
app.component('Toolbar', Toolbar)
