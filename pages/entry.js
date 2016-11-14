import Vue from 'vue';
import App from './app.vue';
import 'ui-style/lib/index.css';
import "ui-style/lib/grid/col.css";
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import MainBody from './components/body.vue';

Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('main-body', MainBody);

new Vue({ // eslint-disable-line
	render: h => h(App)
}).$mount('#app');