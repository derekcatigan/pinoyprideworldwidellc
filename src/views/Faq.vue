<script setup>
import FaqCard from '@/components/faqComponents/FaqCard.vue';
</script>

<template>
    <div class="max-w-full mx-auto px-6 py-12 bg-gray-100">
        <!-- Page Title -->
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold">Frequently Asked Questions</h1>

            <div class="mt-3 mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>

            <p class="mt-4 text-lg text-gray-600">
                Find answers to the most common questions below.
            </p>
        </div>


        <!-- FAQ Section -->
        <div>

            <!-- /* ------------------------------------ A ----------------------------------- */ -->
            <h2 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 text-center">
                Why Trust Pinoy Pride Worldwide for Your Shipment?
            </h2>

            <!-- Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <!-- 1 -->
                <FaqCard>
                    <div class="flex items-center">
                        <h3 class="border-l-4 border-blue-500 pl-3 font-semibold text-lg">
                            Licensed, Bonded, and Insured
                        </h3>
                        <div class="flex-1 border-t-2 border-red-200 ml-3"></div>
                    </div>

                    <p class="text-gray-700 text-sm mb-3">
                        Pinoy Pride Worldwide LLC is a bonded and insured freight forwarding company, licensed under
                        the <span class="font-bold">US Federal Maritime Commission (FMC-OTI-NVOCC #033592N)</span>. We
                        specialize in consolidating Balikbayan boxes and moving household goods (including cars, if any)
                        into containers, shipped and delivered directly to the consignee’s address anywhere in the
                        Philippines.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Some companies claim to be licensed, bonded, and insured but cannot provide proof.</li>
                        <li>Having an <span class="font-bold">NVOCC license</span> is the only way to book containers
                            directly with shipping lines.
                        </li>
                        <li>You can verify our license by searching “List of NVOCC Licensed in the United States.”</li>
                        <li>Legal documents like licenses, certificates, and bonds are on our website.</li>
                    </ul>
                </FaqCard>

                <!-- 2 -->
                <FaqCard>
                    <div class="flex items-center">
                        <h3 class="flex items-center border-l-4 border-blue-500 pl-3 font-semibold text-lg mb-2">
                            Direct and Transparent Communication
                        </h3>
                        <div class="flex-1 border-t-2 border-red-200 ml-3"></div>
                    </div>
                    <p class="text-gray-700 text-sm">
                        With Pinoy Pride Worldwide LLC, you are assured of legitimacy and transparency. If you have
                        any questions or concerns regarding your shipment, you can directly contact our Manager, VP
                        of Operations, or even our President/CEO.
                    </p>
                </FaqCard>

                <!-- 3 -->
                <FaqCard>
                    <div class="flex items-center">
                        <h3 class="flex items-center border-l-4 border-blue-500 pl-3 font-semibold text-lg mb-2">
                            Commitment Through a Memorandum of Agreement (MOA)
                        </h3>
                        <div class="flex-1 border-t-2 border-red-200 ml-3"></div>
                    </div>
                    <p class="text-gray-700 text-sm">
                        For every shipment, Pinoy Pride Worldwide LLC signs a <span class="font-bold">Memorandum of
                            Agreement (MOA)</span>
                        with the
                        shipper/sender. This ensures transparency, accountability, mutual benefits, and protection
                        for both parties.
                    </p>
                </FaqCard>

                <!-- 4 -->
                <FaqCard>
                    <div class="flex items-center">
                        <h3 class="flex items-center border-l-4 border-blue-500 pl-3 font-semibold text-lg mb-2">
                            Verified and Documented Deliveries
                        </h3>
                        <div class="flex-1 border-t-2 border-red-200 ml-3"></div>
                    </div>
                    <p class="text-gray-700 text-sm">
                        Pinoy Pride Worldwide provides documentation for each shipment to prove successful
                        deliveries. These records are available on our website.
                    </p>
                </FaqCard>
            </div>

            <!-- /* ------------------------------------ B ----------------------------------- */ -->
            <h2 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 text-center">
                There are many issues today regarding the Bureau of Customs (BOC) in the Philippines. Because of
                these issues, some containers are confiscated or abandoned. How can you ensure that this will not happen
                to our shipment?
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <!-- 1 -->
                <div
                    class="bg-white border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition">
                    <h3 class="flex items-center font-semibold text-lg mb-2">
                        <span class="w-1.5 h-6 bg-blue-500 rounded mr-2"></span>
                        Use a Legitimate Forwarding Company
                    </h3>
                    <p class="text-gray-700 text-sm">
                        Pinoy Pride Worldwide LLC is licensed, bonded, and insured, and fully complies with all shipment
                        requirements to ensure safety.
                    </p>
                </div>

                <!-- 2 -->
                <div
                    class="bg-white border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition">
                    <h3 class="flex items-center font-semibold text-lg mb-2">
                        <span class="w-1.5 h-6 bg-blue-500 rounded mr-2"></span>
                        Sign a Memorandum of Agreement (MOA)
                    </h3>
                    <p class="text-gray-700 text-sm mb-3">
                        The most important step is to sign a Memorandum of Agreement (MOA). This document guarantees
                        that, in the unlikely event we cannot secure customs clearance, all expenses of the
                        shipper/sender will be refunded —
                        <span class="font-medium">except in cases of mis-declaration or illegal contents.</span>
                    </p>
                    <p class="text-gray-600 text-sm italic">
                        ⚠ Important: If a forwarding company refuses to sign an MOA, it means they are not confident in
                        their ability to secure clearance. Such companies may abandon containers, causing serious
                        problems for the shipper.
                    </p>
                </div>

                <!-- 3 -->
                <div
                    class="bg-white border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition md:col-span-2">
                    <h3 class="flex items-center font-semibold text-lg mb-2">
                        <span class="w-1.5 h-6 bg-blue-500 rounded mr-2"></span>
                        Hassle-Free Shipping
                    </h3>
                    <p class="text-gray-700 text-sm">
                        Shipping your used household goods (including cars, if any) is easy and stress-free when all
                        policies and requirements are properly followed.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
