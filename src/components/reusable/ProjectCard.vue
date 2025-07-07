<template>
  <div class="project-card">
    <div class="project-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="project-description">
      <p>{{ description }}</p>
    </div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String
});
</script>

<style scoped>
.project-card {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  max-height: 600px;
  overflow: hidden;
  padding: 0;
}

.project-title {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #ddd;
  z-index: 1;
}

.project-description {
  padding: 10px 20px 20px;
  overflow-y: auto;
}
</style>