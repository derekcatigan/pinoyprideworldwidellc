<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Data
import { newsList } from '@/data/newsData.js'
// Components
import HomeCarousel from '@/components/homeComponents/HomeCarousel.vue';
import TestimonialCard from '@/components/homeComponents/TestimonialCard.vue';
import CounterCard from '@/components/homeComponents/CounterCard.vue';
// Images
import DeliveryManIcon from '@/assets/logos/DeliveryManIcon.png';
import HomeImage01 from '@/assets/images/HomeImage01.png';
// Heroicons
import {
    ArchiveBoxIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
    DevicePhoneMobileIcon,
    TruckIcon,
    GlobeAsiaAustraliaIcon,
    BoltIcon,
    CurrencyDollarIcon,
    TrophyIcon,
} from '@heroicons/vue/24/outline';

// Steps Data
const steps = [
    {
        title: 'Step 1',
        text: 'Request for a Box Pick-up Online or Through Phone',
        icon: DevicePhoneMobileIcon,
        isImage: false,
    },
    {
        title: 'Step 2',
        text: 'Wait for our Authorized Agent to pick-up your Balikbayan Boxes',
        icon: DeliveryManIcon,
        isImage: true,
    },
    {
        title: 'Step 3',
        text: "We Deliver your Balikbayan Boxes to your Receiver's Doorstep",
        icon: TruckIcon,
        isImage: false,
    },
]

// Sort by date (latest first) and take the top 3
const latestNews = [...newsList].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

const router = useRouter()
const trackingNumber = ref('')

