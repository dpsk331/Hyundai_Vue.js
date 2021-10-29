<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01EventHandling
    </div>
    <div class="card-body">
      <div>
        <h6>[Evnet Handler]</h6>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">버튼1</button>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn2('vue is good', $event)" name="btn2">버튼2</button>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn2('vue is good', $event)" name="btn3">버튼3</button>

        <hr>

        <a href="/" @click.prevent="handleLink()">링크1</a>

        <hr>

        <form @submit.prevent="handleSubmmit">
          <!-- 수직 정렬 -->
          <div class="d-flex align-items-center justify-content-center"> 
          <!-- submit 효과가 나오는 태그 리스트 -->
            <input type="submit" value="제출" class="btn btn-info btn-sm mr-2" />
            <button class="btn btn-info btn-sm mr-2">제출</button>
            <input type="image" :src="require(`@/assets/logo.png`)" height="30" />
          </div>
        </form>

        <hr>

        <button class="btn btn-info btn-sm mr-2" @click.ctrl="handleBtn3">Ctrl+Click</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01EventHandling",
  //추가하고 싶은 컴포넌트 등록
  components: {
    
  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {
    return {
      
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    handleBtn1() {
      console.log("Click handleBtn1()");
    },
    handleBtn2(arg, event) {
      console.log("Click handleBtn2()");
      console.log("arg: ", arg);
      console.log("event: ", event);

      if(event.target.name === "btn2") {
        console.log("Click btn2");
      } else if(event.target.name === "btn3") {
        console.log("Click btn3");
      }
    },
    handleLink() {
      console.log("Click handleLink()");
    },
    handleSubmmit() {
      console.log("AJAX 통신으로 폼 데이터 전송");
    },
    handleBtn3() {
      console.log("Click handleBtn3()");
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>