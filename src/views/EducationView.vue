<template>
    <section class="min-h-screen w-full flex flex-col" ref="educationSection" id="education-section">
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
      
      <!-- Multi-Row Scrolling Tech Icons -->
      <div class="mt-12 mb-8 flex-grow flex flex-col justify-center">
        <div class="space-y-4">
          <!-- Row 1 - Scrolling Left -->
          <div class="tech-row">
            <div class="tech-track scroll-left">
              <template v-for="n in 3" :key="'row1-'+n">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
              </template>
            </div>
          </div>
          
          <!-- Row 2 - Scrolling Right -->
          <div class="tech-row">
            <div class="tech-track scroll-right">
              <template v-for="n in 3" :key="'row2-'+n">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              </template>
            </div>
          </div>
          
          <!-- Row 3 - Scrolling Left (slower) -->
          <div class="tech-row">
            <div class="tech-track scroll-left-slow">
              <template v-for="n in 3" :key="'row3-'+n">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
              </template>
            </div>
          </div>
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
      period: 'Aug 2023 - December 2025',
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
      university: 'BMS College Of Engineering, Bangalore',
      link: '',
      location: 'Bangalore',
      courses: ['Machine Learning', 'Deep Learning', 'Operating Systems', 'C++ Programming', 'Computer Networks', 'Embedded Systems']
    }
  ]);
  
  const educationSection = ref(null);
  const visible = onIntersect(educationSection, false, { threshold: 0.1 });
  </script>
  
  <style scoped>

  .tech-row {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }

  .tech-track {
    display: flex;
    width: max-content;
    gap: 3rem;
    padding: 0.5rem 0;
  }

  .tech-track img {
    width: 56px;
    height: 56px;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: default;
  }

  .tech-track img:hover {
    transform: scale(1.3);
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
  }

  /* Row 1 - Scroll Left */
  .scroll-left {
    animation: scrollLeft 30s linear infinite;
  }

  /* Row 2 - Scroll Right */
  .scroll-right {
    animation: scrollRight 35s linear infinite;
  }

  /* Row 3 - Scroll Left Slower */
  .scroll-left-slow {
    animation: scrollLeft 45s linear infinite;
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.33%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-33.33%); }
    100% { transform: translateX(0); }
  }

  /* Pause on hover */
  .tech-banner:hover .tech-track {
    animation-play-state: paused;
  }
  </style>


  