<script setup>
import BalikBayanCarousel from '@/components/aboutComponents/BalikBayanCarousel.vue';

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
import BalikBayan12 from '@/assets/images/balikBayan/PPW12.jpg';
import BalikBayan13 from '@/assets/images/balikBayan/PPW13.jpg';
import BalikBayan14 from '@/assets/images/balikBayan/PPW14.jpg';
import BalikBayan15 from '@/assets/images/balikBayan/PPW15.jpg';

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
    BalikBayan12,
    BalikBayan13,
    BalikBayan14,
    BalikBayan15,
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

                <!-- Unified Card Style -->
                <div class="space-y-16 mt-16">

                    <!-- SOC Card -->
                    <div
                        class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div class="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                        <div class="p-8 md:p-10 space-y-5">
                            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                🚢 (SOC) - Shipper Own Container
                            </h1>

                            <p class="text-gray-700 leading-relaxed">
                                Do you have your own container ready for shipment?
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                No problem! <span class="font-semibold text-gray-900">Pinoy Pride Worldwide LLC</span>
                                proudly offers <span class="font-semibold">Shipper-Owned Container (SOC)</span>
                                services for customers who already have their own loaded containers and want to ship
                                them
                                to the Philippines.
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                At <span class="font-semibold text-gray-900">Pinoy Pride Worldwide LLC</span>, we make
                                it
                                easy, secure, and hassle-free to ship your own container loaded with your used household
                                goods and personal effects anywhere in the Philippines!
                            </p>

                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    <strong>Important:</strong> Your container must be
                                    <em>“Approved for Transport Under Customs Seal”</em> as part of our requirements.
                                    Provide both sender and consignee addresses for an accurate quote.
                                </p>
                            </div>

                            <div class="pt-5 border-t border-gray-200">
                                <p class="text-gray-800 font-medium">
                                    📞 Contact: <span class="text-blue-600 font-semibold">(253) 282-9628</span>
                                </p>
                                <p class="text-gray-800 font-medium">
                                    📧 Email:
                                    <a href="https://mail.google.com/mail/?view=cm&to=pinoyprideworldwide@gmail.com"
                                        target="_blank" class="text-blue-600 underline hover:text-blue-700 transition">
                                        pinoyprideworldwide@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- FCL Card -->
                    <div
                        class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div class="h-2 bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
                        <div class="p-8 md:p-10 space-y-5">
                            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                📦 (FCL) - Full Container Load
                            </h1>

                            <p class="text-gray-700 text-center leading-relaxed font-medium">
                                💰 Businesses & Commercial Goods: (Import/Export) – USA ⇄ Philippines
                            </p>
                            <p class="text-gray-700 text-center leading-relaxed">
                                🚢 Ship Your Commercial Items with Confidence!
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                You can ship commercial items in one (1) full container load (FCL) to the Philippines —
                                and
                                vice versa to the USA — through <strong>Pinoy Pride Worldwide LLC</strong>.
                            </p>

                            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    ✨ <strong>Single Owner Shipping (SOS):</strong> A dedicated container exclusively
                                    for
                                    your brand-new or used products. Perfect for entrepreneurs, business owners, and
                                    individuals who want to start, expand, or grow their business opportunities between
                                    the
                                    Philippines and the USA.
                                </p>
                            </div>

                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>✅ Hassle-free documentation</li>
                                <li>✅ Safe and secure shipment</li>
                                <li>✅ Door-to-door coordination</li>
                                <li>✅ Ideal for business expansion</li>
                            </ul>

                            <p class="text-gray-700 leading-relaxed">
                                <strong>Pinoy Pride Worldwide</strong> — Your Trusted Partner in Global Shipping and
                                Business
                                Expansion.
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                Whether you’re importing or exporting, we make the process smooth and compliant. Just
                                secure
                                all the necessary requirements and follow the <strong>Bureau of Customs (BOC)</strong>
                                rules
                                and policies — and we’ll handle the rest.
                            </p>

                            <div class="pt-5 border-t border-gray-200">
                                <p class="text-gray-800 font-medium">
                                    📞 Contact: <span class="text-blue-600 font-semibold">(253) 282-9628</span>
                                </p>
                                <p class="text-gray-800 font-medium">
                                    📧 Email:
                                    <a href="https://mail.google.com/mail/?view=cm&to=pinoyprideworldwide@gmail.com"
                                        target="_blank" class="text-blue-600 underline hover:text-blue-700 transition">
                                        pinoyprideworldwide@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- LCL Card -->
                    <div
                        class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div class="h-2 bg-gradient-to-r from-teal-600 to-teal-400"></div>
                        <div class="p-8 md:p-10 space-y-5">
                            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                📦 (LCL) – Less Than Container Load
                            </h1>

                            <p class="text-gray-700 text-center leading-relaxed font-medium">
                                💰 For General Merchandise: (Import/Export) – USA ⇄ Philippines
                            </p>
                            <p class="text-gray-700 text-center leading-relaxed">
                                🚢 Save Costs with Shared Container Shipping!
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                Save more by sharing container space with other shippers if you cannot fill an entire
                                container.
                            </p>

                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>✨ Ideal for entrepreneurs</li>
                                <li>💼 Great for individuals starting a business</li>
                            </ul>

                            <p class="text-gray-700 leading-relaxed">
                                At Pinoy Pride Worldwide, we make shipping easy, affordable, and compliant with all
                                applicable laws and regulations.
                            </p>

                            <p class="text-gray-700 leading-relaxed">
                                For goods or commodities that are sensitive in nature, we provide exclusive container
                                loading for shipments not exceeding 5 cubic meters (cbm) or 2 tons of equivalent weight.
                            </p>

                            <div class="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    Note: Sensitive commodities are subject to premium applicable rates.
                                </p>
                            </div>

                            <div class="pt-5 border-t border-gray-200">
                                <p class="text-gray-800 font-medium">
                                    📞 Contact: <span class="text-blue-600 font-semibold">(253) 282-9628</span>
                                </p>
                                <p class="text-gray-800 font-medium">
                                    📧 Email:
                                    <a href="https://mail.google.com/mail/?view=cm&to=pinoyprideworldwide@gmail.com"
                                        target="_blank" class="text-blue-600 underline hover:text-blue-700 transition">
                                        pinoyprideworldwide@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Mix Card -->
                    <div
                        class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div class="h-2 bg-gradient-to-r from-teal-600 to-teal-400"></div>
                        <div class="p-8 md:p-10 space-y-5">
                            <h1 class="text-lg md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                🚢 For Mix shipments:
                            </h1>

                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    🔄 Combine of brand-new products with used household goods, personal
                                    effects, tools, car parts, and more.
                                </li>
                                <li>
                                    💰 Flexible Rates – Pay only for the space you use – per cubic meter (CBM)
                                </li>
                                <li>
                                    🔒Sensitive goods – Premium CBM rate applies
                                </li>
                                <li>
                                    📦Non-sensitive goods – Standard CBM rate
                                </li>
                            </ul>

                            <h1 class="text-lg md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                🚛 INTERSTATE
                            </h1>

                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>Yes, we do Interstate moving within the USA.</li>
                                <li>
                                    Pinoy Pride Worldwide — Your Trusted Partner in Interstate moving and Business
                                    Expansion!
                                </li>
                            </ul>

                            <h1 class="text-lg md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                🚢 Global Container Shipping
                            </h1>

                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>Yes, we do ship a container from USA to any part of the globe and vice versa to USA.
                                </li>
                                <li>
                                    Pinoy Pride Worldwide — Your Trusted Partner in Global Shipping and Business
                                    Expansion!
                                </li>
                            </ul>

                            <h1 class="text-lg md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                ✈️ Air Cargo – <span class="italic">Launching Soon!</span>
                            </h1>

                            <div class="pt-5 border-t border-gray-200">
                                <p class="text-gray-800 font-medium">
                                    📞 Contact: <span class="text-blue-600 font-semibold">(253) 282-9628</span>
                                </p>
                                <p class="text-gray-800 font-medium">
                                    📧 Email:
                                    <a href="https://mail.google.com/mail/?view=cm&to=pinoyprideworldwide@gmail.com"
                                        target="_blank" class="text-blue-600 underline hover:text-blue-700 transition">
                                        pinoyprideworldwide@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
                <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Watch How Our Balikbayan Box Shipping Works
                </h2>
                <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                    <BalikBayanCarousel :images="boxImages" />
                </div>
            </div>
        </div>
    </section>
</template>
