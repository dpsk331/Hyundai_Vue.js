<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <p>data: {{data}}</p>

      <hr/>
      <button class="btn btn-info btn-sm" @click="handleParentData">부모 데이터 읽기</button>
      <button class="btn btn-info btn-sm" @click="handleParentMethod">부모 메소드 호출</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Child",
  //추가하고 싶은 컴포넌트 등록
  components: {
    
  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {
    return {
      data: "child-data"
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    childMethod() {
      console.log("childMethod() 실행");
    },
    handleParentData() {
      console.log(this.$parent.data);
    },
    handleParentMethod() {
      console.log(this.$parent.parentMethod());
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>