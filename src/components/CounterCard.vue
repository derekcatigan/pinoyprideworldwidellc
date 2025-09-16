<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
    label: { type: String, required: true },
    target: { type: Number, required: true },
    duration: { type: Number, default: 2000 },
    bgColor: { type: String, default: "bg-white" },
    numColor: { type: String, default: "text-blue-800" },
    labelColor: { type: String, default: "text-gray-600" }
});

const current = ref(0);
const el = ref(null);
let rafId = null;
let observer = null;

function startCounting() {
    const start = 0;
    const end = Math.max(0, props.target);
    const duration = Math.max(50, props.duration);
    const startTime = performance.now();

    const step = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        current.value = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
            rafId = requestAnimationFrame(step);
        } else {
            current.value = end;
            rafId = null;
        }
    };

    if (!rafId) rafId = requestAnimationFrame(step);
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounting();
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    if (el.value) observer.observe(el.value);
});

onBeforeUnmount(() => {
    if (observer && el.value) observer.unobserve(el.value);
    if (rafId) cancelAnimationFrame(rafId);
});

const formatted = computed(() => current.value.toLocaleString());
</script>

<template>
    <div ref="el" :class="`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
            p-6 sm:p-8 shadow-lg rounded-md flex flex-col items-center ${props.bgColor}`">
        <!-- Number -->
        <p :class="`text-2xl sm:text-3xl md:text-4xl font-bold ${props.numColor}`">
            {{ formatted }}
        </p>

        <!-- Label + Icon -->
        <p :class="`mt-2 text-xs sm:text-base md:text-sm font-medium flex items-center gap-2 ${props.labelColor}`">
            <slot name="icon" />
            {{ label }}
        </p>
    </div>

</template>
