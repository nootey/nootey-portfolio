<template>
  <div id="app">
      <Navbar @changeTheme="toggleDarkMode" :darkMode="darkMode" />
    <div class="content-wrapper">
          <Home :darkMode="darkMode" />
          <About />
          <Projects />
          <Contact />
          <!-- <Footer />  -->
    </div>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/components/Home.vue";
import About from "../src/components/About.vue";
import Projects from "../src/components/Projects.vue";
import Contact from "../src/components/Contact.vue";
import Footer from "../src/components/Footer.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {Navbar, Home, About, Projects, Contact},
  mounted() {
  const darkModeVar = localStorage.getItem('darkMode');
  this.darkMode = darkModeVar === 'true' ? true : false;
  this.applyTheme();
},
  setup() {
    const darkMode = ref(false);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      localStorage.setItem('darkMode', darkMode.value ? true : false);
      applyTheme();
    };

    const applyTheme = () => {
      const theme = darkMode.value ? 'dark' : 'light';
      document.documentElement.setAttribute('theme', theme);
    }

    return {
      darkMode,
      toggleDarkMode,
      applyTheme,
    }
  }   
}
</script>

<style>

#app {
  text-align: center;
  color: #2c3e50;
}

html {
  scroll-behavior: smooth;
}

.content-wrapper {
  padding-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  /* background: var(--background-color-secondary); */
}

.main-content {
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
  position: sticky;
}

.smoothie-container {
  width: 90%;
  max-width: 1600px;
  height: 90vh;
  padding-top: 80px;
  padding-inline: 40px;
  margin: 0 auto;
  overflow: hidden !important;
  color: var(--text-color-primary);
  background: var(--background-color-primary);
}

.title {
  font-size: 1.4rem;
  font-weight: 1000;
  margin-bottom: 20px;
}

</style>
