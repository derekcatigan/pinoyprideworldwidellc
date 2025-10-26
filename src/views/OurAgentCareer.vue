<script setup>
import AgentImage from '@/assets/images/AgentImage.png'
import PictureJimmy from '@/assets/images/balikBayan/PPW22.png'
import PictureEdgar from '@/assets/images/balikBayan/PPW21.png'
</script>

<template>
    <section>
        <!-- Header Image -->
        <div class="w-full mb-12">
            <img :src="AgentImage" alt="Pinoy Pride Worldwide Agent"
                class="w-full h-64 md:h-96 object-cover rounded-b-2xl shadow-lg" />
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10 p-5">
            <div class="p-6 lg:p-8 bg-white rounded-2xl shadow-sm">
                <!-- Content -->
                <div class="max-w-5xl mx-auto py-10">
                    <h2 class="text-3xl font-bold mb-4 text-center">
                        Be a Pinoy Pride Worldwide Independent Agent!
                    </h2>
                    <p class="italic text-center mb-10">
                        (Join Our Growing Balikbayan Box Network)
                    </p>

                    <div class="space-y-6 text-lg leading-relaxed text-gray-800">
                        <p>
                            Are you passionate about helping our kababayans send love back home?
                        </p>

                        <p>
                            Become a Balikbayan Box Independent Agent with Pinoy Pride Worldwide LLC — a trusted
                            forwarding international shipping company proudly serving Filipinos worldwide.
                        </p>

                        <h3 class="font-semibold text-xl mt-8">What You’ll Do</h3>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Accept and consolidate Balikbayan boxes in your area</li>
                            <li>Assist customers with shipping inquiries</li>
                            <li>Coordinate with our U.S. main office for booking and dispatch</li>
                            <li>Earn commissions per box for consistent performance of picking up Balikbayan boxes</li>
                            <li>Earn commission per container for every Filipino who wants to ship their used household
                                via
                                container</li>
                        </ul>

                        <h3 class="font-semibold text-xl mt-8">Why Join Us</h3>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Established and reliable logistics network</li>
                            <li>Fast, secured, and documented deliveries to the Philippines</li>
                            <li>Full business support and training</li>
                            <li>Opportunity to grow your own local branch</li>
                        </ul>

                        <h3 class="font-semibold text-xl mt-8">Ideal For</h3>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Entrepreneurs or OFWs seeking extra income</li>
                            <li>Community leaders helping fellow Filipinos</li>
                            <li>Small business owners wanting to expand their services</li>
                        </ul>

                        <div class="mt-8 text-center">
                            <p>Interested?</p>
                            <div class="text-center mt-8">
                                <a href="https://forms.gle/CY4TvSWqFg5sPAuj7" target="_blank" class="btn btn-primary">
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24 space-y-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4 text-center">
                    A Reflection of Humble Beginnings
                </h2>
                <p class="text-justify bg-white p-5 rounded shadow">
                    <strong>Founder & CEO</strong> of Pinoy Pride Worldwide, Engr. Edgar Ocampo, together with
                    <strong>VP of Operations</strong>, Jimmy Locsin, <strong>personally picking up boxes</strong> during
                    their early years as agents perseverance. Their dedication and strong foundation have shapde the
                    company's success today.
                </p>
                <img :src="PictureJimmy" alt="PPW Agent" class="w-80 rounded-xl shadow-md object-cover" />
                <img :src="PictureEdgar" alt="PPW Agent" class="w-80 rounded-xl shadow-md object-cover" />
            </div>

        </div>
    </section>
</template>
