<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
    images: { type: Array, required: true }
})

const current = ref(0)
let intervalId = null

function next() {
    current.value = (current.value + 1) % props.images.length
}
function prev() {
    current.value =
        (current.value - 1 + props.images.length) % props.images.length
}

onMounted(() => {
    intervalId = setInterval(next, 5000)
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div class="relative w-full max-w-3xl mx-auto">
        <!-- Image -->
        <img :src="images[current]" class="w-full h-[500px] object-contain rounded-lg shadow-md bg-black" />

        <!-- Controls -->
        <button
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            @click="prev">
            ◀
        </button>
        <button
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            @click="next">
            ▶
        </button>

        <!-- Indicators -->
        <div class="flex justify-center mt-3 gap-2">
            <span v-for="(img, i) in images" :key="i" class="w-3 h-3 rounded-full"
                :class="i === current ? 'bg-blue-600' : 'bg-gray-300'" />
        </div>
    </div>
</template>
