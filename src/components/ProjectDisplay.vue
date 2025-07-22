<template>

  <div class="w-100 align-items-center justify-content-center" style="padding: 100px 25px 200px 25px; max-width: 1600px;">

    <animated-component>
      <div class="title" style="padding-left: 1rem;">Project showcase</div>
    </animated-component>

    <div class="d-flex flex-column gap-4 p-3 align-items-center justify-content-center">
      <div v-for="(project, index) in projects" :key="index" class="w-100">
        <ProjectCard :title="project.title" :description="project.description"
                     :tech_stack="project.tech_stack" :key_words="project.key_words"
                     :website="project.website" :index="index" />
      </div>
    </div>
  </div>
</template>

<script setup>

import ProjectCard from "../components/reusable/ProjectCard.vue";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";
const projects = [
  {
    title: "SPH",
    description: "SPH is a comprehensive platform designed to centralize and analyze sports performance data. " +
        "It integrates data from Polar devices to provide detailed insights into physical metrics, empowering users to make data-driven decisions. " +
        "The system supports both web and mobile clients, offering robust interaction through HTTP and gRPC protocols. " +
        "The mobile app communicates directly with the Polar SDK to gather real-time biometric data. " +
        "I am primarily responsible for building and maintaining the backend server, written in Go, as well as the Android application, developed in Kotlin. I also contributed to the web client. " +
        "Key features include real-time data syncing, a scalable architecture optimized for performance and reliability, detailed measurements and structured logging.",
    tech_stack: ["Go", "Kotlin", "Angular", "TimescaleDB"],
    key_words: ["Centralization", "Measurements"],
  },

  {
    title: "Wealth Warden",
    description: "Wealth Warden is a personal finance tracker designed to be simple, intuitive, and efficient. Inspired by my own Excel-based template, this project aims to provide a seamless experience for tracking income, expenses, and financial goals—without unnecessary complexity.",
    tech_stack: ["Go", "MySQL"],
    key_words: ["Finance", "Tracking"],
  },

  {
    title: "NoiseGuard ML",
    description: "NoiseGuard ML is a FastAPI-based audio processing pipeline that segments .mp3 recordings using soundscape percentile metadata and classifies them with multiple ML models. " +
        "I developed the backend, a priority queue, and structured logging. I also created utility and testing scripts, and re-trained a classification model to improve performance on urban soundscapes, which represent the majority of NoiseGuard's data.",
    tech_stack: ["Python", "FastAPI", "Postgres"],
    key_words: ["Sound classification", "Transfer learning"],
  },

  {
    title: "Calibration management system",
    description: "This is an internal operations tool for managing equipment calibration, repair and order statuses, as well as customer interactions. I implemented workflow-enhancing features, integrated HubSpot for CRM synchronization, and developed systems for automatic notifications and detailed activity logging to streamline day-to-day operations.",
    tech_stack: ["Laravel", "Vue", "MySQL"],
    key_words: ["Hubspot", "Internal operations", "Customer management"],
  },

  {
    title: "Personal AI agent assistant",
    "description": "I designed and developed an AI-powered assistant to streamline daily operations within a company. The assistant transcribes meetings, processes product and company-related information, and builds a centralized knowledge base. Leveraging this knowledge, it can summarize meetings, generate action plans, analyze documents, and keep team members informed—minimizing the need for constant meeting attendance.",
    tech_stack: ["MCP", "NextJS", "AWS", "Prisma"],
    key_words: ["AI", "Knowledge base", "Transcription"],
  },

  {
    title: "Licensing server",
    "description": "I designed and developed a secure internal licensing server to manage and validate authorized devices across our hardware ecosystem, including Raspberry Pi units, SLM modules, and custom-built solutions. The server ensures that only registered and authenticated hardware can access company resources or operate within defined parameters. It includes features such as device registration, license generation, validation endpoints.",
    tech_stack: ["Go", "Vue", "MongoDB"],
    key_words: ["License", "Security"],
  },

  {
    title: "DSA implementation",
    "description": "I implemented most of the data structures and algorithms, to enhance my knowledge of programming, as well as to familiarize myself with Golang.",
    tech_stack: ["Go"],
    key_words: ["DSA", "Theory"],
  },

  {
    title: "Walko",
    "description": "Walko is a blockchain PNL analyzer, currently only on Solana. It is a simple CLI tool, which analyzes trading history and calculates theoretical performance over the wallets lifetime.",
    tech_stack: ["Python"],
    key_words: ["Crypto", "Solana", "Performance analysis"],
  }
];
</script>

<style scoped>

</style>