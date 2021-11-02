<!-- 컴포넌트 UI 정의 -->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      알림
    </template>

    <template v-slot:body>
      <div v-if="loading" class="mt-3">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div  v-if="!loading">{{message}}</div>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";

export default {
  name:"alertDialog",
  components: {
    ModalDialogTemplate
  },
  props: [
    "message",
    "loading"
  ]
}
</script>

<style scoped>
  
</style>