<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container">
      <div class="col p-5 g-3">

        <div class="welcome-header p-4 row w-100 text-center justify-content-center"> {{ "Hello, I'm Jure!" }}</div>

        <div class="paragraph-text flex flex-row p-3 text-left mt-3">
          Welcome! I'm a full-stack software engineer based in Slovenia. I am a graduate from University of Ljubljana,
          Faculty of electrical engineering.
        </div>

        <div class="paragraph-text flex flex-row p-3 text-left  mt-3">
          I am equipped with a solid foundation in computer science and a hunger for continuous learning and growth in the ever-evolving world of technology.
        </div>


        <div class="paragraph-text row p-4 mx-auto text-center justify-content-center mt-3">
          <div class="col col-auto min-width-col">
            <a href="#contact">
              <button class="btn btn-primary" tabIndex="-1">Projects</button>
            </a>
          </div>

          <div class="col col-auto min-width-col">
            <a href="#contact">
              <button class="btn btn-primary" tabIndex="-1">Contact</button>
            </a>
          </div>
        </div>

        <div class="row mx-auto text-center justify-content-center p-3 mt-5">
          <a class="arrow bounce col col-auto min-width-col" href="#about">
            <img src="@/assets/images/arrow-dark.png"
                 width="50"/>
          </a>
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
  