<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02CounterState
    </div>
    <div class="card-body">
      <h6>[Counter State 읽기]</h6>
      <!-- 해당 컴포넌트에서 state는 루트 state이다. -->
      <p>counter/count 단방향 바인딩: {{$store.state.counter.count}}</p> 
      <p>counter/count 단방향 바인딩: {{$store.getters["counter/getCount"]}}</p>
      <p>counter/count 단방향 바인딩: {{getCount()}}</p>
      <p>counter/count 단방향 바인딩: {{computedCout}}</p>
      <p>counter/count 양방향 바인딩: <input type="text" v-model.number="$store.state.counter.count" /></p>

      <hr/>
      <h6>[Counter State 변경]</h6>
      <p>Component value 양방향 바인딩: <input type="text" v-model.number="value"/></p>
      <div class="mt-2">
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByMutation">counter/count 변경(Mutation 동기 방식)</button>
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByAction">counter/count 변경(Action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02CounterState",
  //추가하고 싶은 컴포넌트 등록
  components: {

  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {
    return {
      value: 0
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    getCount() {
      return this.$store.state.counter.count;
      //return this.$store.getters["counter/getCount"];
    },
    changeCountByMutation() {
      this.$store.commit("counter/setCount", this.value);
    },
    changeCountByAction() {
      this.$store.dispatch("counter/setCountByAsync", {value:this.value, duration:3000});
    }
  },
  computed: {
    computedCout() {
      // return this.$store.state.counter.count;
      return this.$store.getters["counter/getCount"];
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>