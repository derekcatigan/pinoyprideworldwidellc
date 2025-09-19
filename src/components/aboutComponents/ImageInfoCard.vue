<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    images: { type: Array, required: true },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    logo: { type: String, default: null },
    interval: { type: Number, default: 3000 },
    logoSize: { type: String, default: "w-28 h-28" },
});

const currentIndex = ref(0);
let timer = null;

onMounted(() => {
    timer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length;
    }, props.interval);
});

onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
});
</script>

<template>
    <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Slideshow -->
        <div class="w-full md:w-1/2 relative h-64 md:h-auto">
            <transition name="fade" mode="out-in">
                <img :key="currentIndex" :src="props.images[currentIndex]"
                    class="absolute inset-0 w-full h-full object-cover md:object-contain bg-gray-100"
                    alt="slideshow image" />
            </transition>
        </div>

        <!-- Info Section -->
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
            <!-- Logo & Title -->
            <div class="flex flex-col gap-3 mb-4"
                :class="props.title ? 'items-center md:items-start' : 'items-center justify-center'">
                <img v-if="props.logo" :src="props.logo" alt="logo" :class="`${props.logoSize} object-contain`" />

                <h2 v-if="props.title" class="text-2xl md:text-3xl font-bold text-gray-800">
                    {{ props.title }}
                </h2>
            </div>

            <!-- Description -->
            <p class="text-gray-600 whitespace-pre-wrap text-justify leading-relaxed max-w-prose mx-auto md:mx-0 ">
                {{ props.description }}
            </p>

            <!-- Slot -->
            <div class="mt-4 whitespace-pre-wrap text-justify">
                <slot />
            </div>
        </div>
    </div>
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
