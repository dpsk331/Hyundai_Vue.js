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
      
      <!-- 요소 숨김 처리 -->
      <!-- false시 DOM에서 아예 제거 -->
      <span v-if="sale">
        <img v-bind:src="require(`@/assets/photos/${phothFileName}`)" height="100" />
      </span> 
      <!-- false시 DOM에서 style="display: none;"로 숨김 처리 -->
      <span v-show="sale">
        <img v-bind:src="require(`@/assets/photos/${phothFileName}`)" height="100" />
      </span>

      <hr />

      <!-- HTML 태그 처리 -->
      <p>정보: {{info}}</p>
      <p>정보: <span v-html="info" /></p>

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
      phothFileName: "photo2.jpg",
      sale: true,
      info: `<div style="background-color: #eeeeee">스타일 적용 확인</div>`
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

      this.sale = !this.sale;
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>