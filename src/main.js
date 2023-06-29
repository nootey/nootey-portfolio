import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './style/tailwind.css';
import './style/app.css';


createApp(App).use(store).use(router).mount('#app')
