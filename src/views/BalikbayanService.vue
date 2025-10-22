<script setup>
import BalikBayanCarousel from '@/components/aboutComponents/BalikBayanCarousel.vue';
import DeliveryCarousel from '@/components/aboutComponents/DeliveryCarousel.vue';

// Balikbayan Boxes
import BalikBayan01 from '@/assets/images/balikBayan/PPW01.png';
import BalikBayan02 from '@/assets/images/balikBayan/PPW02.png';
import BalikBayan03 from '@/assets/images/balikBayan/PPW03.png';
import BalikBayan04 from '@/assets/images/balikBayan/PPW04.png';
import BalikBayan05 from '@/assets/images/balikBayan/PPW05.png';
import BalikBayan06 from '@/assets/images/balikBayan/PPW06.png';
import BalikBayan07 from '@/assets/images/balikBayan/PPW07.jpg';
import BalikBayan08 from '@/assets/images/balikBayan/PPW08.png';
import BalikBayan09 from '@/assets/images/balikBayan/PPW09.jpg';
import BalikBayan10 from '@/assets/images/balikBayan/PPW10.jpg';
import BalikBayan11 from '@/assets/images/balikBayan/PPW11.jpg';

// Delivery
import Delivery06 from '@/assets/images/deliveryImages/Delivery06.mp4';
import Delivery07 from '@/assets/images/deliveryImages/Delivery07.mp4';

const boxImages = [
    BalikBayan01,
    BalikBayan02,
    BalikBayan03,
    BalikBayan04,
    BalikBayan05,
    BalikBayan06,
    BalikBayan07,
    BalikBayan08,
    BalikBayan09,
    BalikBayan10,
    BalikBayan11,
]

const deliveryVideos = [
    Delivery06,
    Delivery07,
]

