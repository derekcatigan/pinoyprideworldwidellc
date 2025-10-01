<script setup>
import { ref } from "vue"

const props = defineProps({
    videos: { type: Array, required: true }
})

const current = ref(0)

function next() {
    current.value = (current.value + 1) % props.videos.length
}
function prev() {
    current.value = (current.value - 1 + props.videos.length) % props.videos.length
}
</script>

<template>
    <div class="relative w-full max-w-3xl mx-auto">
        <!-- Main Video -->
        <video :src="videos[current]" controls
            class="w-full h-[500px] object-contain rounded-lg shadow-md bg-black"></video>

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

        <!-- Video Preview Indicators -->
        <div class="flex justify-center mt-4 gap-3 flex-wrap">
            <div v-for="(vid, i) in videos" :key="i" class="cursor-pointer border-2 rounded-md overflow-hidden"
                :class="i === current ? 'border-blue-600' : 'border-gray-300'" @click="current = i">
                <video :src="vid" muted loop playsinline class="w-24 h-16 object-cover"></video>
            </div>
        </div>
    </div>
</template>
