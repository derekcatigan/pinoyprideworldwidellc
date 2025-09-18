<script setup>
// Component
import ServicesCard from '@/components/ServicesCard.vue';
// Images
import ServiceImage01 from '@/assets/images/ServicesImage01.png';
// Heroicons
import { CheckIcon } from '@heroicons/vue/24/outline';

</script>

<template>
    <section class="mb-12 py-16 bg-gray-100">

        <!-- Headline -->
        <div class="text-center mb-8">
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                What We Do
            </h2>
            <!-- Highlight line -->
            <div class="w-52 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 mx-auto my-4 rounded"></div>
            <p v-fade-slide-up="200" class="mt-2 text-gray-600 text-base sm:text-lg">
                Explore the services and solutions we provide to make your logistics experience seamless.
            </p>
        </div>

        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-4">

            <!-- Text Column -->
            <div v-fade-slide-up="100"
                class="md:w-1/2 bg-white border border-gray-300 p-8 rounded-xl shadow-lg flex flex-col justify-center text-gray-700 text-sm space-y-4">
                <p>
                    At <span class="font-semibold text-gray-800">Pinoy Pride Worldwide LLC</span>, we make shipping
                    between the USA and the Philippines <span class="text-red-500 font-semibold">fast, secure, and
                        hassle-free</span>.
                </p>

                <p>
                    For returning residents, we handle appliances like <span class="italic">dishwashers, washers and
                        dryers, TVs, and refrigerators</span>, as well as furniture including <span
                        class="italic">sofas,
                        mattresses, cabinets, and dining sets</span>.
                </p>

                <p>
                    For businesses and commercial shipments, we offer <span class="font-semibold">dedicated
                        containers</span> for single-owner shipments or <span class="font-semibold">cost-effective
                        shared
                        container options</span> for smaller loads.
                </p>

                <p>
                    We also cater to general merchandise, import/export needs, and mixed shipments combining
                    <span class="italic">new and used products</span>, with flexible CBM rates for sensitive and
                    standard goods.
                </p>

                <p>
                    Additional services include <span class="font-semibold">shipper-owned containers, global container
                        shipping, interstate moving within the USA, Balikbayan boxes</span> in large and jumbo sizes,
                    and
                    soon, <span class="font-semibold text-blue-500">air cargo services</span>.
                </p>

                <p>
                    Wherever you are, we bring the Philippines closer to you—<span class="text-red-500 font-semibold">
                        fast, secure, and affordably</span>. <span
                        class="underline cursor-pointer text-blue-600 hover:text-blue-800">
                        Contact us today</span> to start your shipment!
                </p>
            </div>

            <!-- Image Column -->
            <div v-fade-slide-up="200" class="md:w-1/2 flex justify-center items-center">
                <img :src="ServiceImage01" alt="Shipping services illustration"
                    class="w-full rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300">
            </div>
        </div>
    </section>

    <section class="mb-12 py-16">

        <!-- Headline -->
        <div class="text-center mb-8 px-4">
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-transparent 
                 bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                Our Services
            </h2>
            <p v-fade-slide-up="200" class="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Discover the range of logistics solutions we provide to meet your business needs.
            </p>
        </div>

        <!-- Services Cards -->
        <div class="max-w-6xl mx-auto flex flex-col gap-6 px-4">
            <ServicesCard title="For Returning Residents:">
                <ul>
                    <li>
                        <span class="font-bold">Appliences:</span> Dishwashers, Washers, & Dryers, TV's, Refrigerators &
                        more...
                    </li>
                    <li>
                        <span class="font-bold">Furniture:</span> Sofas, Mattresses, Cabinets, Dining Sets & more...
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For Business & Commercial Goods: (Import/Export) - USA ⇄ Philippines">
                <ul>
                    <li>
                        <span class="font-bold">Single Owner Shipping:</span> Get a dedicated container exclusively for
                        your bran-new or used products perfect for entrepreneur or individuals ready to start or expand
                        their business.
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For General Merchandise: (Import/Export) - USA ⇄ Philippines">
                <ul>
                    <li>
                        Save cost by sharing container with other shippers (Limit: Up to 5 CBM or 2 tons of equivalent
                        weight).
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For Mix Shipments">
                <ul>
                    <li>
                        <span class="font-bold">Combine of brand-new products</span> with used household goods, personal
                        effects, tools, car parts, and more.
                    </li>
                    <li>
                        <span class="font-bold">Flexible Rates -</span> Pay only for the space you use - oer cubic meter
                        (CBM)
                    </li>
                    <li>
                        <span class="font-bold">Sensitive goods -</span> Premium CBM rate applies.
                    </li>
                    <li>
                        <span class="font-bold">Non-sensitive goods -</span> Standard CBM rate.
                    </li>
                </ul>
            </ServicesCard>

            <ServicesCard title="More Services to Meet Your Needs">
                <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Shipper-Owned Containers (SOC)</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Global Container Shipping</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Interstate Moving within the USA</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Balikbayan Boxes (large, X-large, Jumbo)</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Air Cargo - Launching Soon!</span>
                    </div>
                </div>
            </ServicesCard>
        </div>

    </section>


</template>
