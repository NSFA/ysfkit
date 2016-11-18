import Vue from 'vue';
import App from './app.vue';
import 'highlight.js/styles/color-brewer.css';
import Component from '/Users/matrix/Documents/Netease/NSFA/ysfkit/test/unit/side-nav.vue';
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import MainBody from './components/body.vue';
import MainContent from './components/content.vue';

Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('main-body', MainBody);
Vue.component('main-content', MainContent);
Vue.component('side-nav', Component);

new Vue({ // eslint-disable-line
	render: h => h(App)
}).$mount('#app');