
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index';
// import './router/guard';
import './styles/public.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "@fortawesome/fontawesome-free/css/all.css";
const app = createApp(App);
const pinia = createPinia();
// 导入 i18n
import i18n from "./i18n/index";
app.use(i18n);
app.use(router);
app.use(pinia);
app.mount('#app');




