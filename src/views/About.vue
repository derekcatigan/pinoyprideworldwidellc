<script setup>
// Components
import Timeline from '@/components/Timeline.vue';
import TeamSection from '@/components/TeamSection.vue';
import ImageInfoCard from '@/components/ImageInfoCard.vue';
// Images
import CargoShipOverlay from '@/assets/images/stockImages/CargoShipOverlay.png';
import FowarderImage01 from '@/assets/images/FowarderImage01.png';
import FowarderImage02 from '@/assets/images/FowarderImage02.png';
import FowarderImage03 from '@/assets/images/FowarderImage03.png';
import FowarderImage04 from '@/assets/images/FowarderImage04.png';
import FowarderImage05 from '@/assets/images/FowarderImage05.png';
import FowarderImage06 from '@/assets/images/FowarderImage06.png';
import FowarderImage07 from '@/assets/images/FowarderImage07.png';
import FowarderImage08 from '@/assets/images/FowarderImage08.png';
import FowarderImage09 from '@/assets/images/FowarderImage09.png';
import FowarderImage10 from '@/assets/images/FowarderImage10.png';
import PPWLicensedLogo from '@/assets/logos/PPWLicensedLogo.png';
import PenshinImage00 from '@/assets/images/PenshinImage00.jpg';
import PenshinImage01 from '@/assets/images/PenshinImage01.jpg';
import PenshinImage02 from '@/assets/images/PenshinImage02.PNG';
import PenshinImage03 from '@/assets/images/PenshinImage03.PNG';
import PenshinImage04 from '@/assets/images/PenshinImage04.PNG';
import PenshinImage05 from '@/assets/images/PenshinImage05.PNG';
import PenshinImage06 from '@/assets/images/PenshinImage06.PNG';
import PenshinImage07 from '@/assets/images/PenshinImage07.PNG';
import PenshinImage08 from '@/assets/images/PenshinImage08.PNG';
import PenshinImage09 from '@/assets/images/PenshinImage09.PNG';
import PenshinImage10 from '@/assets/images/PenshinImage10.PNG';
import PenshinImage11 from '@/assets/images/PenshinImage11.PNG';
import PenshinImage12 from '@/assets/images/PenshinImage12.PNG';
import PenshinImage13 from '@/assets/images/PenshinImage13.PNG';
import PenshinImage14 from '@/assets/images/PenshinImage14.PNG';
import PenshinImage15 from '@/assets/images/PenshinImage15.PNG';
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
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text
           bg-gradient-to-r from-red-800 via-pink-600 to-indigo-600 mb-4">
                OUR STORY
            </h2>


            <!-- Decorative underline -->
            <div class="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded"></div>

            <!-- Paragraph -->
            <pre v-fade-slide-up="200"
                class="text-gray-700 text-base sm:text-lg leading-relaxed text-justify max-w-2xl mx-auto whitespace-pre-line">
                <span class="text-blue-800 font-bold">Pinoy Pride Worldwide </span><span class="text-red-600 font-bold">LLC</span> is a bonded and insured freight forwarding company, licensed under FMC-OTI-NVOCC #033592N, specializing in consolidating <span class="font-semibold">Balikbayan boxes</span> and <span class="font-semibold">moving household goods of Filipinos to be loaded into containers</span>, shipped, and delivered directly to the consignee’s address anywhere in the Philippines.

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

    <!-- Our Team -->
    <section class="py-16 bg-gray-100">
        <TeamSection />
    </section>

    <!-- Our Partners -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <!-- Headline -->
            <div class="text-center mb-10">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-transparent 
               bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                    Pinoy Pride Worldwide LLC
                </h2>
                <p class="mt-2 text-lg text-gray-600">
                    Trusted Forwarder & Logistics Partner
                </p>
            </div>

            <!-- Image + Info -->
            <ImageInfoCard :images="[
                FowarderImage01,
                FowarderImage02,
                FowarderImage03,
                FowarderImage04,
                FowarderImage05,
                FowarderImage06,
                FowarderImage07,
                FowarderImage08,
                FowarderImage09,
                FowarderImage10
            ]" description="
                Pinoy Pride Worldwide, LLC is renowned as a Balikbayan Box Cargo Consolidators for many years which offers door-to-door logistic service. It is steadfast to conform the highest standard in shipping cargo with Superior, Trustworthy, Reliable, Efficiency, and Safe (STRES) delivery for customers loved ones in the Philippines.

                Customers are always our top priority. We take pride and ensure Balikbayan Box is packed with love and precision. Our 24/7 support, in-house tracking, trace portal and customer service assure peace of mind for our valued customers. For this principal reason, they make Pinoy Pride Worldwide, LLC their preferred choice for Cargo Forwarder and subsequently, referred us to their family members, relatives and friends.

                The company has widened its horizons and now accepting services (Cars, Jet Ski, Heavy Equipments, Furnitures… etc) for Returning Residents , Commercial Goods (Import/Export), Shipper own Container (SOC), Less than Container Load (LCL) and Interstate relocation for US residents.

                Pinoy Pride Worldwide, LLC envision to enhance its operational capability from Consolidator to Forwarder in pursuit of exceeding customers expectation and satisfaction. In addition, to fully Bonded and Insured, it has earned a Certificate of Licensure from Federal Maritime Commission. A license was awarded to Pinoy Pride Worldwide, LLC under FMC-OTI-NVOCC # 033592N after complying all the requirements.
                " :logo="PPWLicensedLogo" logoSize="w-56 h-56">

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
            <ImageInfoCard :images="[
                PenshinImage00,
                PenshinImage01,
                PenshinImage02,
                PenshinImage03,
                PenshinImage04,
                PenshinImage05,
                PenshinImage06,
                PenshinImage07,
                PenshinImage08,
                PenshinImage09,
                PenshinImage10,
                PenshinImage11,
                PenshinImage12,
                PenshinImage13,
                PenshinImage14,
                PenshinImage15,
            ]" description="
                Established in 1998 from Singapore, Penanshin has had a long and illustrious history as an integrated one-stop freight forwarding services company. From our humble beginnings as a neutral NVOCC company, Penanshin has grown to be a profitable major player in freight forwarding services in the Asia Pacific region with strategic footprints in 10 countries, from Singapore, Brunei, Cambodia, Malaysia, India, Indonesia, Pakistan, Philippines, Thailand to Vietnam. Along the way, we have fostered many lasting business relationships with our partners and customers, of which bear testimony of our success in building a first-class air, sea and ground handling company known for its quality service.
                " />
        </div>
    </section>

</template>