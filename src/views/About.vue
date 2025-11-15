<script setup>
// Components
import Timeline from '@/components/aboutComponents/Timeline.vue';
import TeamSection from '@/components/aboutComponents/TeamSection.vue';
import ImageInfoCard from '@/components/aboutComponents/ImageInfoCard.vue';
import LogoHistoryCard from '@/components/aboutComponents/LogoHistoryCard.vue';
import WebsiteHistoryCard from '@/components/aboutComponents/WebsiteHistoryCard.vue';
import { infoImageData } from '@/data/infoImageData';

// Images
import CargoShipOverlay from '@/assets/images/stockImages/CargoShipOverlay.png';
import PPWLicensedLogo from '@/assets/logos/PPWLicensedLogo.png';

// Logos Images
import logo2019 from '@/assets/logos/logo2019.png';
import logo2021 from '@/assets/logos/logo2021.jpg';
import logo2022 from '@/assets/logos/logo2022.jpg';
import presentLogo from '@/assets/logos/PinoyPrideLogo.png';

// Website Images
import Website01 from '@/assets/images/Website01.png';
import Website02 from '@/assets/images/Website02.png';

const logos = [
    { src: logo2019, year: "2020-2021" },
    { src: logo2021, year: "2022-2023" },
    { src: logo2022, year: "2023-2024" },
    { src: presentLogo, year: "2024-Present" },
];

