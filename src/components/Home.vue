<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container">
      <div class="h-screen flex flex-col gap-8">  

        <div class="welcome-header p-3 flex flex-row w-100"> {{ "Hello, I'm Jure!" }}</div>

        <div class="paragraph-text flex flex-row p-3 text-left mt-8"> Welcome! I'm a full-stack software engineer based in Slovenia. I recently graduated from University of Ljubljana, 
          Faculty of electrical engineering.  I am equipped with a solid foundation in computer science and a hunger for continuous learning and growth in the ever-evolving world of technology.
          I'm passionate about software development, artificial intelligence and design.
        </div>
  <!-- 
        <div class="paragraph-text  flex flex-row p-3 text-left mt-4"> 
          My main tech stack: 
          <ul class="portfolio-list">
            <li>Laravel</li>
            <li>Vue</li>
            <li>MySQL</li>
            <li>Python</li>
          </ul>
        </div>


        <div class="paragraph-text  flex flex-row p-3 text-left mt-4"> 
        I'm currently working with: 

          <div class="flex flex-col w-50 ml-8">
              <div class="flex flex-row">GO</div>
              <div class="flex flex-row">Vue</div>
              <div class="flex flex-row">MongoDB</div>
          </div>
        </div>

        <div class="paragraph-text  flex flex-row p-3 text-left mt-4"> 
        I'm currently learning: 

          <div class="flex flex-col w-50 ml-8">
              <div class="flex flex-row">Rust</div>
          </div>
        </div> -->

        
        <div class="flex flex-row p-3 text-left mt-8"> BURE, Jure Bovha s.p.</div>

        <div class="flex flex-row p-3 w-100 gap-4 mt-4">

          <div class="flex flex-col w-50">
          <a>View my projects</a>
          </div>

          <div class="flex flex-col w-50">
            <a>Contact me</a>
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
  font-size: 5rem;
  font-weight: 1000;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--accent-color); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--accent-color); }
}

.paragraph-text {
  font-size: 1.4rem;
}

.portfolio-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.portfolio-list li {
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #f2f2f2;
  border-radius: 4px;
  color: #333;
}

.portfolio-list li:hover {
  background-color: #e0e0e0;
}

.portfolio-list li:first-child {
  margin-top: 10px;
}

.portfolio-list li:last-child {
  margin-bottom: 0;
}

</style>
  