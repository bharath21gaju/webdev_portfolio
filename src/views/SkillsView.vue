<template>
    <section class="min-h-screen w-full" ref="skillsSection" id="skills-section">
      <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
        <h1 class="text-3xl font-bold pr-5">💼 Technical Skills</h1>
        <div class="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div class="space-y-6 px-5">
        <div>
          <h3 class="font-semibold text-lg mb-2">Programming Languages</h3>
          <p class="text-left mb-2">Python, C, C++, Java, Matlab, HTML, JavaScript, CSS</p>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Tools & Libraries</h3>
          <p class="text-left mb-2">TensorFlow, PyTorch, NumPy, Pandas, Scikit-learn, OpenCV, Keras, Flask, C, C++, OJET, Knockout Js, Apache Spark</p>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Platforms</h3>
          <p class="text-left mb-2">Jupyter Notebook, Google Colab, Jenkins, Jira, VS Code, SVN, GIT Version, Oracle Weblogic, Oracle SQL, Oracle Database 11g, Eclipse, Azure Machine Learning Studio, Oracle Cloud, MongoDB, Postman API</p>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Other Technologies</h3>
          <p class="text-left">Microsoft Office - Word, Excel, PowerPoint</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // If you need to handle visibility on scroll or similar effects,
  // you would include that logic here. If not, you can remove this reference.
  const skillsSection = ref(null);
  const visible = ref(true); // This should be tied to your visibility logic or removed if not needed.
  </script>
  
  <style scoped>
  /* Add any specific styles for your skills section here */
  #skills-section {
    /* Styling for the whole skills section */
    max-width: 800px;
    margin: auto;
    padding: 0 1rem;
  }
  
  #skills-section h1 {
    /* Style for the main heading */
    margin-bottom: 2rem; /* Adjust as needed */
  }
  
  #skills-section h3 {
    /* Style for the sub-heading */
    padding-bottom: 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #4F46E5; /* Arbitrary color for the underline */
  }
  
  #skills-section p {
    /* Style for the paragraphs */
    padding-left: 1rem; /* Indent skill items for better readability */
  }
  </style>
  