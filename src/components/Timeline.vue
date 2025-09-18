<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import Image01 from "@/assets/images/Image01.jpg";
import Image02 from "@/assets/images/Image02.jpg";
import Image03 from "@/assets/images/Image03.png";
import Image04 from "@/assets/images/Image04.jpg";
import Image05 from "@/assets/images/Image05.jpg";
import Image06 from "@/assets/images/Image06.jpeg";
import Image07 from "@/assets/images/Image07.jpg";
import Image08 from "@/assets/images/Image08.jpg";
import Image09 from "@/assets/images/Image09.jpg";
import Image10 from "@/assets/images/Image10.jpg";
import Image11 from "@/assets/images/Image11.jpg";
import Image12 from "@/assets/images/Image12.jpg";
import Image13 from "@/assets/images/Image13.jpg";
import Image14 from "@/assets/images/Image14.png";
import Image15 from "@/assets/images/Image15.png";
import Image16 from "@/assets/images/Image16.jpg";

// Timeline data
const timelineItems = ref([
    {
        time: "May 2017 - July 2018",
        title: "Star Kargo Freight Forwarding Company (ABS-CBN)",
        description: `
      In May 2017, Edgar joined one of the Filipino prestige Cargo movers and worked 
      as an Independent Contractor managing consolidation of Balikbayan boxes and 
      shipments to the Philippines. During his stint, he took the first step to get 
      his own license under the name of PINOY TRADERS, LLC and simultaneously do 
      business as (DBA).

      Star Kargo gave Edgar the opportunity to learn the ropes of cargo forwarding 
      and logistics — from preparing manifests, billing, and booking services to 
      handling customer service and liaising with logistics companies. Unfortunately, 
      the company closed in July 2018.
    `,
        images: [Image01, Image02, Image03, Image04],
    },
    {
        time: "August 2018 - October 2019",
        title: "CARGO PLUS INC.",
        description: `
      Edgar joined venture with this company in August 2018. His role and responsibilities 
      were almost the same as his previous employer (Star Kargo). He handled manifests, 
      billing, booking, customer service, and liaising with logistics companies. Again, 
      PINOY TRADERS LLC license was used to transact as DBA.

      In October 2019, the company was hit by financial crisis and went out of business.
    `,
        images: [Image05, Image06, Image07, Image08],
    },
    {
        time: "January 2020 - June 2021",
        title: "INTERNATIONAL PACKAGE SHIPPING (IPS)",
        description: `
      On April 15, 2020, Edgar hired the services of International Package Shipping (IPS) 
      as Forwarder. Business license was under PINOY PRIDE LLC. On January 21, 2022, Edgar 
      amended his license to PINOY PRIDE WORLDWIDE, LLC.

      The relationship with IPS lasted 2 years and 5 months before Pinoy Pride Worldwide LLC 
      opted to search for its own Trusted Forwarder and Logistic.
    `,
        images: [Image09, Image10, Image11, Image12],
    },
    {
        time: "July 2020 - Present",
        title: "PINOY PRIDE WORLDWIDE, LLC",
        description: `
      After parting ways with IPS, Edgar Ocampo continued his business of Pinoy Pride 
      Worldwide LLC. Partnered with Jimmy Locsin, and later expanded with a Seattle-based 
      business owner signing a Memorandum of Agreement with trusted Forwarder and Logistic 
      partners — aiming to provide excellent service in delivering Balikbayan Boxes with 
      reliability and speed.
    `,
        images: [Image13, Image14, Image15, Image16],
    },
]);

// Current slide index per item
const currentSlides = ref(timelineItems.value.map(() => 0));

let intervalId;
onMounted(() => {
    intervalId = setInterval(() => {
        currentSlides.value = currentSlides.value.map((idx, i) => {
            const max = timelineItems.value[i].images.length;
            return (idx + 1) % max;
        });
    }, 3000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <div class="max-w-6xl mx-auto px-6">
        <!-- Title -->
        <h2 class="text-3xl sm:text-4xl font-extrabold text-center text-transparent 
           bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 mb-12">
            Our Journey
        </h2>


        <!-- Timeline -->
        <div class="space-y-16">
            <div v-fade-slide-up="100" v-for="(item, index) in timelineItems" :key="index"
                class="flex flex-col md:flex-row items-center gap-8"
                :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''">
                <!-- Slideshow -->
                <div class="md:w-1/2 relative rounded-xl overflow-hidden shadow-lg border border-gray-300">
                    <transition name="fade" mode="out-in">
                        <img :key="currentSlides[index]" :src="item.images[currentSlides[index]]" alt="Timeline image"
                            class="w-full h-64 md:h-80 object-contain" />
                    </transition>
                </div>

                <!-- Text -->
                <div class="md:w-1/2">
                    <time class="font-mono text-sm text-gray-500 block mb-2">
                        {{ item.time }}
                    </time>
                    <h3 class="text-xl font-semibold mb-3">
                        {{ item.title }}
                    </h3>
                    <p v-for="(paragraph, i) in item.description.trim().split(/\n\s*\n/)" :key="i"
                        class="text-gray-700 leading-relaxed mb-3">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
