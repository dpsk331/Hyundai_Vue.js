<template>
  <v-card>
    <v-card-title>Grid System</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="red" cols="12" sm="2" md="6" lg="10">A</v-col>
        <v-col class="green" cols="12" sm="10" md="6" lg="2">B</v-col>
      </v-row>
      <v-row class="indigo lighten-3">
        <v-col cols="12" sm="2" md="6" lg="10">A</v-col>
        <v-col cols="12" sm="10" md="6" lg="2">B</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name:"GridSystem",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
</style>