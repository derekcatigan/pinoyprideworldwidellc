<script setup>
import ServiceImage01 from '@/assets/images/FowarderImage07.png';
</script>

<template>
    <section class="mb-12 py-16 bg-gray-100">
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
</template>
