<template>
    <div class="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-6">Send Me a Message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
                <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
                <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-button-color focus:border-transparent transition duration-200 outline-none"
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
                <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-button-color focus:border-transparent transition duration-200 outline-none"
                    placeholder="john@company.com"
                />
            </div>
            <div>
                <label for="company" class="block text-sm font-medium mb-2">Company (Optional)</label>
                <input 
                    type="text" 
                    id="company" 
                    v-model="formData.company"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-button-color focus:border-transparent transition duration-200 outline-none"
                    placeholder="Your Company"
                />
            </div>
            <div>
                <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                <input 
                    type="text" 
                    id="subject" 
                    v-model="formData.subject" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-button-color focus:border-transparent transition duration-200 outline-none"
                    placeholder="Job Opportunity / Collaboration"
                />
            </div>
            <div>
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea 
                    id="message" 
                    v-model="formData.message" 
                    required
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-button-color focus:border-transparent transition duration-200 outline-none resize-none"
                    placeholder="Hi Bharath, I'd like to discuss..."
                ></textarea>
            </div>
            <button 
                type="submit"
                class="w-full py-3 px-6 bg-button-color text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:ring-4 focus:ring-button-color/30 transition duration-300"
            >
                📧 Send Message
            </button>
        </form>
        <p class="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
            This will open your email client with a pre-filled message
        </p>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
    recipientEmail: {
        type: String,
        default: 'sai21gajula@gmail.com'
    }
});

const formData = reactive({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
});

const handleSubmit = () => {
    const companyInfo = formData.company ? ` from ${formData.company}` : '';
    const emailBody = `Hi Bharath,

${formData.message}

---
Sent by: ${formData.name}${companyInfo}
Reply to: ${formData.email}`;

    const mailtoLink = `mailto:${props.recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
};
</script>
