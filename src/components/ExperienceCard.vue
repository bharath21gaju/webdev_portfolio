<!-- <template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <h3 class="text-xl font-extrabold">{{ experience.position }} <a :href="experience.company.link" class="hover:text-link-color">@{{ experience.company.name }}</a></h3>
        <p class="italic">{{ experience.duration }}</p>
        <ul class="list-['\1F449'] pl-6 pt-4 text-slate-500 dark:text-slate-300">
            <li v-for="bullet in experience.bulletPoints" class="pl-2 pb-2">{{ bullet }}</li>
        </ul>
        <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    experience: Object,
})

</script> -->
<!-- 
<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
      <h3 class="text-xl font-extrabold">{{ experience.position }} <a :href="experience.company.link" class="hover:text-link-color">@{{ experience.company.name }}</a></h3>
      <p class="italic">{{ experience.duration }}</p>
      <ul class="list-disc pl-6 pt-4 text-slate-500 dark:text-slate-300">
        <li v-for="bullet in experience.bulletPoints" :key="bullet" class="pb-2">{{ bullet }}</li>
      </ul>
      <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
        <p v-for="hashtag in experience.hashtags" :key="hashtag" class="pr-4 last:pr-0">#{{ hashtag }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      experience: Object,
  })
  </script>
  
  <style scoped>
  /* Style for the links inside the card */
  .hover:text-link-color {
    color: #3b82f6; /* Example blue color for links, adjust as needed */
  }
  </style>
   -->
   <template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
      <div>
        <a :href="experience.positionLink" class="no-underline hover:no-underline">
          <h3 class="text-xl font-extrabold position-hover">{{ experience.position }}</h3>
        </a>
        <a :href="experience.company.link" class="no-underline hover:no-underline company-hover">
          <span class="company-name">@{{ experience.company.name }}</span>
        </a>
      </div>
      <p class="italic">{{ experience.duration }}</p>
      <ul class="list-disc pl-6 pt-4 text-slate-500 dark:text-slate-300">
        <li v-for="bullet in experience.bulletPoints" :key="bullet" class="pb-2">{{ bullet }}</li>
      </ul>
      <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
        <p v-for="hashtag in experience.hashtags" :key="hashtag" class="pr-4 last:pr-0">#{{ hashtag }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      experience: Object,
  })
  </script>
  
  <style scoped>
  .no-underline {
    text-decoration: none;
  }
  
  .position-hover:hover, .company-hover:hover {
    color: #2563eb; /* Adjust the color to fit your design */
    text-decoration: underline;
  }
  
  .company-name {
    color: #64748b; /* Differentiate the company name style if needed */
  }
  </style>
  