<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

// Slides
import CargoShipStockImage from "@/assets/images/stockImages/CargoShipImageV7.png";
import StockImage2 from "@/assets/images/stockImages/StockImage02.png";
import StockImage3 from "@/assets/images/stockImages/StockImage03.png";

const slides = [
    { image: CargoShipStockImage, isMain: true },
    { image: StockImage3, isMain: false },
    { image: StockImage2, isMain: false },
];

// State
const currentSlide = ref(0);
let slideTimeout;

// Phrase rotation
const phrases = ["Shipping", "Packing", "Moving Home"];
const currentIndex = ref(0);
const currentPhrase = ref(phrases[0]);
let phraseInterval;

// Start auto-slide
function scheduleNextSlide() {
    clearTimeout(slideTimeout);
    const delay = currentSlide.value === 0 ? 10000 : 5000;
    slideTimeout = setTimeout(nextSlide, delay);
}

// Navigation
function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
}
function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
}

// Watch for slide changes
watch(currentSlide, scheduleNextSlide);

onMounted(() => {
    scheduleNextSlide();

    // rotate phrases every 2s
    phraseInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % phrases.length;
        currentPhrase.value = phrases[currentIndex.value];
    }, 2000);
});

onBeforeUnmount(() => {
    clearTimeout(slideTimeout);
    clearInterval(phraseInterval);
});
</script>

<template>
    <section class="relative w-full overflow-hidden bg-white py-10 px-6 md:px-12">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

            <!-- LEFT TEXT SECTION -->
            <div class="space-y-4">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex flex-wrap items-center gap-2">
                    <span class="relative inline-block">
                        <span class="relative z-10">Your Partner in</span>
                        <span class="absolute inset-x-0 bottom-1 h-3 bg-yellow-200 z-0"></span>
                    </span>
                    <transition name="slide-up" mode="out-in">
                        <span :key="currentPhrase" class="text-yellow-500">
                            {{ currentPhrase }}
                        </span>
                    </transition>
                </h2>

                <p class="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                    Your best choice for sending balikbayan boxes, household goods, furniture, cars,
                    speedboats, and more —
                    <span class="text-yellow-500 font-semibold uppercase">all in one shipping container</span>
                    to any destination in the Philippines!
                </p>
            </div>

            <!-- RIGHT CAROUSEL -->
            <div class="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <div class="carousel-h overflow-hidden rounded-2xl">
                    <div v-for="(slide, index) in slides" :key="index"
                        class="absolute inset-0 transition-opacity duration-700"
                        :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
                        <img :src="slide.image" alt="Slide" class="w-full h-full object-cover" />
                    </div>
                </div>

                <!-- Controls -->
                <button @click="prevSlide"
                    class="absolute top-1/2 left-3 -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition">
                    <ChevronLeftIcon class="size-5 shrink-0" />
                </button>

                <button @click="nextSlide"
                    class="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition">
                    <ChevronRightIcon class="size-5 shrink-0" />
                </button>

            </div>
        </div>
    </section>
</template>


<style scoped>
.carousel-h {
    height: 250px;
}

@media (min-width: 640px) {
    .carousel-h {
        height: 400px;
    }
}

@media (min-width: 768px) {
    .carousel-h {
        height: 500px;
    }
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(100%);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
</style>
