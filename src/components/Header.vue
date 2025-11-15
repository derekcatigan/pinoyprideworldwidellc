<script setup>
import { useRoute } from "vue-router";
import PinoyPrideLogo from "@/assets/logos/PinoyPrideLogo.png";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const navLinks = [
    { to: "/", name: "Home" },
    { to: "/about-us", name: "About Us" },
    { to: "/news", name: "News" },
    { to: "/track", name: "Tracking" },
    { to: "/contact", name: "Contact" },
    {
        name: "Services",
        children: [
            { to: "/services/balikbayan-box", name: "Balikbayan Box Shipment" },
            { to: "/services/vehicle", name: "Vehicle Shipment" },
            { to: "/services/commercial-shipment", name: "Commercial Shipment" },
            { to: "/services/worldwide-business", name: "Worldwide Business" },
            { to: "/services/online-shopping", name: "Online Shopping" },
            { to: "/services/household-goods", name: "Household Goods Shipment" },
            { to: "/services/donation-to-foundation", name: "Donation to Foundation" },
            { to: "/services/prohibited-items", name: "Prohibited Items" },
            { to: "/services/other-services", name: "Other Services" },
        ],
    },
    {
        to: "/careers",
        name: "Careers",
        children: [
            { to: "/careers/be-our-partners", name: "Be our Partner" },
            { to: "/careers/be-our-agent", name: "Be our Agent" },
        ],
    },
    { to: "/faq", name: "FAQs" },
];

const route = useRoute();
</script>

<template>
    <header class="border-b border-b-gray-300 h-[80px] sticky top-0 z-[9999] bg-white shadow-md">
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
                                <template v-if="link.children">
                                    <div class="dropdown dropdown-center">
                                        <button tabindex="0" class="flex items-center gap-1"
                                            :class="{ active: route.path.startsWith(link.to) }">
                                            {{ link.name }}
                                            <span class="text-xs">
                                                <ChevronDownIcon class="size-4" />
                                            </span>
                                        </button>

                                        <!-- Dropdown menu -->
                                        <ul tabindex="0"
                                            class="dropdown-content menu bg-base-100 border border-gray-300 rounded-box z-[1] w-64 p-2 shadow">
                                            <li v-for="child in link.children" :key="child.name">
                                                <RouterLink :to="child.to" :class="{ active: route.path === child.to }">
                                                    {{ child.name }}
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </div>
                                </template>

                                <!-- Regular link -->
                                <template v-else>
                                    <RouterLink :to="link.to" :class="{ active: route.name === link.name }">
                                        {{ link.name }}
                                    </RouterLink>
                                </template>
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
                        <!-- If link has children -->
                        <template v-if="link.children">
                            <details>
                                <summary class="cursor-pointer font-medium">
                                    {{ link.name }}
                                </summary>
                                <ul class="pl-4">
                                    <li v-for="child in link.children" :key="child.name">
                                        <RouterLink :to="child.to" :class="{ active: route.name === child.name }">
                                            {{ child.name }}
                                        </RouterLink>
                                    </li>
                                </ul>
                            </details>
                        </template>

                        <!-- Regular link -->
                        <template v-else>
                            <RouterLink :to="link.to" :class="{ active: route.name === link.name }">
                                {{ link.name }}
                            </RouterLink>
                        </template>
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
