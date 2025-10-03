<script setup>
// Component
import BranchesCard from '@/components/contactComponents/BranchesCard.vue';
import ContactCard from '@/components/contactComponents/ContactCard.vue';

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
        <!-- <div class="absolute inset-0 bg-black/50 z-20"></div> -->

        <!-- Centered text -->
        <!-- <h2
            class="relative z-30 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight">
            Branches
        </h2> -->
    </section>

    <h2 v-fade-slide-up="100"
        class="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-indigo-600 mb-4 text-center leading-tight mt-5">
        Branches
    </h2>

    <section class="py-12 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Headline -->
            <div class="text-center mb-8">
                <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-transparent 
               bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                    Pinoy Pride Worldwide LLC
                </h2>
                <p v-fade-slide-up="200" class="mt-2 text-gray-600 text-base sm:text-lg">
                    We’re closer than you think. Find a Pinoy Pride Worldwide LLC branch near you and experience
                    reliable logistics, expert service, and fast support.
                </p>
            </div>


            <!-- Branches Cards -->
            <div v-fade-slide-up="100" class="mt-6">
                <BranchesCard />
            </div>
        </div>
    </section>


    <section class="py-12 px-6 max-w-6xl mx-auto">
        <!-- Headline -->
        <div class="mb-8 flex items-center gap-3">
            <!-- Left highlight line -->
            <div class="w-1 h-10 bg-blue-600 rounded"></div>

            <!-- Text content -->
            <div>
                <h2 class="text-3xl font-extrabold text-transparent 
                   bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                    Contact Us
                </h2>
                <p class="mt-2 text-gray-600 text-base sm:text-lg">
                    Reach out to our branches across the U.S. We are ready to assist you!
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <ContactCard v-fade-slide-up="100"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Edgar S. Ocampo', title: 'President / CEO / Founder', phone: '+01 (253) 282 - 9628', email: 'pinoyprideworldwide@gmail.com' },
                    { name: 'Ed / Jimmy / Angelica', title: 'Customer Service - USA', phone: '(253)-238-8864' },
                    { name: 'Michelle', title: 'Customer Service - Philippines', phone: '(0917)-126-1246' },
                    { name: 'Melanie', title: 'Customer Service - Philippines', phone: '(0917)-126-1276' },
                    { name: 'Angelica', title: 'Customer Service - Philippines', phone: '(0926)-121-4864' },
                ]" />

            <!-- Artesia, California -->
            <ContactCard v-fade-slide-up="100" branchName="Artesia, California"
                notice="Coming soon. For Returnee Resident client only."
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11006.22392026209!2d-118.08665238240854!3d33.86596302398672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2c5405cced85%3A0x9be5a22eea4f2643!2sArtesia%2C%20CA%2090701%2C%20USA!5e1!3m2!1sen!2sph!4v1758804133234!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Cesar “Sano” Abastillas', title: 'Authorized Partner', phone: '(562) 968-9699' },]" />

            <!-- Canada -->
            <ContactCard v-fade-slide-up="100" branchName="Canada"
                notice="Coming soon. For Returnee Resident client only."
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.872848643589!2d-113.53203082484777!3d53.609394522382665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02463c94186a7%3A0x2bfc36a7fa8afe4b!2sEdmonton%2C%20AB%20T5X%200H2%2C%20Canada!5e1!3m2!1sen!2sph!4v1758803937426!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Dexter Fulache', title: 'Business Partner', phone: '(780) 288-3864' },]" />

            <!-- Chicago -->
            <ContactCard v-fade-slide-up="100" branchName="Chicago and Indiana"
                notice="Coming soon. For Returnee Resident client only."
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382496.4737680255!2d-88.06152172494062!3d41.833239303261166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e1!3m2!1sen!2sph!4v1758960021231!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Dra. Carolina Ocampo', title: 'Authorized Partner', phone: '(219) 218-3894' },]" />

            <!-- LA, California -->
            <ContactCard v-fade-slide-up="100" branchName="LA, California"
                notice="Coming soon. For Returnee Resident client only."
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148051.27840114536!2d-118.42102031952389!3d34.049214490239315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e1!3m2!1sen!2sph!4v1758804195709!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Gina Razo', title: 'Authorized Partner', phone: '(323) 820-8942' },]" />

            <!-- New York/New Jersey Branch -->
            <ContactCard v-fade-slide-up="100" branchName="North Carolina"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6471132.801623714!2d-85.14958113536626!3d35.0555007666723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e1!3m2!1sen!2sph!4v1759507273986!5m2!1sen!2sph"
                notice="Coming soon. For Returnee Resident client only." :contacts="[
                    { name: 'Nerisa Dixon', title: 'Authorized Partner', phone: '(252)-670-6766' },
                ]" />

            <!-- New York/New Jersey Branch -->
            <ContactCard v-fade-slide-up="100" branchName="New York/New Jersey"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416437.45918644255!2d-74.3098327123483!3d40.69667075103323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sph!4v1758804325921!5m2!1sen!2sph"
                notice="Coming soon. For Returnee Resident client only." :contacts="[
                    { name: 'Jimmy Locsin', title: 'General Manager & VP of Operations', phone: '(917)-855-6757', email: 'pinoyprideny1129@gmail.com' },
                    { name: 'Lorenzo Dugangay', title: 'Authorized Partner', phone: '(929)-521-2605' },
                ]" />

            <!-- Seattle Branch -->
            <ContactCard v-fade-slide-up="100" branchName="Seattle"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1308.33277844007!2d-122.23011155281112!3d47.320013718448045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490594327807515%3A0xf5092547a8802535!2sSeattle%20Manila%20Oriental%20Store%2FCafe%20%26%20Travel%20Booking%20Services%20Worldwide!5e1!3m2!1sen!2sph!4v1758345863664!5m2!1sen!2sph"
                notice="Coming soon. For Returnee Resident client only." :contacts="[
                    { name: 'Seattle Manila Oriental Store & Cafe 1257 A St. NE Auburn, WA 98002', title: 'Authorized Partner', phone: '(206)-492-9123 Ext. 531-9008', email: 'pinoyprideworldwide@gmail.com' }
                ]" />

            <!-- Texas -->
            <ContactCard v-fade-slide-up="100" branchName="Texas"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7528225.677066268!2d-105.3775199437629!3d31.0602791468681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e1!3m2!1sen!2sph!4v1758804387813!5m2!1sen!2sph"
                notice="Coming soon. For Returnee Resident client only." :contacts="[
                    { name: 'Kyle Tentativa', title: 'Business Partner', phone: '(408)-368-4396' }
                ]" />

            <!-- Virginia -->
            <ContactCard v-fade-slide-up="100" branchName="Virginia"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.121522276005!2d-76.73742563286876!3d37.28430852985731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b08bd85ade2b8b%3A0x4a15d3305024c992!2s4391%20Ironbound%20Rd%2C%20Williamsburg%2C%20VA%2023188%2C%20USA!5e1!3m2!1sen!2sph!4v1758188924867!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Larry/Richelle Dizon', title: 'Franchisee/Owners', store: '37North - Asian Market in the `Burg', phone: '(757)-332-5935; (757)-739-0416' }
                ]" />
        </div>
    </section>
</template>