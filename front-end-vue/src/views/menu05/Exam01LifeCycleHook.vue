<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01LifeCycleHook
    </div>
    <div class="card-body">
      <p>data: {{data}}
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>
      
      <hr/>
      <child :data="data" />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01LifeCycleHook",
  //추가하고 싶은 컴포넌트 등록
  components: {
    Child
  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {r
    return {
      data: ""
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    changeData() {
      this.data += Math.floor(10*Math.random()); // 0 <= Math.random() < 1
    }
  },
  //LifeCycleHook 메소드 재정의
  beforeCreate() {
    console.log("beforeCreate state");
  },
  created() {
    console.log("created state");
  },
  beforeMount() {
    console.log("beforeMount state"); 
  },
  mounted() { //UI가 공개된 상태
    console.log("mounted state");
  },  
  beforeUpdate() {
    console.log("beforeUpdate state");
  },
  updated() {
    console.log("updated state");
  },
  beforeDestroy() {
    console.log("beforeDestroy state");
  },
  destroyed() {
    console.log("destroyed state");
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>