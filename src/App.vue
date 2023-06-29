<template>
  <div id="app">
      <Navbar @changeTheme="toggleDarkMode" :darkMode="darkMode" />
    <div class="content-wrapper">
        <div class="main-content">
          <Home />
          <About />
          <Projects />
          <Contact />
          <!-- <Footer />  -->
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/components/Home.vue";
import About from "../src/components/About.vue";
import Projects from "../src/components/Projects.vue";
import Contact from "../src/components/Contact.vue";
// import Footer from "../src/components/Footer.vue";
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
  font-family: 'Inter Tight', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

.main-content {
  width: 80%;
  max-width: 1450px;
  margin: 0 auto;
  border-radius: 25px;
  position: sticky;
}

.smoothie-container {
  width: 95%;
  height: 99%;
  padding-top: 80px;
  padding-inline: 50px;
  margin: 0 auto;
  overflow-y: hidden;
  color: var(--text-color-primary);
  background: var(--background-color-primary);
}

.title {
  font-size: 1.4rem;
  font-weight: 1000;
  margin-bottom: 20px;
}

</style>
