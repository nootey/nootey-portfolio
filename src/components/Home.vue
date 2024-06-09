<template>
  <Smoothie id="home" :weight="0.03" class="smoothie-container" style="padding-top: 100px; border-top-left-radius: 20px; border-top-right-radius: 20px;">

    <div id="main-row" class="row w-100 align-items-center justify-content-center gap-3">

      <div id="col-text" class="main-col col w-50">

        <animated-component>
          <div class="typed-container">
            <div class="typed-out">
              {{ "Hello there!" }}
            </div>
          </div>
        </animated-component>

        <div class="paragraph-text row p-1 mt-3" style="font-size: 1.15rem;">
          I provide businesses with cutting-edge digital solutions
          tailored to their needs, including website design, web development,
          web applications, and digital marketing.
          I am equipped with a solid foundation in computer science
          and a hunger for continuous learning and growth in the ever-evolving world of technology.
        </div>

      </div>

      <div id="image-col" class="main-col col w-50">
        <img src="@/assets/images/welcomepage_placeholder.svg" alt="Welcome placeholder"
             style="width: 100%; height: auto;">
      </div>

    </div>

    <div id="button-row" class="row w-100 p-2 mt-5">

      <div class="main-col flex-column w-25">
        <a href="#projects">
          <button class="main-button" tabIndex="-1">Projects</button>
        </a>
      </div>

      <div class="main-col flex-column w-25">
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

  </Smoothie>
</template>

<script>
import { Smoothie } from "vue-smoothie";
import AnimatedComponent from "@/components/reusable/AnimatedComponent.vue";

export default {
  name: 'Home',
  props: ['darkMode'],
  components: { AnimatedComponent, Smoothie },
};
</script>

<style scoped>
.typed-container {
  display: flex;
}

.typed-out {
  font-size: 3rem;
  font-weight: 1000;
  overflow: hidden;
  border-right: .15em solid var(--accent-color);
  white-space: nowrap;
  letter-spacing: .1em;
  max-width: min-content;
  animation: typing 3s steps(20, end) forwards, blink .8s infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 90% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: var(--accent-color); }
}

.arrow {
  text-align: center;
  margin: 8% 0;
}

.bounce {
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
  .typed-out {
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 800px) {
  .smoothie-container{
    padding-top: 50px !important;
  }
  .typed-out {
    font-size: 2em;
  }
  .typed-container {
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
  #main-row {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  .main-col {
    width: 100% !important;
  }
  #button-row {
    gap: 15px;
    margin: 0;
  }
  .paragraph-text {
    font-size: 1rem !important;
  }
  #col-text {
    margin-top: 10px;
  }
}
</style>
