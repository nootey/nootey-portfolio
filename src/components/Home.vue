<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container">
      <div class="h-screen flex-col mt-2">  

      <div class="welcome-header p-3 flex flex-row w-100"> {{ "Hello, I'm Jure!" }}</div>

      <div class="paragraph-text flex flex-row p-3 text-left"> Welcome! I'm a full-stack software engineer based in Slovenia. I recently graduated from University of Ljubljana, Faculty of electrical engineering.
         I'm passionate about software devlopment, artificial intelligence and design.
      </div>

      <div class="paragraph-text  flex flex-row p-3 text-left"> 
      I'm currently working with: 
      </div>
        <div class="flex flex-col w-50 ml-8">
          <div class="flex flex-row">Laravel (PHP)</div>
          <div class="flex flex-row">Vue (JavaScript)</div>
          <div class="flex flex-row">MySQL</div>
          <div class="flex flex-row">Python</div>
        </div>
      
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
.welcome-header {
  font-family: 'Source Code Pro', monospace;
  font-size: 4rem;
  font-weight: 1000;
}

.paragraph-text {
  font-size: 1.2rem;
}
  </style>
  