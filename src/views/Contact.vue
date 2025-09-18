<script setup>
// Component
import BranchesCard from '@/components/BranchesCard.vue';
import ContactCard from '@/components/ContactCard.vue';
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
            Branches
        </h2>
    </section>

    <section class="py-12 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Headline -->
            <div class="text-center mb-8">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                    Pinoy Pride Worldwide LLC
                </h2>
                <p class="mt-2 text-gray-600 text-base sm:text-lg">
                    We’re closer than you think. Find a Pinoy Pride Worldwide LLC branch near you and experience
                    reliable logistics, expert service, and fast support.
                </p>
            </div>

            <!-- Branches Cards -->
            <div class="mt-6">
                <BranchesCard />
            </div>
        </div>
    </section>


    <section class="py-12 px-6 max-w-6xl mx-auto">
        <!-- Headline -->
        <div class="mb-8">
            <h2 class="text-3xl font-extrabold text-gray-800 border-l-4 border-blue-600 pl-4">
                Contact Us
            </h2>
            <p class="mt-2 text-gray-600 text-base sm:text-lg">
                Reach out to our branches across the U.S. We are ready to assist you!
            </p>
        </div>

        <div class="flex flex-col gap-3">
            <ContactCard
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Edgar S. Ocampo', title: 'President / CEO / Founder', phone: '+01 (253) 282 - 9628', email: 'pinoyprideworldwide@gmail.com' },
                    { name: 'Ed / Jimmy / Leonila', title: 'Customer Service - USA', phone: '(253)-238-8864' },
                    { name: 'Michelle', title: 'Customer Service - Philippines', phone: '(0917)-126-1246' },
                    { name: 'Melanie', title: 'Customer Service - Philippines', phone: '(0917)-126-1276' },
                    { name: 'Leonila', title: 'Customer Service - Philippines', phone: '(0997)-541-1886' },
                ]" />

            <!-- Seattle Branch -->
            <ContactCard branchName="Seattle"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Seattle Manila Oriental Store & Cafe 1257 A St. NE Auburn, WA 98002', title: '( Drop-off Center )', phone: '(206)-492-9123 Ext. 531-9008', email: 'pinoyprideworldwide@gmail.com' }
                ]" />

            <!-- New York/New Jersey Branch -->
            <ContactCard branchName="New York/New Jersey"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Jimmy Locsin', title: 'General Manager & VP of Operations', phone: '(917)-855-6757', email: 'pinoyprideny1129@gmail.com' },
                    { name: 'Lorenzo Dugangay', title: 'Authorized Partner', phone: '(929)-521-2605' },
                ]" />

            <!-- Virginia -->
            <ContactCard branchName="Virginia"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Larry/Richelle Dizon', title: 'Franchisee/Owners', store: '37North - Asian Market in the `Burg', phone: '(757)-332-5935; (757)-739-0416' }
                ]" />

            <!-- Texas -->
            <ContactCard branchName="Texas"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.520757834986!2d-122.08512762390362!3d47.36330500474702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905fea15bd74cf%3A0xb26a2aa213c44bf1!2s19443%20SE%20266th%20St%2C%20Covington%2C%20WA%2098042%2C%20USA!5e1!3m2!1sen!2sph!4v1758115343472!5m2!1sen!2sph"
                :contacts="[
                    { name: 'Kyle Tentativa', title: 'Business Partner', phone: '(408)-368-4396' }
                ]" />
        </div>
    </section>



</template>