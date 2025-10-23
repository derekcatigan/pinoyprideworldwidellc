<script setup>
import BalikBayanCarousel from '@/components/aboutComponents/BalikBayanCarousel.vue';
import DeliveryCarousel from '@/components/aboutComponents/DeliveryCarousel.vue';

// Balikbayan Boxes
import BalikBayan16 from '@/assets/images/balikBayan/PPW16.jpg';
import BalikBayan17 from '@/assets/images/balikBayan/PPW17.jpg';
import BalikBayan18 from '@/assets/images/balikBayan/PPW18.jpg';
import BalikBayan19 from '@/assets/images/balikBayan/PPW19.jpg';
import BalikBayan20 from '@/assets/images/balikBayan/PPW20.jpg';


// Delivery
import Delivery02 from '@/assets/images/deliveryImages/Delivery02.mp4';
import Delivery14 from '@/assets/images/deliveryImages/Delivery14.mp4';
import Delivery15 from '@/assets/images/deliveryImages/Delivery15.mp4';

const boxImages = [
    BalikBayan16,
    BalikBayan17,
    BalikBayan18,
    BalikBayan19,
    BalikBayan20
]

const deliveryVideos = [
    Delivery02,
    Delivery14,
    Delivery15
]
</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">
            <div class="p-6 lg:p-8 bg-white rounded-2xl shadow-sm">
                <!-- Header -->
                <div class="text-center space-y-2 mb-10">
                    <h1 class="font-extrabold text-3xl md:text-4xl text-gray-800">
                        Used Household Goods Shipment
                    </h1>
                    <h3 class="font-medium text-lg md:text-xl text-gray-600">
                        Retiring in the Philippines as Returning Resident?
                    </h3>
                </div>

                <!-- Description -->
                <div class="space-y-6 text-gray-700 leading-relaxed text-justify mb-10">
                    Pinoy Pride Worldwide LLC is your best choice for shipping all your used household goods and
                    personal effects in one (1) container load—safely delivered anywhere in the Philippines!
                </div>

                <!-- FAQ Accordion Section -->
                <div class="space-y-4 mb-12">
                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" checked />
                        <div class="collapse-title font-semibold">
                            1. Is it safe to send my Balikbayan Box to your company?
                        </div>
                        <div class="collapse-content text-sm">
                            Yes, it is safe to ship your household goods with us. <strong>Pinoy Pride Worldwide
                                LLC</strong>
                            is a legitimate, bonded, and insured freight forwarding company. We are fully licensed under
                            the
                            <strong>US Federal Maritime Commission (FMC-OTI-NVOCC #033592N)</strong> and are willing to
                            sign a <strong>Memorandum
                                of Agreement (MOA)</strong> to protect the interests of both parties, ensuring your
                            shipment is
                            handled securely from start to finish.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            2. What are the Requirements for Shipping Used Household Goods to the Philippines?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="mb-3">To qualify for shipment of your used household goods and personal effects,
                                the following
                                documents and conditions are required:</p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    Affidavit of Undertaking duly signed by the shipper.
                                </li>
                                <li>
                                    Copy of a valid US & Philippine passport of the shipper/sender, showing proof of
                                    at least one (1) year of accumulated residence in the last three (3) years from the
                                    date of filing the application.
                                </li>
                                <li>
                                    Valid U.S. ID (e.g., driver’s license).
                                </li>
                                <li>
                                    Dual Citizenship Certificate (Oath of Allegiance), if applicable.
                                </li>
                                <li>
                                    Green Card/Permanent Resident Card, if applicable.
                                </li>
                                <li>
                                    Tax Identification Number (TIN)
                                </li>
                                <li>
                                    Shipper and consignee must be the same individual (one person only).
                                </li>
                                <li>
                                    Detailed packing list with item values, ensuring all items loaded in the container
                                    match the quantities listed.S
                                </li>
                                <li>
                                    Photos of the items, confirming that everything being shipped is used.
                                </li>
                                <li>
                                    Videos of the loading process for verification purposes.
                                </li>
                                <li>
                                    Consignee’s presence in the Philippines:
                                    <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>
                                            The consignee must arrive in the Philippines 2–3 weeks prior to the
                                            vessel’s arrival.
                                        </li>
                                        <li>
                                            It is preferable for the consignee to be in the country when the container
                                            arrives, to personally oversee unloading and customs clearance.
                                        </li>
                                        <li>
                                            If the consignee cannot be present, a designated contact person—preferably
                                            a relative—must be available to handle matters on their behalf.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            3. How much is the fee for one (1) 20-foot or one (1) 40-foot container?
                        </div>
                        <div class="collapse-content text-sm">
                            To provide you with an accurate quotation, please send us the exact address of your loading
                            location in the U.S. and the exact destination address in the Philippines.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            4. If we agree on the fee, who will load our household goods into the container, and will it
                            be delivered directly to our address in the Philippines?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="mb-3">The quotation I will provide you—referred to as the contract price—already
                                includes the following services:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Trucking delivery of the container from the container yard to your U.S. address
                                    for loading, and transport to the port of origin.</li>
                                <li>Packaging, wrapping, moving, crating (if applicable), and loading your household
                                    goods into the container.</li>
                                <li>U.S. documentation and port charges.</li>
                                <li>Ocean freight from the port of origin in the U.S. to the port of destination in
                                    Manila.</li>
                                <li>Philippines port charges and customs clearance.</li>
                                <li>Shipping line destination fees.</li>
                                <li>Duties and taxes for all used items.</li>
                                <li>Professional broker’s fees.</li>
                                <li>Special Agreed Fees (SAF) (if required).</li>
                                <li>Final delivery of the container directly to your address anywhere in the
                                    Philippines.</li>
                            </ul>
                            <div class="bg-blue-50 border-l-4 my-3 border-blue-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    Note: The shipper/consignee may arrange manpower for unloading the items from the
                                    container to avoid incurring a fee of Php 30,000.00 per day after the first six
                                    hours of free unloading time, classified as Truck Detention.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            5. How long is the estimated shipping time?
                        </div>
                        <div class="collapse-content text-sm">
                            The estimated shipping time ranges from 2 to 3 months, depending on various factors.
                            Real-time online tracking is available to keep you informed of any updates or delays. Please
                            note that delivery times may vary due to weather conditions, local holidays, pick-up
                            locations, port congestion, or customs clearance procedures.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            6. Can I track the status of my container?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="text-gray-700">
                                Yes. Click the
                                <RouterLink to="/track" class="underline text-blue-500">Track</RouterLink>
                                page at the upper right-hand corner and enter your complete invoice/tracking number
                                shown on
                                your invoice.
                                You may also contact our customer service through the
                                <RouterLink to="/contact" class="underline text-blue-500">Contact</RouterLink>
                                page to inquire about the status of your shipment.
                            </p>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            7. Is it okay if my sister and I ship our used household goods together in one container
                            load so we can save more by dividing the fee between us?
                        </div>
                        <div class="collapse-content text-sm">
                            Yes, that’s possible — but it requires approval from Pinoy Pride Worldwide management.
                            Please contact us first so we can provide you with the requirements and guidelines on how to
                            proceed.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            8. What are the payment options?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="mb-3">Payment Options:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li>
                                    A 50% down payment of the contract price is required upon booking a container. No
                                    down payment, no container delivery.
                                </li>
                                <li>
                                    If the shipper/sender cancels or withdraws from the shipment for any reason, 50%
                                    of the down payment is non-refundable.
                                </li>
                                <li>
                                    The remaining 50% balance must be paid after the container has been picked up.
                                    Failure to pay may result in the container not being loaded onto the vessel.
                                </li>
                                <li>
                                    All payments must be made via bank transfer, Zelle, or personal check payable to
                                    Pinoy Pride Worldwide LLC. (Billing details will be provided upon confirmation of
                                    the booking.)
                                </li>
                                <li>
                                    Non-compliance with these terms may result in penalties, including the
                                    non-delivery of the shipment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center">
                    <button class="btn btn-primary">Get a Container Quote</button>
                </div>
            </div>

            <!-- Right Side -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
                <h2 class="text-lg font-bold text-gray-800 mb-4 text-center">
                    Watch our factual and documented loading and successful deliveries of Returning Resident Household
                    Goods!
                </h2>
                <div class="space-y-4">
                    <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                        <BalikBayanCarousel :images="boxImages" />
                    </div>
                    <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                        <DeliveryCarousel :videos="deliveryVideos" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>