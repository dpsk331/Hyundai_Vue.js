<template>
  <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2"/>Vue.js
    </router-link>
    <router-link v-if="$store.state.userId === ''" to="/menu07/auth/jwtauth" class="btn btn-success btn-sm">로그인</router-link>
    <button v-if="$store.state.userId !== ''" class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
  </nav>
</template>

<script>
export default {
  name:"AppHeader",
  components: {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("deleteAuth");
      // this.$router.push("/");
    }
  }
}
</script>

<style scoped>
  
</style>