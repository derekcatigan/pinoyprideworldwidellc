<script setup>
import { ref } from 'vue';
import BalikBayanCarousel from '@/components/aboutComponents/BalikBayanCarousel.vue';
import DeliveryCarousel from '@/components/aboutComponents/DeliveryCarousel.vue';

// Balikbayan Boxes
import BalikBayan16 from '@/assets/images/balikBayan/PPW16.jpg';
import BalikBayan17 from '@/assets/images/balikBayan/PPW17.jpg';
import BalikBayan18 from '@/assets/images/balikBayan/PPW18.jpg';
import BalikBayan19 from '@/assets/images/balikBayan/PPW19.jpg';
import BalikBayan20 from '@/assets/images/balikBayan/PPW20.jpg';

// Delivery Videos
import Delivery02 from '@/assets/images/deliveryImages/Delivery02.mp4';
import Delivery14 from '@/assets/images/deliveryImages/Delivery14.mp4';
import Delivery15 from '@/assets/images/deliveryImages/Delivery15.mp4';

const boxImages = [
    BalikBayan16,
    BalikBayan17,
    BalikBayan18,
    BalikBayan19,
    BalikBayan20
];

const deliveryVideos = [
    Delivery02,
    Delivery14,
    Delivery15
];

const language = ref('en'); // default language

const texts = {
    en: {
        headerTitle: "Used Household Goods Shipment",
        headerSubtitle: "Retiring in the Philippines as Returning Resident?",
        description: "Pinoy Pride Worldwide LLC is your best choice for shipping all your used household goods and personal effects in one (1) container load—safely delivered anywhere in the Philippines!",
        rightTitle: "Watch our factual and documented loading and successful deliveries of Returning Resident Household Goods!",
        faqs: [
            {
                question: "1. Is it safe to send my Balikbayan Box to your company?",
                answer: "Yes, it is safe to ship your household goods with us. Pinoy Pride Worldwide LLC is a legitimate, bonded, and insured freight forwarding company. We are fully licensed under the US Federal Maritime Commission (FMC-OTI-NVOCC #033592N) and are willing to sign a Memorandum of Agreement (MOA) to protect the interests of both parties, ensuring your shipment is handled securely from start to finish."
            },
            {
                question: "2. What are the Requirements for Shipping Used Household Goods to the Philippines?",
                answer: "To qualify for shipment, you need: Affidavit of Undertaking, valid US & Philippine passports, US ID, Dual Citizenship Certificate (if applicable), Green Card (if applicable), TIN, packing list with photos and videos, and the presence of the consignee in the Philippines."
            },
            {
                question: "3. How much is the fee for one (1) 20-foot or one (1) 40-foot container?",
                answer: "To provide an accurate quotation, please send your exact U.S. loading address and Philippine destination address."
            },
            {
                question: "4. Who loads the goods and will it be delivered directly to my address?",
                answer: "The quotation includes trucking, loading, packaging, port charges, ocean freight, customs clearance, shipping line fees, duties & taxes, broker fees, and final delivery. Note: unloading beyond 6 hours may incur Php 30,000/day as Truck Detention."
            },
            {
                question: "5. How long is the estimated shipping time?",
                answer: "Estimated shipping time is 2–3 months. Real-time tracking is available, but delivery may vary due to weather, holidays, port congestion, or customs."
            },
            {
                question: "6. Can I track the status of my container?",
                answer: "Yes. Use the Track page or Contact page to inquire using your invoice/tracking number."
            },
            {
                question: "7. Can my sister and I share one container to save costs?",
                answer: "Yes, with approval from Pinoy Pride Worldwide management. Contact us first for requirements and guidelines."
            },
            {
                question: "8. What are the payment options?",
                answer: "50% down payment upon booking, non-refundable if canceled. Remaining 50% after container pick-up. Payments via bank transfer, Zelle, or personal check."
            }
        ],
        contactPhone: "(253) 282-9628",
        contactEmail: "pinoyprideworldwide@gmail.com"
    },

    tl: {
        headerTitle: "Pagpapadala ng Ginamit na Kagamitang Pantahanan",
        headerSubtitle: "Nagreretiro sa Pilipinas bilang Returning Resident?",
        description: "Pinoy Pride Worldwide LLC ang pinakamahusay na pagpipilian para sa pagpapadala ng lahat ng iyong ginamit na gamit sa bahay at personal na kagamitan sa isang (1) container load—ligtas na maihahatid saan man sa Pilipinas!",
        rightTitle: "Panoorin ang aming mga dokumentadong loading at matagumpay na delivery ng Ginamit na Kagamitang Pantahanan ng Returning Resident!",
        faqs: [
            {
                question: "1. Ligtas ba na ipadala ang aking Balikbayan Box sa inyong kumpanya?",
                answer: "Oo, ligtas ang pagpapadala ng iyong gamit sa bahay kasama ang Pinoy Pride Worldwide LLC. Kami ay lehitimo, bonded, at insured na freight forwarding company, lisensyado sa US Federal Maritime Commission (FMC-OTI-NVOCC #033592N) at handang pirmahan ang Memorandum of Agreement (MOA) upang protektahan ang interes ng parehong partido."
            },
            {
                question: "2. Ano ang mga Kinakailangan para sa Pagpapadala ng Ginamit na Kagamitang Pantahanan sa Pilipinas?",
                answer: "Kinakailangan: Affidavit of Undertaking, valid US & Philippine passports, US ID, Dual Citizenship Certificate (kung naaangkop), Green Card (kung naaangkop), TIN, packing list na may photos at videos, at presensya ng consignee sa Pilipinas."
            },
            {
                question: "3. Magkano ang bayad para sa 20-foot o 40-foot container?",
                answer: "Para sa tamang quotation, pakisend ang eksaktong address ng pag-load sa U.S. at destinasyon sa Pilipinas."
            },
            {
                question: "4. Sino ang maglo-load ng gamit at ihahatid ba ito sa aking address?",
                answer: "Kasama sa quotation ang trucking, pag-load, packaging, bayarin sa port, ocean freight, customs clearance, shipping line fees, duties & taxes, broker fees, at final delivery. Paalala: labas sa 6 na oras ng libreng unloading ay Php 30,000/day bilang Truck Detention."
            },
            {
                question: "5. Gaano katagal ang estimated shipping time?",
                answer: "Estimated shipping time ay 2–3 buwan. May real-time tracking, ngunit maaaring maapektuhan ng panahon, holidays, port congestion, o customs."
            },
            {
                question: "6. Puwede ko bang i-track ang status ng aking container?",
                answer: "Oo. Gamitin ang Track page o Contact page gamit ang iyong invoice/tracking number."
            },
            {
                question: "7. Puwede ba naming pagsamahin ng kapatid ko ang aming gamit sa isang container para makatipid?",
                answer: "Oo, ngunit kailangan ng aprubal mula sa Pinoy Pride Worldwide management. Makipag-ugnayan muna sa amin para sa mga requirements at guidelines."
            },
            {
                question: "8. Ano ang mga payment options?",
                answer: "50% down payment sa booking, non-refundable kung kanselahin. Natitirang 50% pagkatapos ma-pickup ang container. Bayad sa pamamagitan ng bank transfer, Zelle, o personal check."
            }
        ],
        contactPhone: "(253) 282-9628",
        contactEmail: "pinoyprideworldwide@gmail.com"
    }
};

