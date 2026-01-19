<template>
    <section class="min-h-screen w-full flex flex-col" ref="contactSection" id="contact-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 class="text-3xl font-bold px-5">📭 Contact</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col my-auto transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div v-if="content.formEmbedLink">
                <iframe :src="content.formEmbedLink" frameborder="0" marginheight="0" marginwidth="0" class="mb-10 min-h-screen w-full">Loading...</iframe>
            </div>
            <div v-else class="space-y-8 mx-auto w-full max-w-4xl px-4">
                <h1 class="text-3xl font-extrabold text-center">Get in Touch</h1>
                <p v-for="msg in content.externalLink.note" class="text-slate-500 dark:text-slate-300 text-center">{{ msg }}<br/></p>
                
                <!-- Contact Form Section -->
                <ContactForm :recipientEmail="content.externalLink.link.email" />
                
                <!-- Alternative: Direct Email Button -->
                <div class="flex flex-col items-center justify-center space-y-4 pt-4">
                    <p class="text-sm text-slate-500 dark:text-slate-400">Or reach out directly:</p>
                    <div class="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <a :href="'mailto:'+content.externalLink.link.email">
                            <button class="py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color duration-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white rounded-lg">
                                <span class="flex items-center space-x-2">
                                    <span>📧</span>
                                    <span>{{ content.externalLink.link.email }}</span>
                                </span>
                            </button>
                        </a>
                        <a href="tel:4254144108">
                            <button class="py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color duration-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white rounded-lg">
                                <span class="flex items-center space-x-2">
                                    <span>📞</span>
                                    <span>(425) 414-4108</span>
                                </span>
                            </button>
                        </a>
                    </div>
                    <p class="text-sm text-slate-500 dark:text-slate-300">{{ content.externalLink.responseTimeMessage }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';
import ContactForm from '../components/ContactForm.vue';

const props = defineProps({
    content: Object,
    transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>