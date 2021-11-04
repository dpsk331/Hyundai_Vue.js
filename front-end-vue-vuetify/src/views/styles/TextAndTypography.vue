<template>
  <v-card>
    <v-card-title>Text and Typography</v-card-title>
    <v-card-text>
      <div class="text-h1 yellow black--text">text-h1</div>
      <div class="text-h2 blue white--text">text-h2</div>
      <div class="text-h3 red lighten-4 white--text">text-h3</div>
      <div class="text-h4 red--text text--lighten-4">text-h4</div>
      <div class="text-h5">text-h5</div>
      <div class="text-h6 text-md-h4 text-lg-h2">text-h6</div>
      <div class="text-body-1">text-body-1</div>
    </v-card-text>
    <v-divider />
    <v-card-text class="black--text">
      <p class="text-left">text-left</p>
      <p class="text-center">text-center</p>
      <p class="text-right">text-right</p>
      <p class="text-sm-left">text-sm-left</p>
      <p class="text-md-center">text-md-center</p>
      <p class="text-lg-right">text-lg-right</p>
      <p class="text-xl-center">text-xl-center</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name:"TextAndTypography",
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