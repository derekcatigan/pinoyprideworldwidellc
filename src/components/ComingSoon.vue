<script setup>
const props = defineProps({
    page: { type: String, required: true }
})
</script>

<template>
    <section class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <!-- Page Name -->
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800">
            {{ page }}
        </h1>

        <!-- Subtext -->
        <p class="mt-4 text-lg sm:text-xl text-gray-600">
            🚧 Coming Soon – This page is under development.
        </p>
    </section>
</template>
