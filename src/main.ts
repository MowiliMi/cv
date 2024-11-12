import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import i18n from '@/locale';
import plugins from '@/plugins';

import '@/assets/stylesheets/app.scss';

const app = createApp(App);

app.use(router);
app.use(i18n);
plugins({ app, router });
app.mount('#app');
