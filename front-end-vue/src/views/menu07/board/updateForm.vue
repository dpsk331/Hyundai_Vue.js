<template>
  <div class="card">
    <div class="card-header">
      글수정
    </div>
    <div class="card-body">
      <form v-if="board" v-on:submit.prevent="handleUpdate">
        <div class="form-group row">
          <label for="btitle" class="col-sm-2 col-form-label">제목</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="btitle" v-model="board.btitle"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="bcontent" v-model="board.bcontent"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
          <div class="col-sm-10">
            <input type="file" class="form-control-file" id="battach" ref="battach"/>
          </div>
        </div>
        <div>
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="200"/>
        </div>
        <div class="form-group row mt-3">
          <div class="col-sm-12 d-flex justify-content-center">
            <input type="submit" class="btn btn-info btn-sm mr-2" value="수정"/>
            <input type="button" class="btn btn-info btn-sm" value="취소" v-on:click="handleCancel"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board";

export default {
  name:"updateForm",
  components: {
    
  },
  data() {
    return {
      board: null,
      baseURL: axios.defaults.baseURL
    };
  },
  methods: {
    async handleUpdate() {
      try {
        const multipartFormData = new FormData();

        multipartFormData.append("bno", this.board.bno);
        multipartFormData.append("btitle", this.board.btitle);
        multipartFormData.append("bcontent", this.board.bcontent);

        const battach = this.$refs.battach;
        if(battach.files.length != 0) {
          multipartFormData.append("battach", battach.files[0]);
        }

        this.loading = true;
        this.alertDialog = true;

        const response = await apiBoard.updateBoard(multipartFormData);
        console.log(response);

        this.loading = false;
        this.alertDialog = false;

        this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
      } catch (error) {
        if(error.response) {
            if(error.response.status === 403) {
              this.loading = false;
              this.alertDialog = false;
              this.$router.push("/menu07/auth/jwtauth");
            }
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신 오류";
          }
      }
    },
    handleCancel() {
      this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
    }
  },
  created() {
    apiBoard.readBoard(this.$route.query.bno, this.$route.query.hit)
      .then(response => {
        this.board = response.data
      })
      .catch(error =>  {
        console.log(error);
      });
  }
}
</script>

<style scoped>
  
</style>