<template>
    <div class="rectangle">
      <h2>Projects</h2>
    </div>
    <Smoothie id="projects" :weight="0.01" class="smoothie-container" style="border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary);">
      <div class="col p-5 gap-5 mt-5" style="width: 90%; margin-left: auto;">

        <div class="row w-100 align-items-center justify-content-center gap-2 mb-5">

          <div class="col w-50">
            <animated-component>
              <div class="title">Projects</div>
            </animated-component>

            <div class="paragraph-text flex flex-row p-3 text-left">
              These are some of my projects. It's a mix of my regular work, projects for clients and some demo projects.
              Performance and optimization are my number one priorities, regardless of the job.
            </div>

            <div class="paragraph-text flex flex-row p-3 text-left">
              Regardless of the complexity of the project, I bring my best and put your needs at the forefront. Click the button
              bellow to view some of my projects.
            </div>

            <div class="paragraph-text row p-3 mt-4">

              <div class="col col-auto min-width-col">
                <a href="/projects">
                  <button class="main-button" tabIndex="-1">Projects</button>
                </a>
              </div>
            </div>

          </div>

          <div class="col w-50">
            <img src="@/assets/images/coding.png" style="width: 100%; height: auto;"/>
          </div>

        </div>

      </div>
    </Smoothie>
  </template>
    
  <script>
  import { Smoothie } from "vue-smoothie";
  import AnimatedComponent from "@/components/reusable/AnimatedComponent.vue";

  export default {
    name: 'Projects',
    props: ['darkMode'],
    components: {AnimatedComponent, Smoothie},
    setup() {
      return {

      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .rectangle {
    position: absolute;
    z-index: 2;
    background-color: var(--accent-color);
    transform: translateY(50%);
    top: 205%;
    height: 50%;
    display: flex; /* Adjust for your desired breakpoint */
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(((100vw - 1504px) / 2) + 90px);
    left: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding-right: 3.5rem; /* Adjust for your desired breakpoint */
  }

  /* Define your custom CSS class for child elements */
  .rectangle h2 {
    background: none !important;
    text-transform: uppercase;
    font-size: 1.75rem; /* Adjust for your desired font size */
    font-weight: 700;
    color: var(--background-color-primary);
    display: flex;
    align-items: center;
    margin-bottom: 0; /* Adjust for your desired breakpoint */
    transform: rotate(-90deg);
  }
  </style>