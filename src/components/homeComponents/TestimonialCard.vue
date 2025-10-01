<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
// Data
import { testimonialData } from '@/data/testimonialData.js';


// Testimonials Data
const testimonials = ref(testimonialData);

// Get initials helper
function getInitials(name) {
    if (!name) return ''
    return name
        .split(' ')
        .map(n => n[0].toUpperCase())
        .slice(0, 2)
        .join('')
}

// Track window width
const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

// Group testimonials (1 per slide on mobile, 2 on md+)
const slides = computed(() => {
    const chunkSize = windowWidth.value < 768 ? 1 : 2;
    const result = [];
    for (let i = 0; i < testimonials.value.length; i += chunkSize) {
        result.push(testimonials.value.slice(i, i + chunkSize));
    }
    return result;
});

// Carousel state
const currentSlide = ref(0);
let intervalId = null;

onMounted(() => {
    window.addEventListener("resize", updateWidth);

    intervalId = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    }, 10000);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWidth);
    clearInterval(intervalId);
});
</script>

<template>
    <div class="overflow-hidden w-full relative">
        <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(group, index) in slides" :key="index"
                class="flex-shrink-0 w-full flex justify-center gap-6 px-2 items-stretch">
                <div v-for="(testimonial, i) in group" :key="i"
                    class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition flex flex-col h-auto">
                    <!-- Header -->
                    <div class="flex items-center gap-3 mb-2">
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base shadow-md">
                            {{ getInitials(testimonial.name) }}
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm sm:text-base">
                                {{ testimonial.name }}
                            </p>
                            <p v-if="testimonial.location" class="text-gray-500 text-xs leading-tight">
                                <span v-for="(loc, idx) in testimonial.location.split(';')" :key="idx" class="block">
                                    📍 {{ loc.trim() }}
                                </span>
                            </p>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="flex-1 flex items-center">
                        <p class="text-gray-700 text-sm sm:text-base italic leading-relaxed text-left">
                            "{{ testimonial.message }}"
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center mt-6 gap-2">
            <button v-for="(dot, i) in slides.length" :key="i" @click="currentSlide = i"
                class="w-3 h-3 rounded-full transition" :class="currentSlide === i ? 'bg-gray-800' : 'bg-gray-400'" />
        </div>
    </div>
</template>
