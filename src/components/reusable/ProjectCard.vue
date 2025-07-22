<template>
  <div class="project-card">
    <div class="project-header d-flex justify-content-between align-items-center">
      <div class="project-title" style="background-color: transparent;">
        {{ title }}
      </div>
      <font-awesome-icon
          :icon="isOpen ? ['fas', 'xmark'] : ['fas', 'expand']"
          @click="toggleCollapse"
          class="icon-button"
      />
    </div>

    <transition
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
        @after-leave="onAfterLeave"
    >
      <div v-if="isOpen" ref="content" class="project-description-wrapper">
        <div class="project-description">
          <p>{{ description }}</p>

          <div v-if="website">
            <p>
              Website:
              <a :href="website" target="_blank" rel="noopener noreferrer">{{ website }}</a>
            </p>
          </div>

          <p>Tech stack:</p>
          <ul class="tech-stack">
            <li v-for="(tech, index) in tech_stack" :key="index">• {{ tech }}</li>
          </ul>

          <p>Key words:</p>
          <ul class="tech-stack">
            <li v-for="(word, index) in key_words" :key="index">• {{ word }}</li>
          </ul>

          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  tech_stack: Array,
  key_words: Array,
  website: String,
  index: Number,
});

const isOpen = ref(props.index === 0);
const content = ref(null);

const toggleCollapse = () => {
  isOpen.value = !isOpen.value;
};

const duration = 500;

const onEnter = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
  el.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1)`;
  nextTick(() => {
    el.style.height = el.scrollHeight + 'px';
    el.style.opacity = '1';
  });
};

const onAfterEnter = (el) => {
  el.style.height = 'auto';
  el.style.transition = '';
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
  void el.offsetHeight;
  el.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1)`;
  el.style.height = '0';
  el.style.opacity = '0';
};

const onAfterLeave = (el) => {
  el.style.transition = '';
};
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

.project-header {
  background-color: var(--background-color-secondary);
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid var(--border-color);
}

.project-title {
  margin: 0;
}

.icon-button {
  border: none;
  background: transparent;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
}

.project-description-wrapper {
  overflow: hidden;
}

.project-description {
  padding: 10px 20px 20px;
  text-align: left;
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

@media(max-width: 750px) {
  .project-description {
    text-align: center;
  }
}
</style>
