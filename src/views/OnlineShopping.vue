<script setup>
import { ref } from 'vue';
import ImageCarousel from '@/components/ImageCarousel.vue';

import Clothing from '@/assets/images/stockImages/Clothing.jpg'
import Gadgets from '@/assets/images/stockImages/Gadgets.jpg'
import Purse from '@/assets/images/stockImages/Purse.jpg'
import Shoes from '@/assets/images/stockImages/Shoes.jpg'
import Vitamins from '@/assets/images/stockImages/Vitamins.jpg'
import CarParts from '@/assets/images/stockImages/Car Parts.jpg'

const Images = [
    Clothing,
    Gadgets,
    Purse,
    Shoes,
    Vitamins,
    CarParts,
];

const language = ref('en'); // default language

// Translations (structured using sections: [])
const texts = {
    en: {
        headerTitle: "🌎 Shop Online Worldwide — We’ll Handle the Rest!",
        headerSubtitle: "",
        sections: [
            {
                title: "",
                paragraphs: [
                    "Having your own U.S. address means total freedom to shop from any online store across the globe! However, most international sellers still don’t ship directly to the Philippines due to complex logistics and high shipping costs.",
                    "That’s where Pinoy Pride Worldwide LLC comes in. No need to rely on friends or relatives abroad — we make it simple, safe, and affordable for you to enjoy global online shopping.",
                    "As a trusted Filipino-American forwarding company, we handle everything from receiving, packing, to shipping your items — delivering them straight to your doorstep in the Philippines.",
                    "We’re here to make international shopping convenient, affordable, and truly for every Pinoy worldwide."
                ],
                list: []
            },
            {
                title: "🧭 How It Works (Mechanics)",
                paragraphs: [],
                list: []
            },
            {
                title: "STEP 1 — Create Your Account & Get Your FREE U.S. Address",
                paragraphs: [
                    "Sign up at Pinoy Pride Worldwide LLC and receive your very own U.S. shipping address — absolutely free! This address allows you to shop from any online store worldwide and have your orders shipped to any Pinoy Pride Worldwide outlet in the U.S."
                ],
                list: []
            },
            {
                title: "STEP 2 — Provide Your Philippine Delivery Information",
                paragraphs: [
                    "When registering, include your complete and accurate delivery details in the Philippines:"
                ],
                list: [
                    "House No., Block #, Phase #, Lot #, Sitio (if any)",
                    "Barangay, Municipality/City, and Zip Code",
                    "Contact Number and Email Address (if available)"
                ],
                paragraphsAfterList: [
                    "This ensures smooth and timely delivery right to your door."
                ]
            },
            {
                title: "STEP 3 — Delivery Procedure and Shipping Cost",
                paragraphs: [
                    "Before delivering your online order—from Amazon, Costco, Home Depot, Temu, or any other store—to your Pinoy Pride Worldwide address for shipment, please first send us the complete information about the items.",
                    "If possible, include an image of the box along with its measurements so we can provide you with an accurate shipping fee."
                ],
                list: []
            },
            {
                title: "STEP 4 — We Handle the Rest!",
                paragraphs: [
                    "Once your items arrive at our outlet, we’ll securely pack, process, and ship them directly to your home in the Philippines — safe, fast, and at a fraction of the usual cost.",
                    "You only pay for the box, packing, and shipping fees — just like shopping right here in the U.S.!"
                ],
                list: []
            },
            {
                title: "📦 Tracking Your Package",
                paragraphs: [
                    "You’ll receive an invoice with a unique tracking number so you can monitor your shipment anytime at 🌐 pinoyprideworldwide.com"
                ],
                list: []
            },
            {
                title: "✅ Apply Now — It’s Free!",
                paragraphs: [
                    "Click “APPLY NOW” on our website to set up your account. No membership fee required — simply fill out the form completely and attach a copy of your government-issued ID that matches your delivery address."
                ],
                list: []
            }
        ],
        contactPhone: "(253) 282-9628",
        contactEmail: "pinoyprideworldwide@gmail.com"
    },

    tl: {
        headerTitle: "🌎 Mamili Online Kahit Saan sa Mundo — Kami na ang Bahala sa Lahat!",
        headerSubtitle: "",
        sections: [
            {
                title: "",
                paragraphs: [
                    "Ang pagkakaroon ng sarili mong U.S. address ay nagbibigay sa’yo ng kalayaang mamili mula sa kahit anong online store sa buong mundo! Ngunit maraming international sellers ang hindi diretsong nagpapadala sa Pilipinas dahil sa komplikadong logistics at mataas na shipping cost.",
                    "Dito pumapasok ang Pinoy Pride Worldwide LLC. Hindi mo na kailangan umasa sa kaibigan o kamag-anak abroad — ginagawang simple, ligtas, at abot-kaya namin ang iyong international online shopping.",
                    "Bilang pinagkakatiwalaang Filipino-American forwarding company, kami ang bahala sa pag-receive, pag-pack, at pag-ship ng iyong items — diretsong ihahatid sa iyong bahay sa Pilipinas.",
                    "Nandito kami upang gawing madali, mura, at accessible sa bawat Pilipino ang international shopping."
                ],
                list: []
            },
            {
                title: "🧭 Paano Ito Gumagana (Mechanics)",
                paragraphs: [],
                list: []
            },
            {
                title: "STEP 1 — Gumawa ng Account at Kumuha ng LIBRE Mong U.S. Address",
                paragraphs: [
                    "Mag-sign up sa Pinoy Pride Worldwide LLC at makukuha mo ang sarili mong U.S. shipping address — LIBRE! Sa address na ito, maaari kang mamili sa kahit anong online store sa buong mundo at ipadala ang iyong orders sa anumang Pinoy Pride Worldwide outlet sa U.S."
                ],
                list: []
            },
            {
                title: "STEP 2 — Ilagay ang Iyong Kumpletong Delivery Information sa Pilipinas",
                paragraphs: [
                    "Sa pag-register, ilagay ang kumpleto at tamang delivery details mo sa Pilipinas:"
                ],
                list: [
                    "House No., Block #, Phase #, Lot #, Sitio (kung meron)",
                    "Barangay, Municipality/City, at Zip Code",
                    "Contact Number at Email Address (kung meron)"
                ],
                paragraphsAfterList: [
                    "Tinitiyak nito ang mabilis at maayos na delivery diretsong sa iyong bahay."
                ]
            },
            {
                title: "STEP 3 — Delivery Procedure at Shipping Cost",
                paragraphs: [
                    "Bago ihatid ang iyong online order — mula Amazon, Costco, Home Depot, Temu, o anumang store — sa Pinoy Pride Worldwide address para sa shipment, paki-send muna sa amin ang kumpletong impormasyon tungkol sa items.",
                    "Kung maaari, magpadala rin ng picture ng kahon kasama ang sukat nito upang mabigyan ka namin ng tamang shipping fee."
                ],
                list: []
            },
            {
                title: "STEP 4 — Kami na ang Bahala sa Lahat!",
                paragraphs: [
                    "Kapag dumating na ang items mo sa aming outlet, maingat naming ipo-pack, ipro-process, at ipapadala diretsong sa iyong bahay sa Pilipinas — ligtas, mabilis, at mas mura kaysa karaniwan.",
                    "Babayaran mo lamang ang box, packing, at shipping fees — parang namili ka lang mismo sa U.S.!"
                ],
                list: []
            },
            {
                title: "📦 I-Track ang Iyong Package",
                paragraphs: [
                    "Makakatanggap ka ng invoice na may unique tracking number upang ma-monitor mo ang iyong shipment anumang oras sa 🌐 pinoyprideworldwide.com"
                ],
                list: []
            },
            {
                title: "✅ Mag-Apply Na — Libre Ito!",
                paragraphs: [
                    "I-click ang “APPLY NOW” sa aming website upang gumawa ng account. Walang membership fee — punan lamang ang form nang kumpleto at mag-upload ng government-issued ID na kapareho ng iyong delivery address."
                ],
                list: []
            }
        ],
        contactPhone: "(253) 282-9628",
        contactEmail: "pinoyprideworldwide@gmail.com"
    }
};

