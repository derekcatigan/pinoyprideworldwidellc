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
        title: 'Returning Resident Container Delivery',
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
    <div class="mt-10 space-y-12">
        <!-- Loop through each section -->
        <section v-for="(section, sIndex) in stepSections" :key="sIndex">
            <h3 class="font-semibold text-2xl text-center mb-6">
                {{ section.title }}
            </h3>

            <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                <article v-for="(step, index) in section.steps" :key="step.title" v-fade-slide-up="100 * (index + 1)"
                    class="flex flex-col items-center text-center max-w-xs">
                    <div class="w-28 h-28 rounded-full bg-blue-100 flex justify-center items-center">
                        <component :is="step.isImage ? 'img' : step.icon" :src="step.isImage ? step.icon : undefined"
                            alt="" class="size-14 shrink-0" />
                    </div>
                    <h4 class="mt-4 font-semibold text-lg">{{ step.title }}</h4>
                    <p class="text-sm text-gray-600">{{ step.text }}</p>
                </article>
            </div>
        </section>
    </div>
</template>
