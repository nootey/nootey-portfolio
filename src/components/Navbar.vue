<template>

        <div class="nav-wrapper flex flex-row">
            <div class="navbar">
                <!-- logo -->
                <div class="logo flex flex-row text-center align-items-center">
<!--                    <img src="../assets/bure_logo.png" />-->
                    <div class="mt-2"> {{ "Bure" }}</div>
                </div>
            
                <!-- nav -->
                <ul class="links" v-show="!mobile">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                  <font-awesome-icon class="mobile-icon-link" :class="darkMode ? 'hover-dark' : 'hover-light'" :icon="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" @click="callEmit"/>
                </ul>

                <div class="toggle-btn">
                  <font-awesome-icon class="mobile-icon-link" :class="{'fa-solid fa-xmark': nav_open}" icon="fa-solid fa-bars" @click="toggleNavbar"/>
                </div>
            </div>

            <div class="dropdown-menu open" v-show="mobile_nav">
                <li class="mobile-link"><a href="#home">Home</a></li>
                <li class="mobile-link"><a href="#about">About</a></li>
                <li class="mobile-link"><a href="#projects">Projects</a></li>
                <li class="mobile-link"><a href="#contact">Contact</a></li>
                <li class="mobile-link"><font-awesome-icon class="mobile-icon-link" :class="darkMode ? 'hover-dark' : 'hover-light'" :icon="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" @click="callEmit"/></li>
            </div>
        </div>
   
</template>

<script>

 import { ref, onMounted, onUnmounted, watch } from 'vue';

 export default {
    emits: ['changeTheme'],
    props: ['darkMode'],
    setup(props, { emit }){
        onMounted(() => window.addEventListener('resize', onWidthChange))
        onUnmounted(() => window.removeEventListener('resize', onWidthChange))
        const nav = ref(false);
        const mobile = ref(false);
        const mobile_nav = ref(false);
        const window_width = ref(window.innerWidth);
        const nav_open = ref(false);

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
        nav_open,
        callEmit,
    }
}
 }
</script>

<style scoped>

.nav-wrapper{
    z-index: 2;
    padding-inline: 20px;
    padding-bottom: 5px;
    position: fixed;
    width: 100%;
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

.navbar {
    z-index: 2;
    width: 100%;
    height: 60px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo a{
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar .links {
    display: flex;
    gap: 2rem;
    align-items: center;
    
}
.navbar .toggle-btn {
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
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
    color: var(--accent-color);
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
    .navbar .links{
        display: none;
    }
    .navbar .toggle-btn{
        display: block;
    }

    .dropdown-menu {
        display: block;
    }
}

</style>