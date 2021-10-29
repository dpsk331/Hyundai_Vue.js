<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam06ComputedBinding
    </div>
    <div class="card-body">
      <p>ssn1: {{ssn1}}</p>
      <p>ssn2: {{ssn2}}</p>
      <p>date:  {{date}}</p>
      <p>ssn: {{ssn1}}-{{ssn2.charAt(0)}}******
      <p>ssn: {{computedSsn}}</p>
      <p>ssn: {{getSsn()}}</p>

      <button v-on:click="changeData" class="btn btn-info btn-sm mt-2">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam06ComputedBinding",
  //추가하고 싶은 컴포넌트 등록
  components: {
    
  },
  //컴포넌트에서 사용하는 데이터 정의
  data() { // () => {
    return {
      ssn1: "970331",
      ssn2: "222222",
      date: new Date()
    };
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods: {
    getSsn() {
      console.log("Run getSsn");
      const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
      return ssn;
    },
    changeData() {
      console.log("Run changeData");
      this.date = new Date();
      this.ssn2 = "1111111";
    }
  },
  computed: {
    computedSsn() {
      console.log("Run computedSsn");
      const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
      return ssn;
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped> /* scoped는 현재 template에만 적용한다는 의미 */
  
</style>