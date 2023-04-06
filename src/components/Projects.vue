<template>
    <Smoothie id="projects" :weight="0.01" class="smoothie-container">
        <div class="h-screen flex">  {{ 'projects' }}</div>
    </Smoothie>
   
  </template>
    
    <script>
    import { Smoothie } from "vue-smoothie";
  
    export default {
      name: 'Projects',
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