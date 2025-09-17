<script setup>
const props = defineProps({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, default: "#" },
    image: { type: String, default: null }
});
</script>

<template>
    <div v-fade-slide-up="100"
        class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition flex flex-col">
        <!-- Image -->
        <img v-if="image" :src="image" alt="news image" class="w-full h-48 object-cover rounded-lg mb-4" />

        <!-- Date -->
        <p class="text-xs text-gray-400">{{ date }}</p>

        <!-- Title -->
        <h3 class="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">
            {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm mt-2 line-clamp-3">
            {{ description }}
        </p>

        <!-- Link -->
        <a :href="link" class="text-blue-600 mt-3 text-sm font-medium hover:underline self-start">
            Read more →
        </a>
    </div>
</template>
