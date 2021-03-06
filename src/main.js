import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/fonts/iconfont.js';

import { Button, Table, TableColumn, Popover, Image } from 'element-ui';

Vue.config.productionTip = false;


Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Image);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