const goToTrack = () => {
    if (!trackingNumber.value) return
    router.push({
        name: 'Track',
        query: { number: trackingNumber.value }
    })
}
</script>
<template>
    <section>
        <HomeCarousel />
    </section>

    <section class="p-4 sm:p-6 flex flex-col items-center justify-center">
        <!-- Tracking Card -->
        <div v-fade-slide-up="100"
            class="card border border-gray-300 bg-white shadow p-4 sm:p-6 w-full max-w-lg sm:max-w-2xl md:max-w-3xl">
            <!-- Card Title -->
            <header class="card-title flex flex-col gap-1">
                <div class="flex items-center gap-2 text-base sm:text-lg font-bold">
                    <ArchiveBoxIcon class="size-6 sm:size-7 shrink-0 text-blue-800" />
                    <h2>
                        <span class="text-blue-800">Track</span>
                        <span class="text-red-800"> your Box</span>
                    </h2>
                </div>

                <p class="text-xs sm:text-sm text-gray-700 italic">
                    "Dahil premira uno ka...
                    <span class="font-semibold text-blue-800">Kargo mo, Kargo namin</span>"
                </p>
                <p class="text-xs sm:text-sm text-gray-600">
                    Know where your box is – anytime, anywhere.
                </p>
            </header>

            <!-- Card Body -->
            <div class="card-body">
                <div class="flex flex-col md:flex-row md:items-end gap-3">
                    <!-- Input -->
                    <div class="w-full">
                        <label class="text-sm font-medium">Tracking Number</label>
                        <input type="text" v-model="trackingNumber" placeholder="Enter your Tracking/Invoice number"
                            class="w-full input input-sm mt-1" />
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-2 w-full md:w-auto">
                        <button class="btn btn-sm bg-red-800 text-white flex-1 md:flex-none" @click="goToTrack">
                            <MagnifyingGlassIcon class="size-4.5 shrink-0" />
                            Track
                        </button>

                        <div class="dropdown dropdown-end flex-1 md:flex-none">
                            <div tabindex="0" role="button" class="btn btn-sm bg-red-800 text-white w-full md:w-auto">
                                Request
                                <ChevronDownIcon class="size-4.5 shrink-0" />
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content menu bg-base-200 rounded-md border border-gray-300 z-10 w-48 p-2 shadow-sm">
                                <li>
                                    <RouterLink to="/" href="#">Request for Pickup</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/" href="#">Get a Quote</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Steps -->
        <div class="mt-5">
            <h3 class="font-semibold text-2xl text-center mb-3">
                Balikbayan Boxes Delivered Hassle-Free in 3 Steps.
            </h3>

            <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                <article v-for="(step, index) in steps" :key="step.title" v-fade-slide-up="100 * (index + 1)"
                    class="flex flex-col items-center text-center max-w-xs">
                    <div class="w-28 h-28 rounded-full bg-blue-100 flex justify-center items-center">
                        <component :is="step.isImage ? 'img' : step.icon" :src="step.isImage ? step.icon : undefined"
                            alt="" class="size-14 shrink-0" />
                    </div>
                    <h4 class="mt-4 font-semibold text-lg">{{ step.title }}</h4>
                    <p class="text-sm text-gray-600">{{ step.text }}</p>
                </article>
            </div>
        </div>
    </section>

    <!-- Card Counter Section -->
    <section class="py-16 bg-gray-100">
        <div
            class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12 justify-items-center">
            <CounterCard label="Happy Clients" :target="1430" />
            <CounterCard label="Completed Shipments" :target="1730" />
            <CounterCard label="Trusted Logistic Branches (Philippines)" :target="59" />
            <CounterCard label="State Branches" :target="5" />
            <CounterCard label="Smiles Delivered" :target="1496" />
        </div>
    </section>

    <section class="min-h-96 bg-blue-950 p-5">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
            <!-- Image -->
            <div v-fade-slide-up="100" class="w-full max-w-md md:max-w-[400px] aspect-square shadow-lg">
                <img :src="HomeImage01" alt="Balikbayan Cargo" class="w-full h-full object-cover rounded shadow-lg" />
            </div>

            <!-- Text Content -->
            <div v-fade-slide-up="200" class="text-center md:text-left md:max-w-lg lg:max-w-xl">
                <h2 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug">
                    The power of cargo, without the big cost
                </h2>

                <!-- Yellow underline -->
                <div class="w-20 h-1 bg-yellow-400 mt-4 mx-auto md:mx-0"></div>

                <p class="text-white mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Pinoy Pride Worldwide LLC is a bonded, insured, and NVOCC-registered
                    company with License No. (FMC-OTI-NVOCC #033592N) that consolidates
                    Balikbayan boxes and moves household goods (via container) within the
                    United States, as well as from the United States to the Philippines.
                    With over 10 years of combined experience in Balikbayan box cargo
                    handling and shipping, our team ensures excellent service and customer
                    satisfaction, making every shipment seamless and efficient.
                </p>
            </div>
        </div>
    </section>

    <section class="p-5">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-12">

            <!-- Card 1 -->
            <div v-fade-slide-up="100"
                class="card flex-1 min-w-[250px] max-w-sm sm:max-w-md md:max-w-[500px] p-6 border border-gray-200 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div class="flex items-center gap-3 border-b border-gray-300 pb-5">
                    <div class="bg-red-100 p-3 rounded-full">
                        <GlobeAsiaAustraliaIcon class="size-8 text-red-700" />
                    </div>
                    <span class="font-semibold text-xl sm:text-2xl text-red-800">Global Coverage</span>
                </div>

                <div class="mt-4 space-y-3">
                    <p class="font-medium text-gray-700 leading-relaxed">
                        Pinoy Pride Worldwide is now moving cargoes across the globe.
                    </p>
                    <ul class="list-disc pl-6 text-gray-600 text-justify space-y-2">
                        <li>Established drop-off outlets, pick-up, and container shipments anywhere in the US and
                            Philippines.</li>
                        <li>Trusted partners in the Philippines covering the 7,100+ islands of the archipelago.</li>
                        <li>Coming soon: Expanding partnerships in multiple cities worldwide.</li>
                    </ul>
                </div>
            </div>

            <!-- Card 2 -->
            <div v-fade-slide-up="200"
                class="card flex-1 min-w-[250px] max-w-sm sm:max-w-md md:max-w-[500px] p-6 border border-gray-200 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div class="flex items-center gap-3 border-b border-gray-300 pb-5">
                    <div class="bg-blue-100 p-3 rounded-full">
                        <TruckIcon class="size-8 text-blue-700" />
                    </div>
                    <span class="font-semibold text-xl sm:text-2xl text-blue-800">On Time Delivery</span>
                </div>

                <div class="mt-4 space-y-3">
                    <p class="font-medium text-gray-700 leading-relaxed">
                        With our trusted logistic partners, we guarantee to deliver a smile to your loved one's doorstep
                        on time, every time.
                    </p>
                    <ul class="list-disc pl-6 text-gray-600 text-justify space-y-2">
                        <li>Reliable and efficient shipping schedules you can count on.</li>
                        <li>Real-time tracking updates for peace of mind.</li>
                        <li>Handled with care from pickup to final delivery.</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    <!-- News Section -->
    <section class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-5">
            <!-- Section Heading -->
            <div class="text-center mb-10">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                    Latest Updates
                </h2>
                <p class="mt-2 text-gray-600 sm:text-lg">
                    Stay updated with the latest from <span class="font-semibold text-red-700">Pinoy Pride
                        Worldwide</span>
                </p>
            </div>

            <!-- News Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                <div v-for="news in latestNews" :key="news.id" class="p-5 bg-white rounded-xl shadow">
                    <!-- Show only the first media -->
                    <div v-if="news.media && news.media.length">
                        <!-- Image -->
                        <img v-if="news.media[0].type === 'image'" :src="news.media[0].src"
                            class="w-full h-96 object-contain rounded-lg mb-4 bg-black" />

                        <!-- Video -->
                        <div v-else-if="news.media[0].type === 'video'" class="aspect-w-16 aspect-h-9 mb-4">
                            <iframe class="w-full h-96 rounded-lg shadow" :src="news.media[0].src" frameborder="0"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <p class="text-xs text-gray-400">{{ news.date }}</p>
                    <h3 class="text-lg font-semibold">{{ news.title }}</h3>
                    <router-link :to="`/news/${news.id}`"
                        class="text-blue-600 mt-3 text-sm font-medium hover:underline">
                        Read more →
                    </router-link>
                </div>
            </div>

            <!-- More News Link -->
            <div class="mt-10 text-center">
                <router-link to="/news" href="#"
                    class="inline-block px-6 py-2 bg-red-700 text-white font-medium rounded-lg shadow hover:bg-red-800 transition">
                    More News
                </router-link>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="min-h-96 bg-blue-950 px-6 py-16 text-white">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Heading -->
            <h2 v-fade-slide-up="100" class="mb-4 text-3xl md:text-4xl font-bold">
                Why People Choose
                <span class="text-blue-400">Pinoy Pride Worldwide</span>
            </h2>
            <p v-fade-slide-up="200" class="mb-12 text-lg text-gray-300 max-w-2xl mx-auto">
                Our customers are always our top priority. This is the secret why we deliver superior and reliable
                services.
            </p>

            <!-- Features Grid -->
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <!-- Feature 1 -->
                <div v-fade-slide-up="100" class="p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <BoltIcon class="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h3 class="mb-2 text-xl font-semibold">Fast and Easy</h3>
                    <p class="text-sm text-gray-300">
                        Our process from pick-up to drop-off is smooth and easy.
                    </p>
                </div>

                <!-- Feature 2 -->
                <div v-fade-slide-up="200" class="p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <CurrencyDollarIcon class="w-12 h-12 mx-auto mb-4 text-green-400" />
                    <h3 class="mb-2 text-xl font-semibold">Affordable</h3>
                    <p class="text-sm text-gray-300">
                        Lowest prices in the market right now.
                    </p>
                </div>

                <!-- Feature 3 -->
                <div v-fade-slide-up="300" class="p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <TruckIcon class="w-12 h-12 mx-auto mb-4 text-red-400" />
                    <h3 class="mb-2 text-xl font-semibold">Superb Services</h3>
                    <p class="text-sm text-gray-300">
                        Seamless door-to-door process. Promises are kept with the help of our reliable partners.
                    </p>
                </div>

                <!-- Feature 4 -->
                <div v-fade-slide-up="400" class="p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <TrophyIcon class="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                    <h3 class="mb-2 text-xl font-semibold">Satisfaction Guaranteed</h3>
                    <p class="text-sm text-gray-300">
                        Award-winning customer service. We provide accurate and timely information.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-5 text-center mb-12">
            <h2
                class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                What Our Customers Say
            </h2>
            <p class="mt-3 text-gray-600 sm:text-lg">
                Hear from our <span class="font-semibold text-yellow-400">happy clients</span> and partners
            </p>
        </div>
        <TestimonialCard />
    </section>

</template>