// Function to switch language
function toggleLanguage(lang) {
    language.value = lang;
}
</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">

            <!-- Left Column -->
            <div class="p-6 bg-white rounded-2xl shadow-sm space-y-6">

                <!-- LANGUAGE SELECT (Top-right) -->
                <div class="w-full flex justify-end mb-2">
                    <select @change="toggleLanguage($event.target.value)" class="select w-40" :value="language">
                        <option value="en">English</option>
                        <option value="tl">Tagalog</option>
                    </select>
                </div>

                <!-- Content -->
                <div class="space-y-4 text-gray-800 leading-relaxed text-base">
                    <h1 class="text-2xl font-bold">{{ texts[language].headerTitle }}</h1>
                    <p v-if="texts[language].headerSubtitle" class="text-gray-600">{{ texts[language].headerSubtitle }}
                    </p>

                    <!-- Sections rendering -->
                    <div v-for="(section, sIndex) in texts[language].sections" :key="sIndex" class="space-y-4">
                        <!-- Section title -->
                        <h2 v-if="section.title" class="font-semibold">{{ section.title }}</h2>

                        <!-- Paragraphs -->
                        <div v-if="section.paragraphs && section.paragraphs.length">
                            <p v-for="(p, pIndex) in section.paragraphs" :key="`p-${sIndex}-${pIndex}`">{{ p }}</p>
                        </div>

                        <!-- List items -->
                        <ul v-if="section.list && section.list.length" class="list-disc list-inside ml-4">
                            <li v-for="(item, iIndex) in section.list" :key="`l-${sIndex}-${iIndex}`">{{ item }}</li>
                        </ul>

                        <!-- Optional paragraphs after list -->
                        <div v-if="section.paragraphsAfterList && section.paragraphsAfterList.length">
                            <p v-for="(p2, p2Index) in section.paragraphsAfterList" :key="`pa-${sIndex}-${p2Index}`">{{
                                p2 }}</p>
                        </div>

                        <hr class="border-gray-300" />
                    </div>
                </div>

                <!-- CONTACT INFO -->
                <div class="pt-5 border-t border-gray-200">
                    <p class="text-gray-800 font-medium">
                        📞 Contact:
                        <span class="text-blue-600 font-semibold">{{ texts[language].contactPhone }}</span>
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

            <!-- Right Side (Image Carousel) -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
                <div class="space-y-4">
                    <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                        <ImageCarousel :images="Images" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
