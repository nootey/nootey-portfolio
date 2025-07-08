<template>
  <div class="project-card">
    <div class="project-title">
      {{ title }}
    </div>
    <div class="project-description">
      <p>{{ description }}</p>

      <div v-if="website">
        <p>
          Website:
          <a :href="website" target="_blank" rel="noopener noreferrer">{{ website }}</a>
        </p>
      </div>

      <p>{{ "Tech stack:" }}</p>
      <ul class="tech-stack">
        <li v-for="(tech, index) in tech_stack" :key="index">• {{ tech }}</li>
      </ul>
      <p>{{ "Key words:" }}</p>
      <ul class="tech-stack">
        <li v-for="(word, index) in key_words" :key="index">• {{ word }}</li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  tech_stack: Array,
  key_words: Array,
  website: String
});
</script>

<style scoped>
.project-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  background-color: var(--background-color-secondary);
  text-align: left;
  color: var(--text-color-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 0;
  overflow: hidden;
}
.project-title {
  background-color: var(--background-color-secondary);
  padding: 20px 20px 10px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid var(--border-color);
}
.project-description {
  padding: 10px 20px 20px;
  overflow-y: auto;
}

.tech-stack {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--text-color-tertiary);
  list-style: none;
  padding-left: 0;
}
.tech-stack li {
  margin-bottom: 4px;
}
</style>