<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

// Slides
import CargoShipStockImage from "@/assets/images/stockImages/CargoShip.png";
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
    <div class="relative w-full overflow-hidden">
        <!-- Slides wrapper -->
        <div class="carousel-h overflow-hidden rounded-none">
            <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 transition-opacity duration-700"
                :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
                <!-- Background blur -->
                <img :src="slide.image" alt="" class="absolute inset-0 w-full h-full object-cover blur-xs scale-110" />
                <!-- Main image -->
                <img :src="slide.image" alt="Slide" class="relative w-full h-full object-cover scale-95" />

                <!-- Overlay + Text (only main slide) -->
                <template v-if="slide.isMain">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-transparent" />
                    <div class="absolute inset-6 sm:inset-12 md:inset-20 flex items-center p-3 sm:p-4 md:p-6">
                        <div class="flex-col">
                            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white flex gap-2">
                                Your Partner in
                                <transition name="slide-up" mode="out-in">
                                    <span :key="currentPhrase" class="text-yellow-300">
                                        {{ currentPhrase }}
                                    </span>
                                </transition>
                            </h2>
                            <p class="text-xs sm:text-sm md:text-base text-white max-w-xs sm:max-w-md md:max-w-lg mt-2">
                                The best place to send Your Balikbayan Boxes and Move your
                                Household Goods (by Container) Anywhere in the US and Philippines!
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <!-- Controls -->
        <button @click="prevSlide"
            class="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
            <ChevronLeftIcon class="size-5 shrink-0" />
        </button>
        <button @click="nextSlide"
            class="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
            <ChevronRightIcon class="size-5 shrink-0" />
        </button>
    </div>
</template>

<style scoped>
.carousel-h {
    height: 200px;
}

@media (min-width: 640px) {
    .carousel-h {
        height: 400px;
    }
}

@media (min-width: 768px) {
    .carousel-h {
        height: 550px;
    }
}

/* Phrase slide-up animation */
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
