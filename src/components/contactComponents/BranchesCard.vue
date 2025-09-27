<script setup>
// Heroicons
import { MapPinIcon } from '@heroicons/vue/24/outline';

const branchNames = [
    { branch: "Artesia, California" },
    { branch: "Canada" },
    { branch: "Chicago" },
    { branch: "LA, California" },
    { branch: "Indiana" },
    { branch: "New York/New Jersey" },
    { branch: "Seattle" },
    { branch: "Texas" },
    { branch: "Virginia" },
];
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(branch, index) in branchNames" :key="index"
            class="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
            <!-- Highlight bar -->
            <div class="w-1 bg-blue-600 h-full"></div>

            <!-- Content -->
            <div class="flex items-center gap-3 p-4">
                <MapPinIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span class="text-gray-800 font-medium">{{ branch.branch }}</span>
            </div>
        </div>
    </div>
</template>
