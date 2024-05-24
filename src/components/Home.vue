<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container" style="border-top-left-radius: 20px; border-top-right-radius: 20px;">

      <div class="col p-2 mt-4">

        <div id="main-row" class="row w-100 align-items-center justify-content-center gap-3">

            <div id="col-text" class="main-col col w-50 gap-1">

              <div class="typed-container">
                <div class="typed-out">
                  {{ "Hello there!" }}
                </div>
              </div>

              <div class="paragraph-text row p-2" style="font-size: 1.15rem;">
                I provide businesses with cutting-edge digital solutions 
                tailored to their needs, including website design, web development, 
                web applications, and digital marketing.
              </div>           
              
              <div class="paragraph-text row p-2" style="font-size: 1.15rem;">
                I am equipped with a solid foundation in computer science 
                and a hunger for continuous learning and growth in the ever-evolving world of technology.
              </div>

            </div>     
            
            <div id="image-col" class="main-col col w-50">
              <img src="@/assets/images/welcomepage_placeholder.svg" alt="Welcome placeholder"
              style="width: 100%; height: auto;">
            </div>

        </div>

        <div class="row w-100 gap-3 mt-5">

          <div class="main-col col col-auto min-width-col">
            <a href="#projects">
              <button class="main-button" tabIndex="-1">Projects</button>
            </a>
          </div>

          <div class="main-col col col-auto min-width-col">
            <a href="#contact">
              <button class="main-button" tabIndex="-1">Contact</button>
            </a>
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
.typed-container {
  display: flex;
  //max-width: min-content;
}

.typed-out {
  font-family: 'Source Code Pro', monospace;
  font-size: 3rem;
  font-weight: 1000;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--accent-color); /* The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
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

@media only screen and (max-width: 1110px) {
  .typed-out{
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 800px) {
  .typed-out{
    font-size: 2em;
  }
  .typed-container{
    justify-content: center;
    align-items: center;
    max-width: 100%
  }
  #main-row {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  .main-col {
    width: 100% !important;
  }
  .paragraph-text{
    font-size: 1rem !important;
  }
}

</style>
  