import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./apis/axiosConfig";

Vue.config.productionTip = false

new Vue({
  router,
  store,

  // index.html의 id가 app인 위치에 App 컴포넌트를 넣어줌
  render: h => h(App)
}).$mount('#app') //  #app은 index.html에 id가 app인 태그를 가르킴
 