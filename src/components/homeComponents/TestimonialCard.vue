<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
// Data
import { testimonialData } from '@/data/testimonialData.js';

// Testimonials Data
const testimonials = ref(testimonialData);

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
    }, 5000);
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
                class="flex-shrink-0 w-full flex justify-center gap-4 px-2 items-stretch">
                <div v-for="(testimonial, i) in group" :key="i"
                    class="w-full max-w-sm sm:max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col justify-between items-center text-center h-full">

                    <div class="flex flex-col items-center">
                        <img v-if="testimonial.avatar" :src="testimonial.avatar" alt="Customer photo"
                            class="w-16 h-16 rounded-full mb-4 object-cover" />
                        <p class="text-gray-700 text-sm sm:text-base italic">
                            "{{ testimonial.message }}"
                        </p>
                    </div>

                    <div class="mt-4">
                        <p class="font-semibold">{{ testimonial.name }}</p>
                        <p v-if="testimonial.location" class="text-gray-500 text-sm mt-1">
                            <span v-for="(loc, idx) in testimonial.location.split(';')" :key="idx" class="block">
                                📍 {{ loc.trim() }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-6 gap-2">
            <button v-for="(dot, i) in slides.length" :key="i" @click="currentSlide = i"
                class="w-3 h-3 rounded-full transition" :class="currentSlide === i ? 'bg-gray-800' : 'bg-gray-400'" />
        </div>
    </div>
</template>
