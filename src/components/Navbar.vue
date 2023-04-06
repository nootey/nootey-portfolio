<template>
<div class="relative min-h-screen flex">

    <div class="bg-red-800 text-blue-100 w-64">
    <!-- logo -->
    logo

    <!-- nav -->
    <nav>
    <div class="flex flex-row"> <router-link to="/">Home</router-link> </div>
    <div class="flex flex-row"><router-link to="/about">About Me</router-link> </div> 
    <div class="flex flex-row"><router-link to="/projects">Projects</router-link></div>  
    <div class="flex flex-row"><router-link to="/contact">Contact</router-link></div>
    </nav>

    </div>
</div>
<router-view/>
</template>

<script>
 export default {
    setup(){
    return {

    }
}
 }
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>