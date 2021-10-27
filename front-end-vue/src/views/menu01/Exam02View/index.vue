<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      <span class="title">Exam02View</span>
    </div>
    <div class="card-body">
      <sub-a-component class="mb-2"/>
      <!-- 프로그래밍 방식 화면 이동-->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from './SubAComponent.vue';

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02View",
  //추가하고 싶은 컴포넌트 등록
  components: {
    SubAComponent
  },
  //컴포넌트에서 사용하는 데이터 정의
  data: function() { // () => {
    return {
      
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    //방법1) goUrl: function() {},
    //방법2) goUrl: () => {},
    goUrl() {
      this.$router.push("/menu01/exam01view");
      //this.$router.push({path: "/menu01/exam01view"});
      //this.$router.push({name: "menu01_exam01view"});
      
      //현재 경로와 동일한 경로로 화면 이동을 할 경우 예외가 발생하므로 예외 처리
      //this.$router.push("/menu01/exam02view").catch(()=>{}); =
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */

</style>