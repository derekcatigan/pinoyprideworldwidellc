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
    <div v-fade-slide-up="100" class="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col">
        <img v-if="image" :src="image" alt="news image" class="w-full h-56 object-cover rounded mb-3">

        <p class="text-sm text-gray-400">{{ date }}</p>
        <h3 class="text-lg font-semibold mt-1">{{ title }}</h3>
        <p class="text-gray-600 mt-2">{{ description }}</p>
        <a :href="link" class="text-blue-600 mt-2 inline-block hover:underline">Read more</a>
    </div>
</template>
