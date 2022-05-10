import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).use(router).mount('#app');
