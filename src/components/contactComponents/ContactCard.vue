<script setup>
import { PhoneIcon, EnvelopeIcon, UserIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    branchName: { type: String, required: false, default: null },
    contacts: { type: Array, required: true },
    mapSrc: { type: String, required: false, default: null },
    notice: { type: String, required: false, default: null }
});
</script>

<template>
    <div
        class="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition relative">

        <!-- Map Section -->
        <div v-if="mapSrc" class="md:w-1/3 w-full flex flex-col">
            <div class="aspect-[4/3] w-full">
                <iframe :src="mapSrc" class="w-full h-full border-0 md:rounded-l-lg" allowfullscreen loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <!-- Info Section -->
        <div class="md:w-full w-full p-6 flex flex-col gap-4">
            <!-- Notice under map -->
            <p v-if="notice"
                class="text-sm md:text-base text-yellow-700 bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded-md m-2">
                {{ notice }}
            </p>

            <!-- Branch Name -->
            <h3 v-if="branchName" class="text-xl md:text-2xl font-bold text-gray-900">
                {{ branchName }}
            </h3>

            <!-- Contacts -->
            <div v-for="(person, index) in contacts" :key="index"
                class="border border-gray-200 rounded-md p-4 bg-gray-50 shadow-sm">
                <!-- Name + Title -->
                <div class="flex items-center gap-2 mb-1">
                    <UserIcon class="w-5 h-5 text-gray-600 shrink-0" />
                    <p class="text-gray-800 font-semibold text-sm">{{ person.name }}</p>
                </div>
                <p class="text-gray-600 ml-7 text-xs">{{ person.title }}</p>
                <p class="text-gray-600 ml-7 text-sm">{{ person.store }}</p>

                <!-- Phone -->
                <div class="flex items-center gap-2 mt-2">
                    <PhoneIcon class="w-5 h-5 text-gray-600 shrink-0" />
                    <p class="text-gray-600 text-sm">{{ person.phone }}</p>
                </div>

                <!-- Email (only if exists) -->
                <div v-if="person.email" class="flex items-center gap-2 mt-1">
                    <EnvelopeIcon class="w-5 h-5 text-gray-600 shrink-0" />
                    <p class="text-sm text-gray-600 break-all">
                        {{ person.email }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Highlight Line -->
        <div class="absolute bg-yellow-500 top-0 left-0 w-full h-1 md:w-1 md:h-full md:right-0 md:left-auto">
        </div>
    </div>
</template>
