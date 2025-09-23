<script setup>
import { newsList } from '@/data/newsData.js'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import NewsCard from '@/components/newsComponents/NewsCard.vue'

// Get the first pinned news (or pick which one you want to display)
const pinnedNews = computed(() => newsList.find(n => n.pinned))

// Track current media index
const currentMediaIndex = ref(0)

// Timer for auto-slideshow
let timer = null
onMounted(() => {
    if (pinnedNews.value?.media?.length > 1) {
        timer = setInterval(() => {
            currentMediaIndex.value =
                (currentMediaIndex.value + 1) % pinnedNews.value.media.length
        }, 3000)
    }
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})

// Current media
const currentMedia = computed(() =>
    pinnedNews.value?.media?.[currentMediaIndex.value]
)

// Other News
const otherNews = computed(() => {
    return newsList
        .filter(n => !n.pinned && n.date)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-5">
            <!-- 🔹 Main Section Heading -->
            <div class="text-center mb-14">
                <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    News & Updates
                </h2>
                <!-- Highlight line -->
                <div class="mt-4 flex justify-center">
                    <span class="block w-24 h-1 bg-blue-600 rounded-full"></span>
                </div>
                <p class="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
                    Stay up to date with the latest announcements, schedules, and updates from Pinoy Pride.
                </p>
            </div>


            <!-- 🔹 Pinned News Section -->
            <div v-if="pinnedNews" class="mb-16">
                <h3 class="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                    📌 Pinned News
                </h3>

                <!-- Slideshow Container -->
                <div class="bg-white rounded-xl border shadow-lg overflow-hidden relative">
                    <transition name="fade" mode="out-in">
                        <div :key="currentMediaIndex">
                            <!-- Image -->
                            <img v-if="currentMedia?.type === 'image'" :src="currentMedia.src" alt="Pinned news image"
                                class="w-full h-96 object-contain bg-black" />

                            <!-- Video -->
                            <div v-else-if="currentMedia?.type === 'video'" class="aspect-w-16 aspect-h-9 bg-black">
                                <iframe class="w-full h-96 shadow" :src="currentMedia.src" frameborder="0"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </transition>

                    <!-- Text Content -->
                    <div class="p-6">
                        <p class="text-gray-400 text-sm">{{ pinnedNews?.date }}</p>
                        <h1 class="text-3xl font-bold text-gray-900 mt-2">{{ pinnedNews?.title }}</h1>
                        <p class="text-gray-700 mt-4 leading-relaxed">{{ pinnedNews?.description }}</p>
                        <router-link :to="`/news/${pinnedNews?.id}`"
                            class="inline-block mt-5 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                            Read more →
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- 🔹 Other News Grid -->
            <div>
                <h3 class="text-2xl font-semibold text-gray-800 mb-8">📰 All News</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="(news, index) in otherNews" :key="index">
                        <!-- Reuse card structure -->
                        <NewsCard :news="news" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
