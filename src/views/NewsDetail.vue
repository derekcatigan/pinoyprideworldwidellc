<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { newsList } from '@/data/newsData.js'

// Get route params
const route = useRoute()
const newsId = Number(route.params.id)
const newsItem = newsList.find(n => n.id === newsId)

// Track carousel index
const currentIndex = ref(0)
const isFullscreen = ref(false)

const nextSlide = () => {
    if (newsItem?.media) {
        currentIndex.value = (currentIndex.value + 1) % newsItem.media.length
    }
}

const prevSlide = () => {
    if (newsItem?.media) {
        currentIndex.value =
            (currentIndex.value - 1 + newsItem.media.length) % newsItem.media.length
    }
}

const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value
}
</script>

<template>
    <div class="max-w-4xl mx-auto py-10 px-5">
        <div v-if="newsItem" class="bg-white p-6 rounded-xl shadow-xl border border-gray-300">
            <!-- Carousel Section -->
            <div class="relative mb-6 h-96">
                <div v-if="newsItem.media && newsItem.media.length > 0">
                    <div v-for="(m, i) in newsItem.media" :key="i" v-show="i === currentIndex">
                        <!-- Image -->
                        <img v-if="m.type === 'image'" :src="m.src" alt="news media"
                            class="w-full max-h-96 object-contain rounded-lg bg-black shadow-lg" />

                        <!-- Video -->
                        <div v-else-if="m.type === 'video'" class="aspect-w-16 aspect-h-9">
                            <iframe class="w-full h-96 rounded-lg shadow-lg" :src="m.src" frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                    </div>

                    <!-- Prev Button -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        ◀
                    </button>

                    <!-- Next Button -->
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        ▶
                    </button>

                    <!-- Fullscreen Button -->
                    <button @click="toggleFullscreen"
                        class="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                        ⛶ Fullscreen
                    </button>
                </div>
            </div>

            <!-- Content -->
            <p class="text-gray-400 text-sm">{{ newsItem.date }}</p>
            <h1 class="text-3xl font-bold text-gray-900 mt-2">{{ newsItem.title }}</h1>
            <p class="text-gray-700 mt-4 leading-relaxed">{{ newsItem.description }}</p>
        </div>

        <div v-else>
            <p class="text-center text-gray-500">News article not found.</p>
        </div>

        <!-- Fullscreen Overlay -->
        <div v-if="isFullscreen" class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
            <div class="relative w-full h-full flex items-center justify-center">
                <div v-for="(m, i) in newsItem.media" :key="i" v-show="i === currentIndex"
                    class="w-full h-full flex justify-center items-center">
                    <!-- Image -->
                    <img v-if="m.type === 'image'" :src="m.src" alt="fullscreen media"
                        class="max-h-full max-w-full object-contain" />

                    <!-- Video -->
                    <iframe v-else-if="m.type === 'video'" :src="m.src" class="w-4/5 h-4/5 rounded-lg shadow-lg"
                        frameborder="0" allowfullscreen></iframe>
                </div>

                <!-- Controls -->
                <button @click="prevSlide"
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">◀</button>
                <button @click="nextSlide"
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">▶</button>
                <button @click="toggleFullscreen"
                    class="absolute bottom-4 right-4 bg-red-600 text-white btn btn-sm shadow">✕ Close</button>
            </div>
        </div>
    </div>
</template>
