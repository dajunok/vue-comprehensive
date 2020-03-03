import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

//webpack动态导入lodash模块
function getComponent(){
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'Lodash'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
    document.body.appendChild(component);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
