<script setup>
import {
    PhoneArrowDownLeftIcon,
    DocumentCheckIcon,
    HomeModernIcon,
    CurrencyDollarIcon,
    CubeIcon,
    ShieldCheckIcon,
} from '@heroicons/vue/24/outline'
import DeliveryManIcon from '@/assets/logos/DeliveryManIcon.png'

const stepSections = [
    {
        title: 'Balikbayan Box Delivery',
        steps: [
            {
                title: 'Step 1',
                text: 'Request a box pickup online or call us to schedule your pickup.',
                icon: PhoneArrowDownLeftIcon,
                isImage: false,
            },
            {
                title: 'Step 2',
                text: 'We load your boxes into the container and ship them to the Philippines',
                icon: DeliveryManIcon,
                isImage: true,
            },
            {
                title: 'Step 3',
                text: "We process and pay all Philippine port charges to secure customs clearance.",
                icon: DocumentCheckIcon,
                isImage: false,
            },
            {
                title: 'Step 4',
                text: "We deliver your boxes to your address anywhere in the Philippines",
                icon: HomeModernIcon,
                isImage: false,
            },
        ],
    },
    {
        title: 'Returning Resident/Single Consignee Container Delivery',
        steps: [
            {
                title: 'Step 1',
                text: 'Call us to request a quotation for a container loaded with your used household goods (including a car, if any).',
                icon: CurrencyDollarIcon,
                isImage: false,
            },
            {
                title: 'Step 2',
                text: 'We deliver the container to your home, load your items into it, and ship it to the Philippines.',
                icon: CubeIcon,
                isImage: false,
            },
            {
                title: 'Step 3',
                text: 'We process and pay all Philippine port charges to secure customs clearance.',
                icon: ShieldCheckIcon,
                isImage: false,
            },
            {
                title: 'Step 4',
                text: 'We deliver your container to your address anywhere in the Philippines.',
                icon: HomeModernIcon,
                isImage: false,
            },
        ],
    },
]
</script>

<template>
    <div class="mt-10 space-y-16">
        <!-- Loop through each section -->
        <section v-for="(section, sIndex) in stepSections" :key="sIndex" class="text-center">
            <!-- Section Title -->
            <h3 class="font-bold text-3xl text-white mb-10 tracking-tight">
                {{ section.title }}
            </h3>

            <!-- Steps Grid -->
            <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                <article v-for="(step, index) in section.steps" :key="step.title" v-fade-slide-up="100 * (index + 1)"
                    class="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300">
                    <!-- Step Icon -->
                    <div
                        class="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex justify-center items-center shadow-lg">
                        <component :is="step.isImage ? 'img' : step.icon" :src="step.isImage ? step.icon : undefined"
                            alt="" class="size-12" />
                    </div>

                    <!-- Step Title -->
                    <h4 class="mt-6 font-semibold text-xl text-white">
                        {{ step.title }}
                    </h4>

                    <!-- Step Text -->
                    <p class="mt-2 text-sm text-blue-200 leading-relaxed">
                        {{ step.text }}
                    </p>
                </article>
            </div>
        </section>
    </div>
</template>
