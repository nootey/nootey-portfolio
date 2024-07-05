<template>
    <div id="hideOnMobile" class="rectangle">
      <h2 id="hideOnMobile">Projects</h2>
    </div>
    <Smoothie id="projects" :weight="0.01" class="smoothie-container" style="border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary);">
      <div id="main-row" style="width: 80%; margin: auto;" class="row align-items-center justify-content-center gap-2 mb-5">

        <div class="main-col col w-50">
          <animated-component>
            <div class="title">Projects</div>
          </animated-component>

          <div class="paragraph-text row p-4 text-left">
            These are some of my projects. It's a mix of my regular work, projects for clients and some demo projects.
            SEO performance and optimization are my number one priorities, regardless of the job.
          </div>

          <div class="paragraph-text row p-4 text-left">
            Regardless of the complexity of the project, I bring my best and put your needs at the forefront. Click the button
            bellow to view some of my projects.
          </div>

          <div class="paragraph-text row p-3 mt-4">

            <div class="col">
              <a href="/projects">
                <button class="main-button" tabIndex="-1" style="width: 50%;">Projects</button>
              </a>
            </div>
          </div>

        </div>

        <div class="main-col col w-50">

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" style="background: none;">
                <img class="d-block w-100" src="@/assets/images/close-up-laptop.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/images/close-up-laptop.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/images/close-up-laptop.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
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

  <style scoped>
  .rectangle {
    position: absolute;
    z-index: 2;
    background-color: var(--accent-color);
    transform: translateY(50%);
    top: 200%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(((100vw - 90%) / 2) + 90px);
    max-width: 180px;
    left: 0;
    margin-left: calc((100vw - 1800px) / 2);
    border-radius: 25px;
    padding-right: 3.5rem;
    overflow-x: hidden;
  }

  .rectangle h2 {
    background: none !important;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    color: var(--background-color-primary);
    display: flex;
    align-items: center;
    margin-left: 45%;
    margin-bottom: 0;
    transform: rotate(90deg);
  }

  @media only screen and (max-width: 1770px) {
    .rectangle{
      margin-left: 0 !important;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  @media only screen and (max-width: 1100px) {
    .rectangle{
        max-width: 90px;
    }
  }

  @media only screen and (max-width: 800px) {

    #hideOnMobile{
      display: none;
    }
    #main-row {
      width: 90% !important;
      flex-direction: column;
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