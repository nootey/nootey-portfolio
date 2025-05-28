<template>
      <Home :darkMode="darkMode" />
      <About :darkMode="darkMode" />
      <Projects :darkMode="darkMode"/>
      <Contact :darkMode="darkMode"/>
</template>

<script setup>
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

// eslint-disable-next-line no-undef
const props = defineProps(['darkMode']);

</script>

<style scoped>

</style>