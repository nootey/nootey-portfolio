<template>
    <div id="hideOnMobile" class="rectangle">
      <h2 id="hideOnMobile">Projects</h2>
    </div>

    <Smoothie id="projects" :weight="0.01" class="smoothie-container" style="border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary);">

      <div id="main-row" style="width: 80%; margin: auto;" class="row align-items-center justify-content-center gap-2 mb-5">

        <!-- Left text -->
        <div class="main-col col w-50">
          <animated-component>
            <div class="title">Projects</div>
          </animated-component>

          <div class="paragraph-text row p-4 text-left">
            Here are a few projects I’ve worked on—ranging from professional applications developed as part of my full-time role to personal experiments and side projects.
            They reflect my interest in solving real problems.
          </div>

          <div class="paragraph-text row p-4 text-left">
            Regardless of the complexity of the project, I bring my best and put the clients needs at the forefront. Click the button
            below to view some of my projects.
          </div>

          <div class="paragraph-text row p-3 mt-4">

            <div class="col">
              <button @click="$router.push({name: 'project-view'})" class="main-button" tabIndex="-1" style="width: 50%;"> Project view</button>
            </div>
          </div>

        </div>

        <!-- Right carousel -->
        <div class="main-col col w-50">
          <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">

              <div class="carousel-item active">
                <img src="../assets/images/sph.png" class="d-block w-100" alt="Project 1">
                <div class="carousel-caption d-none d-md-block rounded p-3">
                  <h5>Sportheartt</h5>
                  <p>Athlete measurement app.</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="../assets/images/ng-ml.png" class="d-block w-100" alt="Project 2">
                <div class="carousel-caption d-none d-md-block rounded p-3">
                  <h5>NoiseGuard ML</h5>
                  <p>Sound classification pipeline.</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="../assets/images/ims-cal.png" class="d-block w-100" alt="Project 3">
                <div class="carousel-caption d-none d-md-block rounded p-3">
                  <h5>Calibration system</h5>
                  <p>With Hubspot integration.</p>
                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

      </div>
    </Smoothie>
  </template>

<script setup>
import { Smoothie } from 'vue-smoothie';
import AnimatedComponent from '../components/reusable/AnimatedComponent.vue';

const props = defineProps({
  darkMode: Boolean
});

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

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 1rem;
  color: white;
  backdrop-filter: blur(4px);
  max-width: 90%;
  margin: auto;
}

.carousel-caption h5,
.carousel-caption p {
  color: white;
  margin: 0;
  padding: 0;
  background: transparent;
}

.carousel-item {
  transition: transform 0.6s ease-in-out;
}

.carousel-item img {
  border-radius: 12px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 255, 255, 0.8); /* light background */
  border-radius: 50%;
  padding: 15px;
  background-size: 60% 60%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.5 0l-4 4 4 4V0z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.5 0v8l4-4-4-4z'/%3E%3C/svg%3E");
}

</style>