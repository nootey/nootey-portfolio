<template>
  <div class="home">
    <img alt="Bure logo" src="../assets/bure_logo.png" width="125px" height="125px">
    <MainCard />
  </div>
</template>

<script>
import MainCard from '@/components/MainCard.vue'

export default {
  name: 'HomeView',
  components: {
    MainCard
  }
}
</script>
