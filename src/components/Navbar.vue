<template>

    <div>
    <!-- logo -->
    <header>
        <div>
            <img src="../assets/bure_logo.png" />
            <p>Bure s.p.</p>
        </div>
    </header>

    

    <!-- nav -->
    <div class="mt-12 flex flex-col gap-2 justify-center align-center">
        <div class="nav-item flex flex-row justify-center"><a href="#home">{{ 'Home' }}</a></div>
        <div class="nav-item flex flex-row justify-center"><a href="#about">{{ 'About' }}</a></div>
        <div class="nav-item flex flex-row justify-center"><a href="#projects">{{ 'Projects' }}</a></div>
        <div class="nav-item flex flex-row justify-center"><a href="#contact">{{ 'Contact' }}</a></div>
    </div>

    </div>

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
.navbar {
    font-weight: bold;
    border-right: 1px solid black;
}

.nav-item {
    padding: 5px;
}

.nav-item:hover {
    background: black;
}
</style>