<script setup>
import { useRoute } from "vue-router";
import PinoyPrideLogo from "@/assets/logos/PinoyPrideLogo.png";

const navLinks = [
    { to: "/", name: "Home" },
    { to: "/about-us", name: "About" },
    { to: "/news", name: "News" },
    { to: "/track", name: "Track" },
    { to: "/contact", name: "Contact" },
    { to: "/careers", name: "Careers" },
];

const route = useRoute();
</script>

<template>
    <header class="border-b border-b-gray-300 h-[80px] sticky z-[9999] shadow-md">
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <!-- Navbar -->
                <div class="flex items-center justify-between h-[80px] px-4">
                    <!-- Mobile Menu Button -->
                    <div class="lg:hidden">
                        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-6 w-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>

                    <!-- Logo -->
                    <RouterLink to="/" class="flex items-center mt-2">
                        <img :src="PinoyPrideLogo" alt="Pinoy Pride Logo" class="w-20 h-20 object-contain" />
                    </RouterLink>

                    <!-- Desktop Menu -->
                    <nav class="hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li v-for="link in navLinks" :key="link.name">
                                <RouterLink :to="link.to" :class="{ active: route.name === link.name }">
                                    {{ link.name }}
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Drawer Sidebar -->
            <div class="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 min-h-full w-80 p-4">
                    <li v-for="link in navLinks" :key="link.name">
                        <RouterLink :to="link.to" :class="{ active: route.name === link.name }">
                            {{ link.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.active {
    color: #0000ff;
    font-weight: 600;
}
</style>
