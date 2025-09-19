<script setup>
defineProps({
    title: { type: String, required: true },
    icon: { type: String, required: false }
});
</script>

<template>
    <div v-fade-slide-up="200" class="bg-white border border-gray-300 rounded-lg flex relative">
        <div class="h-1 w-full bg-red-500 absolute top-0 left-0 rounded-t-lg"></div>

        <!-- Card content -->
        <div class="p-6 flex flex-row items-start gap-4">
            <!-- Optional Icon -->
            <div v-if="icon" class="flex-shrink-0">
                <img :src="icon" alt="" class="w-16 h-16 object-contain" />
            </div>

            <!-- Text content -->
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>

                <!-- Default slot for description/custom content -->
                <div class="text-gray-600 text-sm sm:text-base">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
