<template>
  <v-card width="500" class="mx-auto my-2">
    <v-img src="@/assets/photos/photo3.jpg" height="250" />
    <v-card-title>About</v-card-title>
    <v-card-subtitle>This is an about page</v-card-subtitle>
    <v-divider class="mx-4"/>
    <v-card-text>
      The v-card component is a versatile component that can be used for anything from a panel to a static image. 
    </v-card-text>
    <v-divider class="mx-4"/>
    <v-card-text>
      The card component has numerous helper components to make markup as easy as possible. 
    </v-card-text>
    <v-card-actions>
      <div class="mx-auto">
        <v-btn class="mr-2" color="success" fab>OK</v-btn>
        <v-btn color="info">Cancel</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name:"About",
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