function toggleLanguage(lang) {
    language.value = lang;
}
</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">

            <!-- Left Column -->
            <div class="p-6 bg-white rounded-2xl shadow-sm space-y-6">

                <!-- LANGUAGE SELECT -->
                <div class="w-full flex justify-end mb-2">
                    <select @change="toggleLanguage($event.target.value)" class="select w-40" :value="language">
                        <option value="en">English</option>
                        <option value="tl">Tagalog</option>
                    </select>
                </div>

                <!-- Header -->
                <div class="text-center mb-4 space-y-2">
                    <h1 class="text-3xl font-extrabold text-gray-800">{{ texts[language].headerTitle }}</h1>
                    <p v-if="texts[language].headerSubtitle" class="text-gray-600">{{ texts[language].headerSubtitle }}
                    </p>
                </div>

                <!-- Description -->
                <p class="text-gray-700 mb-6 text-justify">{{ texts[language].description }}</p>

                <!-- FAQ Accordion -->
                <div class="space-y-4">
                    <div v-for="(faq, index) in texts[language].faqs" :key="index"
                        class="collapse collapse-arrow border border-gray-200 rounded-md">
                        <input type="radio" name="accordion" :checked="index === 0" />
                        <div class="collapse-title font-semibold">{{ faq.question }}</div>
                        <div class="collapse-content text-gray-700">{{ faq.answer }}</div>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="pt-5 border-t border-gray-200">
                    <p class="text-gray-800 font-medium">
                        📞 Contact: <span class="text-blue-600 font-semibold">{{ texts[language].contactPhone }}</span>
                    </p>
                    <p class="text-gray-800 font-medium">
                        📧 Email:
                        <a :href="`mailto:${texts[language].contactEmail}`" target="_blank"
                            class="text-blue-600 underline hover:text-blue-700 transition break-all">
                            {{ texts[language].contactEmail }}
                        </a>
                    </p>
                </div>
            </div>

            <!-- Right Column (Title + Carousels) -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24 space-y-4 w-full">
                <h2 class="text-lg font-bold text-gray-800 mb-4 text-center">
                    {{ texts[language].rightTitle }}
                </h2>
                <div class="space-y-4 w-full">
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
