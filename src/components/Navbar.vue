<template>

        <div class="nav-wrapper flex flex-row">
            <div class="navbar">
                <!-- logo -->
                <div class="logo flex flex-row text-center align-items-center">
<!--                    <img src="../assets/bure_logo.png" />-->
                    <div class="mt-2"> {{ "Logo" }}</div>
                </div>
            
                <!-- nav -->
                <ul class="links" v-show="!mobile">
                    <li id="link-item"><a href="/#home">Home</a></li>
                    <li id="link-item"><a href="/#about">About</a></li>
                    <li id="link-item"><a href="/#projects">Projects</a></li>
                    <li id="link-item"><a href="/#contact">Contact</a></li>
                  <font-awesome-icon id="link-item" class="mobile-icon-link" :class="{ 'hover-dark': darkMode, 'hover-light': !darkMode }" :icon="darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" @click="callEmit"/>
                </ul>

                <div class="toggle-btn">
                  <font-awesome-icon class="mobile-icon-link" :class="{'fa-solid fa-xmark': nav_open}" icon="fa-solid fa-bars" @click="toggleNavbar"/>
                </div>
            </div>

            <div class="dropdown-menu open" v-show="mobile_nav">
                <li class="mobile-link"><a href="/#home">Home</a></li>
                <li class="mobile-link"><a href="/#about">About</a></li>
                <li class="mobile-link"><a href="/#projects">Projects</a></li>
                <li class="mobile-link"><a href="/#contact">Contact</a></li>
                <li class="mobile-link"><font-awesome-icon class="mobile-icon-link" :class="darkMode ? 'hover-dark' : 'hover-light'" :icon="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" @click="callEmit"/></li>

            </div>
        </div>
   
</template>

<script>

 import { ref, onMounted, onUnmounted, watch } from 'vue';
 import { useStore } from "vuex";

 export default {
    props: ['darkMode'],
    emits: ['changeTheme'],
    setup(props, { emit }){
        onMounted(() => window.addEventListener('resize', onWidthChange))
        onUnmounted(() => window.removeEventListener('resize', onWidthChange))
        const nav = ref(false);
        const mobile = ref(false);
        const mobile_nav = ref(false);
        const window_width = ref(window.innerWidth);
        const nav_open = ref(false);
        const store = useStore();

        const onWidthChange = () => {
            window_width.value = window.innerWidth;
        }

        function toggleNavbar() {
            mobile_nav.value = !mobile_nav.value;
            nav_open.value = !nav_open.value;
        }

        function watchWidth() {
            if (window_width.value <= 750) {
                mobile.value = true;
            } else {
                mobile.value = false;
                mobile_nav.value = false;
                nav_open.value = false;
            }
        }

      function callEmit(){
        emit('changeTheme')
      }


        watchWidth();

        watch(window_width, () => {
            watchWidth();
        })

    return {
        nav,
        mobile,
        mobile_nav,
        toggleNavbar,
      callEmit,
        nav_open,
    }
}
 }
</script>

<style scoped>

.nav-wrapper{
    z-index: 2;
    position: fixed;
    width: 100%;
    /* background: var(--background-color-secondary); */
}

.navbar {
    z-index: 2;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 90%;
    height: 60px;
    max-width: 1600px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 auto;
    margin-bottom: 15px;
    align-items: baseline;
}

.navbar .logo a{
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar .links {
    align-items: center;
}

.navbar .links #link-item {
    margin-left: 10px;
    margin-right: 10px;
}

.navbar .toggle-btn {
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
}

.logo {
    height: 40px;
    width: 40px;
}

li{
    list-style: none;
}

a {
    text-decoration: none;
    font-size: 1rem;
}

a:hover{
    color: var(--accent-color);
}

.dropdown-menu {
    display: none;
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 175px;
    height: 0;
    background-color: rgba(var(--background-color-primary), 0.5);
    backdrop-filter: blur(50px);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
    transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 3;
}

.dropdown-menu.open {
    height: 248px;
}

.dropdown-menu li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(var(--background-color-primary), 0.5);
}

.dropdown-menu .action-btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

.dropdown-menu li:hover {
    cursor: pointer;
    font-size: 1.3rem;
}

.mobile-icon-link:hover{
    cursor: pointer;
}

.hover-light:hover {
    color: #FFB10F;
}

.hover-dark:hover {
    color: #FF4F0F;
}

@media(max-width: 992px){
  a{
    background: none;
  }
  .navbar .links{

    display: none;
  }
  .navbar .toggle-btn{
      display: block;
  }

  .dropdown-menu {
      display: block;
  }


  li {
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
  }

  li:before, li:after {
    content: '';
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
    position: absolute;
    bottom: 0;
  }

  li:before {
    left: 0;
  }

  li:after {
    right: 0;
  }

  li:hover:before, li:hover:after {
    width: 20px;
    background: var(--accent-color);
  }
}

a{
  text-decoration: none;
  color: var(--text-color-primary);
}

li {
  display: inline-block;
  position: relative;
  padding-bottom: 3px;
  margin-right: 10px;
}
li:last-child {
  margin-right: 0;
}

li:after {
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width .5s ease, background-color .5s ease;
}
li:hover:after {
  width: 100%;
  background: var(--accent-color);
}

@media only screen and (max-width: 850px) {
  .navbar{
    height: 35px;
    width: 99%;
    margin-bottom: 0;
  }
}

</style>