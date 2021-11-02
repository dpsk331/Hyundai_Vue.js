<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      JwtAuth
    </div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          회원 가입
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="text" class="form-control" v-model="user.id"/>
          </div>
          <div class="form-group">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" v-model="user.name"/>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Password</label>
            <input type="text" class="form-control" v-model="user.password"/>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Role</label>
            <select class="form-control" name="mrole" v-model="user.role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_MANAGER">ROLE_MANAGER</option>
              <option value="ROLE_USER" selected>ROLE_USER</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email"/>
          </div>
          <button class="btn btn-info btn-sm" v-on:click="handleJoin">가입</button>
        </div>
      </div>   
    </div>

    <alert-dialog :message="alertDialogMessage" 
                  :loading="loading"
                  v-if="alertDialog"
                  @close ="alertDialog=false" />
  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
  name:"JwtAuth",
  components: {
    AlertDialog
  },
  data() {
    return {
      user: {
        id: "user",
        name: "사용자",
        password: "12345",
        role: "ROLE_USER",
        email: "user@mycompany.com"
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false
    };
  },
  methods: {
    async handleJoin() {
      try {
        this.loading = true;
        this.alertDialog = true;

        const response = await auth.join(this.user);
        console.log(response);

        this.loading = false;
        if(response.data.result === "success") {
          this.alertDialogMessage = "회원가입 성공";

          //회원가입 실패는 모두 catch에서 처리하도록 throw 발생
        } else if(response.data.result === "duplicated") {
          throw {message: "아이디 중복"};
        } else if(response.data.result === "fail") { //서버 처리 문제
          throw {message: "서버 오류 발생"};
        }
      } catch (error) {
        this.loading = false;
        this.alertDialogMessage = `회원가입 실패: ${error.message}`; //네트워크 문제
      }
    }
  }
}
</script>

<style scoped>
  
</style>