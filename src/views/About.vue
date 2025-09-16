<script setup>
// Components
import Timeline from '@/components/Timeline.vue';
import TeamSection from '@/components/TeamSection.vue';
// Images
import CargoShipOverlay from '@/assets/images/stockImages/CargoShipOverlay.png';
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
        <div class="absolute inset-0 bg-black/50 z-20"></div>

        <!-- Centered text -->
        <h2
            class="relative z-30 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight">
            ABOUT US
        </h2>
    </section>


    <section class="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <!-- Headline -->
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                OUR STORY
            </h2>

            <!-- Decorative underline -->
            <div class="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded"></div>

            <!-- Paragraph -->
            <p v-fade-slide-up="200" class="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Pinoy Pride Worldwide is a company that consolidates Balikbayan boxes from the United States
                to the Philippines. The leadership team has more than 10 years of combined experience in
                Balikbayan box cargo handling and shipping from different companies in the US. They bring
                together an array of valuable experiences to the company in ensuring excellent service to its customers.
            </p>
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
                    At Pinoy Pride Worldwide, our mission is to revolutionize the experience of sending and receiving
                    Balikbayan Boxes, embodying the essence of Filipino pride while fostering global connections and
                    empowering communities. We are committed to providing an unparalleled service that combines
                    efficiency,
                    reliability, and cultural appreciation, ensuring that every box we handle becomes a symbol of love,
                    connection, and shared heritage.
                </p>
            </div>

            <!-- Vision Card -->
            <div v-fade-slide-up="200" class="bg-gray-50 rounded-md shadow-md hover:shadow-lg transition p-8 relative">
                <!-- Highlight Line -->
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl"></div>

                <h3 class="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h3>
                <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Our vision at Pinoy Pride Worldwide is to redefine the narrative of Balikbayan Box consolidation,
                    transcending mere logistics to become a symbol of cultural celebration, global unity, and
                    empowerment.
                    We envision a world where every Balikbayan Box represents a profound connection between the
                    Philippines
                    and its global diaspora, embodying the shared values of family, heritage, and resilience. Through
                    our
                    innovative approach, unwavering commitment to excellence, and passion for cultural preservation, we
                    aspire
                    to inspire a new generation of Filipinos to embrace their roots, celebrate their identity, and
                    contribute
                    to a more interconnected and vibrant global community. Together, we envision a future where Pinoy
                    Pride
                    knows no borders, and every Balikbayan Box becomes a testament to the enduring spirit of Filipino
                    pride,
                    resilience, and solidarity.
                </p>
            </div>
        </div>
    </section>

    <!-- Our Journey -->
    <section class="py-16 bg-white">
        <Timeline />
    </section>

    <!-- Our Team -->
    <section class="py-16 bg-gray-100">
        <TeamSection />
    </section>
</template>