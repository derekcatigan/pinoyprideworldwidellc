<script setup>
// Import images
import HomeImage01 from '@/assets/images/HomeImage01.png';

// News Data
const newsList = [
    {
        title: "Pinoy Pride Launches New Service",
        date: "Sep 10, 2025",
        description: "We are excited to announce our new express delivery service...",
        link: "/news/1",
        image: HomeImage01
    },
    {
        title: "Holiday Shipping Schedule",
        date: "Aug 25, 2025",
        description: "Please note our schedule for the upcoming holidays...",
        link: "/news/2",
        image: HomeImage01
    },
    {
        title: "Shipping Announcement",
        date: "Jul 15, 2025",
        description: "We are taking extra precautions to ensure the safety of your shipments...",
        link: "/news/3",
        image: HomeImage01
    },
];
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-fade-slide-up="100" v-for="(news, index) in newsList" :key="index"
            class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition flex flex-col">

            <img v-if="news.image" :src="news.image" alt="news image"
                class="w-full h-48 object-cover rounded-lg mb-4" />

            <p class="text-xs text-gray-400">{{ news.date }}</p>
            <h3 class="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">{{ news.title }}</h3>
            <p class="text-gray-600 text-sm mt-2 line-clamp-3">{{ news.description }}</p>
            <a :href="news.link" class="text-blue-600 mt-3 text-sm font-medium hover:underline self-start">Read more
                →</a>
        </div>
    </div>
</template>
