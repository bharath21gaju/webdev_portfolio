<template>
    <section class="min-h-screen w-full"  ref="educationSection" id="education-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
        <h1 class="text-3xl font-bold pr-5">🎓 My Education</h1>
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div class="space-y-6">
        <div v-for="education in educationHistory" :key="education.id" class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-x1 text-left">
              <a :href="education.link" class="text-blue-500 hover:underline" target="_blank">{{ education.university }}</a>
            </h3>
            <span class="text-md text-right text-gray-600">{{ education.period }}</span>
          </div>
          <div class="text-left mb-2">{{ education.degree }}</div>
          <div class="text-md italic text-left">Related Courses: {{ education.courses.join(', ') }}</div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { onIntersect } from '../composables/onIntersect';
  
  const educationHistory = ref([
    {
      id: 1,
      period: 'Aug 2023 - Present',
      degree: 'Master of Science in Data Science',
      university: 'Northeastern University, Boston, USA',
      link: 'https://www.northeastern.edu/',
      location: 'Boston, USA',
      courses: ['Supervised Machine Learning', 'Data Management and Processing']
    },
    {
      id: 2,
      period: 'Aug 2018 - Jul 2022',
      degree: 'Bachelor of Engineering in ECE',
      university: 'BMS College Of Engineering, Bangalore, India',
      link: 'https://www.bmsce.ac.in/',
      location: 'Bangalore, India',
      courses: ['Machine Learning', 'Deep Learning', 'Operating Systems', 'C++ Programming', 'Computer Networks', 'Embedded Systems']
    }
  ]);
  
  const educationSection = ref(null);
  const visible = onIntersect(educationSection, false, { threshold: 0.1 });
  </script>
  
  <style scoped>
  /* Enhanced padding and margin for a spacious layout */
  ul {
    max-width: 800px;
    margin: auto;
    padding: 0 20px;
  }
  
  @media (min-width: 768px) {
    ul {
      padding: 0 40px;
    }
  }
  </style>
  