<script setup>
import PinoyPrideLogo from '@/assets/logos/PinoyPrideLogo.png';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

const year = new Date().getFullYear();
</script>

<template>
    <!-- Top Footer -->
    <footer class="p-6 sm:p-10 bg-gray-900 text-white">
        <!-- Wrapper grid -->
        <div class="grid gap-8 sm:gap-10 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">

            <!-- Services -->
            <nav>
                <h6 class="text-lg font-semibold mb-3">Services</h6>
                <RouterLink to="/" class="block hover:underline">Branding</RouterLink>
                <RouterLink to="/" class="block hover:underline">Design</RouterLink>
                <RouterLink to="/" class="block hover:underline">Marketing</RouterLink>
                <RouterLink to="/" class="block hover:underline">Advertisement</RouterLink>
            </nav>

            <!-- Company -->
            <nav>
                <h6 class="text-lg font-semibold mb-3">Company</h6>
                <RouterLink to="/" class="block hover:underline">Home</RouterLink>
                <RouterLink to="/" class="block hover:underline">About Us</RouterLink>
                <RouterLink to="/" class="block hover:underline">Track</RouterLink>
                <RouterLink to="/" class="block hover:underline">Contact</RouterLink>
                <RouterLink to="/" class="block hover:underline">Careers</RouterLink>
            </nav>

            <!-- Legal -->
            <nav>
                <h6 class="text-lg font-semibold mb-3">Legal</h6>
                <RouterLink to="/" class="block hover:underline">Terms of use</RouterLink>
                <RouterLink to="/" class="block hover:underline">Privacy policy</RouterLink>
                <RouterLink to="/" class="block hover:underline">Cookie policy</RouterLink>
            </nav>

            <!-- Address -->
            <nav>
                <h6 class="text-lg font-semibold mb-3">Address</h6>
                <div class="space-y-3 text-sm">
                    <span class="flex items-start gap-3">
                        <MapPinIcon class="w-5 h-5 shrink-0 mt-0.5" />
                        19443 SE 266th Street, COVINGTON, WA, 98042 USA
                    </span>
                    <span class="flex items-center gap-3">
                        <PhoneIcon class="w-5 h-5 shrink-0" />
                        +01 253 282-9628
                    </span>
                    <span class="flex items-center gap-3">
                        <EnvelopeIcon class="w-5 h-5 shrink-0" />
                        pinoyprideworldwide@gmail.com
                    </span>
                </div>
            </nav>
        </div>
    </footer>

    <!-- Bottom Footer -->
    <footer class="bg-base-200 text-base-content border-base-300 border-t px-6 sm:px-10 py-4">
        <aside class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <!-- Logo + Text -->
            <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <img :src="PinoyPrideLogo" alt="Pinoy Pride Worldwide Logo"
                    class="w-20 sm:w-24 h-auto object-contain" />
                <p class="text-sm sm:text-base">
                    Pinoy Pride Worldwide LLC.
                    <br class="hidden sm:block" />
                    &copy; {{ year }} All rights reserved.
                </p>
            </div>
        </aside>
    </footer>
</template>
