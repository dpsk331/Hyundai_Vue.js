<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01View
    </div>
    <div class="card-body">
      <h6>선언적 방식 화면 이동</h6>
      <router-link to="/menu01/exam02view" class="btn btn-info btn-sm mr-2">/mebu01/exam02View</router-link>
      <router-link v-bind:to="`/menu01/exam02view`" class="btn btn-info btn-sm mr-2">/mebu01/exam02View</router-link>
      <router-link :to="{path: '/menu01/exam02view'}" class="btn btn-info btn-sm mr-2">/mebu01/exam02View</router-link>
      <router-link :to="{name:'menu01_exam02view'}" class="btn btn-info btn-sm mr-2">/mebu01/exam02View</router-link>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01View",
  //추가하고 싶은 컴포넌트 등록
  components: {
    
  },
  //컴포넌트에서 사용하는 데이터 정의
  data: function() { // () => {
    return {
      
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {

  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */

</style>