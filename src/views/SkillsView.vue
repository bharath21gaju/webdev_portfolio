<template>
    <div class="skills-section my-10">
      <h2 class="text-2xl font-bold mb-4">Technical Skills</h2>
      <div>
        <h3 class="text-xl font-semibold">Programming Languages</h3>
        <p>Python, C, C++, Java, Matlab, HTML, JavaScript, CSS</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold">Tools & Libraries</h3>
        <p>TensorFlow, PyTorch, NumPy, Pandas, Scikit-learn, OpenCV, Keras, Flask, C, C++, OJET, Knockout Js, Apache Spark</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold">Platforms</h3>
        <p>Jupyter Notebook, Google Colab, Jenkins, Jira, VS Code, SVN, GIT Version, Oracle Weblogic, Oracle SQL, Oracle Database 11g, Eclipse, Azure Machine Learning Studio, Oracle Cloud, MongoDB, Postman API</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold">Other Technologies</h3>
        <p>Microsoft Office - Word, Excel, PowerPoint</p>
      </div>
    </div>
  </template>
  
  <script setup>
const props = defineProps({
    content: Object,
    transitions: Object
})
  </script>
  
  <style scoped>
  /* Add your styles here */
  .skills-section h3 {
    margin-top: 1rem;
  }
  </style>
  