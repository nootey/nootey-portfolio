<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container">
      <div class="h-screen flex-col p-5 mt-2">  

      <div class="title flex flex-row w-100"> {{ 'Home' }}</div>

      <div class="flex flex-row p-3 text-left"> img</div>

      <div class="flex flex-row p-3 text-left"> Personal and commercial computer services</div>
      
      <div class="flex flex-row p-3 text-left"> BURE, Jure Bovha s.p.</div>

      <div class="flex flex-row p-3 w-100  gap-3">

      <div class="flex flex-col w-50">
      <button type="button">View my projects</button>
      </div>

      <div class="flex flex-col w-50">
        <button type="button">Contact me</button>
      </div>
      
      
      </div>

      </div>
  </Smoothie>
 
</template>
  
  <script>
  import { Smoothie } from "vue-smoothie";

  export default {
    name: 'Home',
    components: {Smoothie},
    setup() {
      return {

      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  