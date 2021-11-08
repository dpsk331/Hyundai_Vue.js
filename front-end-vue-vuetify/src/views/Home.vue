<template>
  <div>
    <hello-world />
    <v-divider />
    <img src="@/assets/photos/photo1.jpg" height="150" />
    <img src="@/assets/photos/photo2.jpg" height="150" />
    <img src="@/assets/photos/photo3.jpg" height="150" />
    <img src="@/assets/photos/photo4.jpg" height="150" />
    <img src="@/assets/photos/photo5.jpg" height="150" />
    <img src="@/assets/photos/photo6.jpg" height="150" />
    <img src="@/assets/photos/photo7.jpg" height="150" />
    <img src="@/assets/photos/photo8.jpg" height="150" />
    <img src="@/assets/photos/photo9.jpg" height="150" />
    <img src="@/assets/photos/photo10.jpg" height="150" />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
