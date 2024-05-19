<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container" style="border-top-left-radius: 20px; border-top-right-radius: 20px;">

      <div class="col p-2 mt-4">

        <div class="row w-100 align-items-center justify-content-center gap-3">

            <div class="col w-50">

              <div class="typed-out" style="margin-left: 0; padding: 0.25rem 0 0.25rem 0.5rem">
                {{ "Hello there!" }}
              </div>

              <div class="paragraph-text row p-2 text-left mt-2" style="font-size: 1.33rem;">
                I provide businesses with cutting-edge digital solutions 
                tailored to their needs, including website design, web development, 
                web applications, and digital marketing.
              </div>           
              
              <div class="paragraph-text row p-2 text-left" style="font-size: 1.33rem;">
                I am equipped with a solid foundation in computer science 
                and a hunger for continuous learning and growth in the ever-evolving world of technology.
              </div>

            </div>     
            
            <div class="col w-50">
              <img src="@/assets/images/welcomepage_placeholder.svg" alt="Welcome placeholder"
              style="width: 100%; height: auto;">
            </div>

        </div>

        <div class="row w-100 gap-3 mt-5">

          <div class="paragraph-text row p-2 mt-4">
          
            <div class="col col-auto min-width-col">
            <a href="#projects">
              <button class="main-button" tabIndex="-1">Projects</button>
            </a>
            </div>

          <div class="col col-auto min-width-col">
            <a href="#contact">
              <button class="main-button" tabIndex="-1">Contact</button>
            </a>
          </div>
        </div>

        <div class="row mx-auto text-center justify-content-center p-3 mt-5">
          <a class="arrow bounce col col-auto min-width-col" href="#about">
            <img v-if="darkMode" src="@/assets/images/arrow-light.png"
                 width="50"/>
            <img v-else src="@/assets/images/arrow-dark.png"
                 width="50"/>
          </a>
        </div>

        </div>

      </div>
  </Smoothie>
 
</template>
  
<script>
import { Smoothie } from "vue-smoothie";

export default {
  name: 'Home',
  props: ['darkMode'],
  components: {Smoothie},
  setup() {
    return {

    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typed-out {
  font-family: 'Source Code Pro', monospace;
  font-size: 3rem;
  font-weight: 1000;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--accent-color); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .1em; /* Adjust as needed */
  max-width: min-content;
  animation: 
    typing 3s steps(20, end) forwards,
    blink .8s infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 90% }
}

/* The typewriter cursor effect */
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: var(--accent-color); }
}

.arrow {
  text-align: center;
  margin: 8% 0;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

</style>
  