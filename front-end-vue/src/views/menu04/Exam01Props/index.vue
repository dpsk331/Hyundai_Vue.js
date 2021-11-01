<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a :prop1="data1"
               :prop2="data2"
               :productNo="pno"
               :product-kind="pkind"
               :product-price="1000"/>
      <hr/>
      <child-b :product="product" v-bind="product"/>

      <!-- 아래 두 태그는 같은 효과 -->
      <!-- 
      <child-b v-bind="product"/>
      <child-b v-bind:no="product.no" v-bind:kind="product.kind"/> -->
      <hr />

      <child-c propD="string-data" 
               :propA="3"
               :propB="2"
               :propC="7"
               :propE="9"
               :propF="{message: 'hello, vue'}"
               :propG="['red', 'green', 'blue']"
               :propI="5" />
    </div>
  </div>
</template>

<script>
import ChildA from"./ChildA.vue"
import ChildB from"./ChildB.vue"
import ChildC from './ChildC.vue'

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Exam01Props",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    ChildA,
    ChildB,
    ChildC
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      data1: "value1",
      data2: "value2",
      pno: "1",
      pkind: "bag",
      pprice: 1000,
      product: {
        no: 2,
        kind: "정장"
      }
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>