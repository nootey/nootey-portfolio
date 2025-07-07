<template>

  <Smoothie id="project-view" :weight="0.03" class="smoothie-container" style="padding-top: 100px; border-top-left-radius: 20px; border-top-right-radius: 20px;">
    <div id="hideOnMobile" class="rectangle">
      <h2 id="hideOnMobile">Project display</h2>
    </div>

    <div class="project-card-wrapper">
      <div
          class="project-col"
          v-for="(project, index) in projects"
          :key="index">
          <ProjectCard
              :title="project.title"
              :description="project.description"
          />
      </div>
    </div>
  </Smoothie>
</template>

<script setup>

import {Smoothie} from "vue-smoothie";
import ProjectCard from "../components/reusable/ProjectCard.vue";
const projects = [
  {
    title: "Sportheart",
    description: "Sportheart is a comprehensive platform designed to centralize and analyze athlete performance data. " +
        "It integrates data from Polar devices to provide detailed insights into physical metrics, empowering athletes and coaches to make data-driven decisions. " +
        "The system supports both web and mobile clients, offering robust interaction through HTTP and gRPC protocols. " +
        "The mobile app communicates directly with the Polar SDK to gather real-time biometric data. " +
        "I am primarily responsible for building and maintaining the backend server, written in Go, as well as the Android application, developed in Kotlin. Key features include user authentication, real-time data syncing, and a scalable microservices architecture optimized for performance and reliability."
  },
  {
    title: "NoiseGuard ML",
    description: "NoiseGuard ML is a FastAPI-based audio processing pipeline that segments .mp3 recordings using soundscape percentile metadata and classifies them with multiple ML models. " +
        "I developed the backend, implemented authentication, a priority queue, and structured logging. I also created utility and testing scripts, and re-trained a classification model to improve performance on urban soundscapes, which represent the majority of NoiseGuard's data."
  },
  {
    title: "Calibration management system",
    description: "This is an internal operations tool for managing calibrations, repairs, orders, and customer interactions. I implemented workflow-enhancing features, integrated HubSpot for CRM synchronization, and developed systems for automatic notifications and detailed activity logging to streamline day-to-day operations."
  }
];
</script>

<style scoped>
.project-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.project-col {
  flex: 1 1 300px;
  max-width: 350px;
  min-width: 280px;
  display: flex;
}
</style>