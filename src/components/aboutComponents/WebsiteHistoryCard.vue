<script setup>
const props = defineProps({
    src: { type: String, required: true },
    year: { type: String, required: false, default: null },
    description: { type: String, required: false, default: null }
});
</script>

<template>
    <div
        class="bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col items-center justify-center p-4 transition hover:shadow-md aspect-square">

        <!-- Logo -->
        <img :src="src" alt="Logo" class="object-contain w-full" />

        <!-- Year -->
        <p v-if="year" class="mt-2 text-sm font-semibold text-gray-700">
            {{ year }}
        </p>

        <!-- Description -->
        <p v-if="description" class="mt-1 text-xs text-gray-500 text-center">
            {{ description }}
        </p>
    </div>
</template>