const webs = [
    { src: Website02, year: "2024-Sept 2025" },
    { src: Website01, year: "October 2025-Present" },
];
</script>
<template>
    <section
        class="relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] flex items-center justify-center overflow-hidden">
        <!-- Background blurred -->
        <img :src="CargoShipOverlay" alt="Cargo Ship"
            class="absolute inset-0 w-full h-full object-cover blur-sm scale-105" />

        <img :src="CargoShipOverlay" alt="Cargo Ship"
            class="absolute inset-0 max-h-full w-auto object-contain mx-auto" />

        <!-- Dark overlay -->
        <!-- <div class="absolute inset-0 bg-black/50 z-20"></div> -->

        <!-- Centered text -->
        <!-- <h2
            class="relative z-30 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight">
            ABOUT US
        </h2> -->
    </section>
    <h2 v-fade-slide-up="100"
        class="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-indigo-600 mb-4 text-center leading-tight mt-5">
        ABOUT US
    </h2>

    <!-- Our Team -->
    <section class="py-16 bg-gray-100">
        <TeamSection />
    </section>

    <!-- Our Story -->
    <section class="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <!-- Headline -->
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text
           bg-gradient-to-r from-red-800 via-pink-600 to-indigo-600 mb-4">
                OUR STORY
            </h2>


            <!-- Decorative underline -->
            <div class="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded"></div>

            <!-- Paragraph -->
            <pre v-fade-slide-up="200"
                class="text-gray-700 text-base sm:text-lg leading-relaxed text-justify max-w-2xl mx-auto whitespace-pre-line">
                <span class="text-blue-800 font-bold">Pinoy Pride Worldwide LLC</span> is a bonded and insured freight forwarding company, licensed under <span class="font-semibold text-blue-800">FMC-OTI-NVOCC #033592N</span>, specializing in consolidating <span class="font-semibold">Balikbayan boxes</span> and <span class="font-semibold">moving household goods of Filipinos to be loaded into containers</span>, shipped, and delivered directly to the consignee’s address anywhere in the Philippines.

                The leadership team has over 10 years of combined experience in handling and shipping Balikbayan box cargo and <span class="font-semibold">household goods</span> <span class="font-semibold">(via containers)</span> from various locations in the US. They bring this wealth of valuable experience to the company to ensure the highest quality of service for its customers.
            </pre>
        </div>
    </section>


    <section class="py-16 bg-gray-200">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Mission Card -->
            <div v-fade-slide-up="100" class="bg-gray-50 rounded-md shadow-md hover:shadow-lg transition p-8 relative">
                <!-- Highlight Line -->
                <div class="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-2xl"></div>

                <h3 class="text-2xl font-bold text-gray-900 mb-4">OUR MISSION</h3>
                <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                    At <span class="font-semibold">Pinoy Pride Worldwide LLC</span>, our mission is to serve the
                    Filipino community with dedication by
                    making the process of sending goods through balikbayan boxes more convenient, reliable, and
                    meaningful. Beyond this, we extend our commitment to Filipinos abroad who dream of retiring in the
                    Philippines, by providing seamless and trustworthy shipping solutions for their <span
                        class="font-semibold">household goods through container shipments</span>. We aim to ease their
                    transition back home, ensuring every box and container we deliver not only belongings but also love,
                    memories, and a lasting connection to the homeland.
                </p>
            </div>

            <!-- Vision Card -->
            <div v-fade-slide-up="200" class="bg-gray-50 rounded-md shadow-md hover:shadow-lg transition p-8 relative">
                <!-- Highlight Line -->
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl"></div>

                <h3 class="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h3>
                <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Our vision at <span class="font-semibold">Pinoy Pride Worldwide LLC</span> is to redefine the
                    narrative of Balikbayan Box
                    consolidation, transcending mere logistics to become a symbol of cultural celebration, global unity,
                    and empowerment. We envision a world where every Balikbayan Box represents a profound connection
                    between the Philippines and its global diaspora, embodying the shared values of family, heritage,
                    and resilience. Through our innovative approach, unwavering commitment to excellence, and passion
                    for cultural preservation, we aspire to inspire a new generation of Filipinos to embrace their
                    roots, celebrate their identity, and contribute to a more interconnected and vibrant global
                    community. Together, we envision a future where Pinoy Pride knows no borders, and every Balikbayan
                    Box becomes a testament to the enduring spirit of Filipino pride, resilience, and solidarity.
                </p>
            </div>
        </div>
    </section>

    <!-- Our Journey -->
    <section class="py-16 bg-white">
        <Timeline />
    </section>

    <!-- Our Partners -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <!-- Headline -->
            <div class="text-center mb-10">
                <h2
                    class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                    Pinoy Pride Worldwide LLC
                </h2>
                <p class="mt-2 text-lg text-gray-600">
                    Trusted Forwarder & Logistics Partner
                </p>
            </div>

            <!-- Image + Info -->
            <ImageInfoCard :images="infoImageData.forwarderImages" :logo="PPWLicensedLogo" logoSize="w-56 h-56">
                Pinoy Pride Worldwide, LLC is renowned as a Balikbayan Box Cargo Consolidators for many years which
                offers door-to-door logistic service. It is steadfast to conform the highest standard in shipping cargo
                with Superior, Trustworthy, Reliable, Efficiency, and Safe (STRES) delivery for customers loved ones in
                the Philippines.

                Customers are always our top priority. We take pride and ensure Balikbayan Box is packed with love and
                precision. Our 24/7 support, in-house tracking, trace portal and customer service assure peace of mind
                for our valued customers. For this principal reason, they make Pinoy Pride Worldwide, LLC their
                preferred choice for Cargo Forwarder and subsequently, referred us to their family members, relatives
                and friends.
            </ImageInfoCard>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <!-- Headline -->
            <div class="text-center mb-10">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                    Penanshin Shipping (Phils.) Inc.
                </h2>
            </div>

            <!-- Image + Info -->
            <ImageInfoCard :images="infoImageData.penanshinImages">
                Established in 1998 from Singapore, Penanshin has had a long and illustrious history as an integrated
                one-stop freight forwarding services company. From our humble beginnings as a neutral NVOCC company,
                Penanshin has grown to be a profitable major player in freight forwarding services in the Asia Pacific
                region with strategic footprints in 10 countries, from Singapore, Brunei, Cambodia, Malaysia, India,
                Indonesia, Pakistan, Philippines, Thailand to Vietnam. Along the way, we have fostered many lasting
                business relationships with our partners and customers, of which bear testimony of our success in
                building a first-class air, sea and ground handling company known for its quality service.
            </ImageInfoCard>
        </div>
    </section>

    <!-- History Sections -->
    <section class="py-12">
        <h2
            class="relative text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-3">
            Pinoy Pride Worldwide Logo History
        </h2>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-6xl mx-auto">
            <LogoHistoryCard v-for="(logo, index) in logos" :key="index" :src="logo.src" :year="logo.year"
                :description="logo.description" />
        </div>
    </section>

    <section class="py-12">
        <h2
            class="relative text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-3">
            Pinoy Pride Worldwide Website History
        </h2>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-10 mx-auto">
            <WebsiteHistoryCard v-for="(web, index) in webs" :key="index" :src="web.src" :year="web.year"
                :description="web.description" />
        </div>
    </section>
</template>