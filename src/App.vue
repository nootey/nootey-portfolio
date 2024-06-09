<template>
  <div id="app">
    <Navbar @changeTheme="toggleDarkMode" :darkMode="darkMode" />
<!--    <div class="content-wrapper">-->
<!--      <Main :darkMode="darkMode" />-->
<!--    </div>-->
    <Main :darkMode="darkMode" />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "../src/components/Navbar.vue";
import Main from "../src/components/Main.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import Footer from "@/components/Footer.vue";

onMounted(() => {
  const darkModeVar = localStorage.getItem('darkMode');
  darkMode.value = darkModeVar === 'true' ? true : false;
  applyTheme();
});

const store = useStore();
const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  store.commit("applyTheme", darkMode.value);
  applyTheme();
};

const applyTheme = () => {
  const theme = darkMode.value ? 'dark' : 'light'
  document.documentElement.setAttribute('theme', theme);
}

</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  color: #2c3e50;
  //justify-content: center;
  align-items: center;
  width: 100%;
}

html {
  scroll-behavior: smooth;
}

.content-wrapper {
  flex: 1;
  padding-top: 80px;
  //margin-bottom: 80px;
  width: 100%;
  /* background: var(--background-color-secondary); */
}

.main-content {
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
  position: sticky;
}



.title {
  font-size: 1.4rem;
  font-weight: 1000;
  margin-bottom: 20px;
}

</style>
