<template>
<Navbar></Navbar>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
  components: {Navbar},
  setup() {
    const test = "";
    return {
        test
    }
  }   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
