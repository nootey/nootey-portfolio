<template>
  <div id="app" class="h-screen flex w-100">
    <div class="navbar fixed top-0 left-0 h-screen">
      <Navbar />
    </div>
    <div class="content-wrapper ml-64">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/components/Home.vue"
import About from "../src/components/About.vue"
import Projects from "../src/components/Projects.vue"
import Contact from "../src/components/Contact.vue"
import Footer from "../src/components/Footer.vue"

export default {
  name: "App",
  components: {Navbar, Home, About, Projects, Contact, Footer},
  setup() {
    const night_mode = true;
    return {
      night_mode,
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

html {
  scroll-behavior: smooth;
}

.smoothie-container {
  width: 100%;
}

.navbar{
  display: flex;
  position: fixed;
  height: 100%;
  width: 250px;
  padding: 25px;
  border-right: 2px solid grey;
}

.content-wrapper {
  margin-bottom: 80px;
  width: 100%;
}

.title {
  font-size: 1.4rem;
  font-weight: 1000;
  margin-bottom: 20px;
}



</style>
