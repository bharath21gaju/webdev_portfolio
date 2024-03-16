
<template>
    <section class="min-h-screen w-full" ref="skillsSection" id="skills-section">
      <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
        <h1 class="text-3xl font-bold pr-5">💼 Technical Skills</h1>
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div class="space-y-6 px-5">
        <div>
          <h3 class="font-semibold text-xl mb-2">Programming Languages</h3>
          <p class="text-left mb-2 skill-list">
            <span>Python</span><span>C</span><span>C++</span><span>Java</span>
            <span>Matlab</span><span>HTML</span><span>JavaScript</span><span>CSS</span>
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-xl mb-2">Tools & Libraries</h3>
          <p class="text-left mb-2 skill-list">
            <span>TensorFlow</span><span>PyTorch</span><span>NumPy</span><span>Pandas</span>
            <span>Scikit-learn</span><span>OpenCV</span><span>Keras</span><span>Flask</span>
            <span>C</span><span>C++</span><span>OJET</span><span>Knockout Js</span><span>Apache Spark</span>
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-xl mb-2">Platforms</h3>
          <p class="text-left mb-2 skill-list">
            <span>Jupyter Notebook</span><span>Google Colab</span><span>Jenkins</span>
            <span>Jira</span><span>VS Code</span><span>SVN</span><span>GIT Version</span>
            <span>Oracle Weblogic</span><span>Oracle SQL</span><span>Oracle Database 11g</span>
            <span>Eclipse</span><span>Azure Machine Learning Studio</span><span>Oracle Cloud</span>
            <span>MongoDB</span><span>Postman API</span>
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-xl mb-2">Other Technologies</h3>
          <p class="text-left skill-list">
            <span>Microsoft Office</span><span>Word</span><span>Excel</span><span>PowerPoint</span>
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // If you have a visibility logic, then replace true with the respective reactive property
  const skillsSection = ref(null);
  const visible = ref(true);
  </script>
  
  <style scoped>
  /* Style for the heading of each skills category */
  h3 {
    margin-bottom: 1rem;
    color: #3b82f6; /* This color is for illustration; adjust the hex code to match your design */
  }
  
  /* Style for the skill items */
  .skill-list span {
    display: inline-block;
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    transition: transform 0.3s;
    cursor: pointer;
    background-color: rgb(177, 132, 54); /* Light blue background, adjust as needed */
    border-radius: 0.375rem; /* 6px border-radius, adjust as needed */
  }
  
  .skill-list span:hover {
    transform: translateY(-5px);
  }
  
  /* Add other styles as needed */
  </style>
  