</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">
            <!-- Left Side -->
            <div class="p-6 lg:p-8 bg-white rounded-2xl shadow-sm">
                <!-- Header -->
                <div class="text-center space-y-2 mb-10">
                    <h1 class="font-extrabold text-3xl md:text-4xl text-gray-800">
                        Balikbayan Box Shipment
                    </h1>
                    <h3 class="font-medium text-lg md:text-xl text-gray-600">
                        Send Love Home in the Safe and Easy Way!
                    </h3>
                </div>

                <!-- Description -->
                <div class="space-y-6 text-gray-700 leading-relaxed text-justify mb-10">
                    <p>
                        A Balikbayan Box is more than just a package — it’s a symbol of love,
                        hard work, and dedication. Every item inside represents your care and
                        sacrifices for your loved ones back home. That’s why at
                        <span class="font-semibold text-gray-800">Pinoy Pride Worldwide LLC</span>,
                        we treat every box as if it were our own — with the highest level of
                        care, safety, and respect.
                    </p>
                    <p>
                        Looking for a consolidator and forwarding company for your gifts or
                        pasalubong going to the Philippines? Look no further!
                        <span class="font-semibold text-gray-800">Pinoy Pride Worldwide LLC</span>
                        is your reliable and trusted partner for fast, secure, and affordable
                        Balikbayan Box shipping.
                    </p>
                    <p>
                        We offer regular, large, X-large, jumbo, and odd/any sized boxes,
                        deliver them right to your doorstep, and pick them up once you’re
                        ready to send them off.
                    </p>
                </div>

                <!-- FAQ Accordion Section -->
                <div class="space-y-4 mb-12">
                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" checked />
                        <div class="collapse-title font-semibold">
                            1. Is it safe to send my Balikbayan Box to your company?
                        </div>
                        <div class="collapse-content text-sm">
                            With Pinoy Pride Worldwide LLC, sending your Balikbayan Box is
                            SAFE. Our company policy ensures that all boxes are properly strapped and secured before
                            shipping
                            them to the Philippines.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            2. How much is the fee for sending my box to the Philippines?
                        </div>
                        <div class="collapse-content text-sm">
                            Pinoy Pride Worldwide LLC has different locations/outlets, box sizes, and prices. For more
                            information about box prices and sizes, click the “Contact” page at the upper right-hand
                            corner
                            and
                            call the number assigned to your location, or click “Get a Quote” on the “Home” page.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            3. What are the allowed and prohibited items to send to the Philippines?
                        </div>
                        <div class="collapse-content text-sm">
                            For more information regarding
                            <RouterLink class="underline text-blue-500">Prohibited Items</RouterLink>
                            click the “Services” at the upper right-hand corner.
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            4. Can I track the status of my box?
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

                    <div
                        class="collapse collapse-arrow bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold text-gray-800">
                            5. How long will it take for my box to be delivered to my address in the Philippines?
                        </div>

                        <div class="collapse-content text-gray-700 text-sm leading-relaxed space-y-4">
                            <p>
                                The estimated shipping time ranges from
                                <span class="font-semibold text-gray-800">2 to 3 months</span>, depending
                                on various factors. Real-time online tracking is available to keep you
                                updated on any changes or delays.
                            </p>

                            <p>
                                Please note that delivery times may vary due to weather conditions, local
                                holidays, pick-up locations, port congestion, or customs clearance
                                procedures.
                            </p>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <h4 class="font-semibold text-gray-800 mb-2">Time Frame</h4>
                                <p class="text-xs text-gray-600 mb-2 italic">
                                    (Estimated delivery time after arrival at our logistics warehouse)
                                </p>
                                <ul class="list-disc list-inside space-y-1 text-gray-700">
                                    <li><span class="font-medium text-gray-800">Metro Manila:</span> 1–2 weeks</li>
                                    <li><span class="font-medium text-gray-800">Luzon (North & South):</span> 2–4 weeks
                                    </li>
                                    <li>
                                        <span class="font-medium text-gray-800">Visayas & Mindanao:</span>
                                        4–6 weeks
                                        <span class="text-gray-600 text-xs">(via Manila → Cebu → various
                                            provinces)</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <h4 class="font-semibold text-gray-800 mb-2">Measures for Prompt Delivery</h4>
                                <p class="text-xs text-gray-600 mb-2 italic">
                                    (Ways to ensure fast and reliable delivery service)
                                </p>
                                <p>
                                    To avoid delays, it is important for the <strong>consignee</strong> to provide a
                                    complete
                                    delivery address, including <strong>Phase number, Lot number, Block number, Street,
                                        Subdivision, Sitio/Barangay, and City/Province</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            6. What if my box gets lost? Is there insurance of my box?
                        </div>
                        <div class="collapse-content text-sm space-y-3 text-gray-700">
                            <p>
                                Yes. In the event of total loss of the package due to circumstances beyond our
                                control—such
                                as
                                theft or fire at the warehouse, accidents involving the delivery truck, or the sinking
                                of
                                the ship—
                                the <strong>maximum liability is $200 per package</strong>.
                            </p>
                            <p>
                                This compensation is provided after the insurance claim is processed. For more coverage,
                                we
                                recommend
                                purchasing <strong>optional insurance</strong> for an additional fee based on your
                                declared
                                item value.
                            </p>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            7. Is there a weight limit for Balikbayan Box?
                        </div>
                        <div class="collapse-content text-sm text-gray-700">
                            <p>
                                There is no specific weight restriction, but the box should not be so heavy that one
                                person
                                cannot lift it, as this may cause damage to the box.
                            </p>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            8. Can we send furniture or appliances like a dining table, refrigerator, and others?
                        </div>
                        <div class="collapse-content text-sm text-gray-700 space-y-3">
                            <p>
                                Yes, you can, if you place them inside a box since these items fall under the Balikbayan
                                Box
                                category. However, if you wish to ship an item with sentimental value that cannot be
                                boxed
                                (for
                                example, a large piece of furniture), you may still do so with the approval of Pinoy
                                Pride
                                Worldwide management.
                            </p>
                            <p>
                                If you plan to ship all your used household goods such as furniture, cabinets, couches,
                                TVs,
                                refrigerators, and more, you can save more by shipping them together in one container
                                load
                                under
                                the <strong>Returning Resident</strong> category.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
                <h2 class="text-lg font-bold text-gray-800 mb-4 text-center">
                    Watch our factual and documented loading and successful deliveries of Balikbayan boxes!
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
