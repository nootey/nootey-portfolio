<template>
  <div class="container mt-5">
    <h2>My Projects</h2>
    <div v-for="(project, index) in projects" :key="index" class="card mb-4">
      <img :src="project.image" class="card-img-top" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Project One",
    description: "Full-stack eCommerce platform using React, Node.js, and MongoDB.",
    image: new URL('@/assets/images/placeholder_1.jpg', import.meta.url).href
  },
  {
    title: "Project Two",
    description: "CRM dashboard built with Vue, Firebase Auth, and Chart.js for real-time data.",
    image: new URL('@/assets/images/placeholder_2.jpg', import.meta.url).href
  },
  {
    title: "Project Three",
    description: "Landing page with GSAP animations, high Lighthouse score, and SEO.",
    image: new URL('@/assets/images/setup-1.jpg', import.meta.url).href
  }
];
</script>