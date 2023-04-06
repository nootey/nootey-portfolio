<template>
    <Smoothie id="about" :weight="0.01" class="smoothie-container">
      <div class="h-screen flex-col p-5 mt-2">  

      <div class="title flex flex-row w-100"> {{ 'About me' }}</div>

    
      <div class="flex flex-row p-3 text-left"> Hi! My name is Jure. I'm an Information and communication technology graduate from University in Ljubljana, Slovenia. I work full-time as a full-stack developer and part time as a freelancer, offering various services. I'm passionate about Software Development, UX Design and Artificial Intelligence.</div>
      <div class="flex flex-row p-3"> My current tech stack is Laravel & Vue. I'm proficient in multiple languages and frameworks.</div>
      <div class="title flex flex-row p-3"> Socials</div>
      <div class="flex flex-row p-3 gap-3"> 
      <div class="flex flex-col">
      Github
      </div>
      <div class="flex flex-col">
      Linkedin
      </div>
      <div class="flex flex-col">
      Email
      </div>
      </div>
      

</div>
    </Smoothie>
   
  </template>
    
    <script>
    import { Smoothie } from "vue-smoothie";
  
    export default {
      name: 'About',
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