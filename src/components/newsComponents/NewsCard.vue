<script setup>
defineProps({
    news: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div v-fade-slide-up="100"
        class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition flex flex-col">

        <!-- Media Preview -->
        <div v-if="news.media && news.media.length" class="mb-4">
            <!-- Image -->
            <img v-if="news.media[0].type === 'image'" :src="news.media[0].src" alt="news image"
                class="w-full h-72 object-cover rounded-lg" />

            <!-- Video -->
            <div v-else-if="news.media[0].type === 'video'" class="aspect-w-16 aspect-h-9">
                <iframe class="w-full h-72 rounded-lg" :src="news.media[0].src" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>

        <!-- Content -->
        <p class="text-xs text-gray-400">{{ news.date }}</p>
        <h3 class="text-lg font-semibold text-gray-900 mt-1 truncate">{{ news.title }}</h3>
        <p class="text-gray-600 text-sm mt-2 line-clamp-3">{{ news.description }}</p>

        <router-link :to="`/news/${news.id}`" class="text-blue-600 mt-3 text-sm font-medium hover:underline self-start">
            Read more →
        </router-link>
    </div>
</template>
