<template>
    <section class="min-h-screen w-full flex flex-col" ref="skillsSection" id="skills-section">
      <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
        <h1 class="text-3xl font-bold pr-5">💼 Technical Skills</h1>
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      
      <div :class="['flex-grow transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
        <!-- Skills Categories - Data from portfolio.js -->
        <div class="space-y-6 px-4">
          <div v-for="category in content" :key="category.title">
            <h3 class="font-semibold text-xl mb-3 text-purple-600 dark:text-purple-400 flex items-center">
              <span class="mr-2">{{ getCategoryEmoji(category.title) }}</span>
              {{ category.title }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in category.items" 
                :key="skill.name" 
                class="skill-tag"
              >{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Array,
    transitions: Object
})

const skillsSection = ref(null);
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches 
    ? onIntersect(skillsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) 
    : true

const getCategoryEmoji = (title) => {
    const emojis = {
        'Programming Languages': '💻',
        'Frontend': '🎨',
        'Backend & APIs': '⚙️',
        'Databases & Storage': '🗄️',
        'Cloud Platforms': '☁️',
        'DevOps & Monitoring': '🛠️',
        'ML & GenAI': '🤖'
    };
    return emojis[title] || '⚡';
};
</script>

<style scoped>
.skill-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: rgb(177, 132, 54);
    border-radius: 0.375rem;
    margin: 0.125rem;
    transition: transform 0.3s;
    cursor: default;
    font-size: 0.9rem;
}

.skill-tag:hover {
    transform: translateY(-3px);
}
</style>