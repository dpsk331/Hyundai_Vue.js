<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" height="100" />
        <img v-bind:src="require(`@/assets/photos/${phothFileName}`)" height="100" />
      </div>

      <hr />

      <button class="btn btn-info btn-sm" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02Directives",
  //추가하고 싶은 컴포넌트 등록
  components: {
    
  },
  //컴포넌트에서 사용하는 데이터 정의
  data: function() { // () => {
    return {
      phothFileName: "photo2.jpg"
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    changeData(){
      if(this.phothFileName === "photo2.jpg"){
        this.phothFileName = "photo3.jpg";
      } else {
        this.phothFileName = "photo2.jpg";
      }

    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>