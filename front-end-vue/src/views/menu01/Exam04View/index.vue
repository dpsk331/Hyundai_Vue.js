<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam04View
    </div>
    <div class="card-body">
      <router-view class="mb-2" />
      <router-view name="rv1" class="mb-2" />
      <router-view name="rv2" class="mb-2" />
      
      <hr />

      <sub-a-component />
      <sub-b-component />
      <sub-c-component />
    </div>
  </div>
</template>

<script>
import SubAComponent from '@/components/menu01/SubAComponent.vue';
import SubBComponent from '@/components/menu01/SubBComponent.vue';
import SubCComponent from '@/components/menu01/SubCComponent.vue';

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam04View",
  //추가하고 싶은 컴포넌트 등록
  components: {
    SubAComponent,
    SubBComponent,
    SubCComponent
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