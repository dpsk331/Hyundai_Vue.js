<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="mb-2">counter: {{counter}}</p>
      <child @child-event-1="handleChileEvnet1"
             @child-event-2="handleChileEvnet2"
             :counter="counter"
             @counter-increament="handleChileEvnet3"
             @counter-decreament="handleChileEvnet4" />
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02EventEmit",
  //추가하고 싶은 컴포넌트 등록
  components: {
    Child
  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {
    return {
      counter: 0
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    handleChileEvnet1(arg) {
      console.log("arg: ", arg);
    },
    handleChileEvnet2(arg1, arg2) {
      console.log("arg1: ", arg1);
      console.log("arg2: ", arg2);
    },
    handleChileEvnet3(arg) {
      this.counter += arg;
    },
    handleChileEvnet4(arg) {
      this.counter -= arg;
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>