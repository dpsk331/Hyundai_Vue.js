import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App) // index.html의 id가 app인 위치에 App 컴포넌트를 넣어줌
}).$mount('#app') //  #app은 index.html에 id가 app인 태그를 가르킴
 