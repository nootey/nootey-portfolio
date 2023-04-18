<template>

        <div class="nav-wrapper flex flex-row">
            <div class="navbar">

                <!-- logo -->
                <div class="logo flex flex-row text-center align-items-center">
                    <img src="../assets/bure_logo.png" />
                    <div class="mt-2"> {{ "Bure" }}</div>
                </div>
            
                <!-- nav -->
                <ul class="links" v-show="!mobile">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fa-solid fa-moon"></i>
                </ul>

                <div class="toggle-btn">
                    <i @click="toggleNavbar" class="fa-solid fa-bars" :class="{'fa-solid fa-xmark': nav_open}"></i>
                </div>
            </div>

            <div class="dropdown-menu open" v-show="mobile_nav">
                <li class="mobile-link"><a href="#home">Home</a></li>
                <li class="mobile-link"><a href="#about">About</a></li>
                <li class="mobile-link"><a href="#projects">Projects</a></li>
                <li class="mobile-link"><a href="#contact">Contact</a></li>
                <i class="fa-solid fa-moon mobile-icon-link"></i>
            </div>
        </div>
   
</template>

<script>

 import { ref, onMounted, onUnmounted, watch } from 'vue';

 export default {
    setup(){
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
    }
}
 }
</script>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.nav-wrapper{
    z-index: 1;
    background: white;
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
    color: red;
}

.navbar {
    z-index: 2;
    width: 100%;
    height: 60px;
    max-width: 1200px;
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
    background-color: rgba(233, 233, 233, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 10px;
    overflow: hidden;
    transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
}

.dropdown-menu.open {
    height: 248px;
}

.dropdown-menu li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropdown-menu .action-btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

.dropdown-menu li:hover {
    color: red;
    cursor: pointer;
    font-size: 1.3rem;
}

.dropdown-menu .mobile-icon-link:hover{
    color: orange;
    cursor: pointer;
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