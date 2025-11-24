<script setup>
import { ref } from 'vue';

import ImageCarousel from '@/components/ImageCarousel.vue';

// Commercial Images
import CommercialImage01 from '@/assets/images/balikBayan/CommercialImage01.png';

const imageItems = [
    CommercialImage01
]

const language = ref('en'); // default language

// Translations
const texts = {
    en: {
        headerTitle: 'COMMERCIAL/BUSINESS (Import/Export) - USA ⇄ PHILIPPINES',
        headerSubtitle: '(Direct Factory Purchasing Program for Grocery Store Owners)',
        description: [
            'It is well known globally that one of the most stable and profitable ways to earn a sustainable income is through business—especially when it aligns with one’s passion.',
            'Among the most recognized and essential types of businesses worldwide are grocery stores, as people rely on their products every single day.',
            'We also understand that most, if not all, grocery store owners strive to offer lower prices than their competitors. However, many are unaware of how to purchase directly from factories, which forces them to buy from importers, even those located in distant states.',
            'This is where Pinoy Pride Worldwide LLC comes in. Our mission is to assist and guide business owners like you in purchasing directly from factories and manufacturers, helping you eliminate middlemen or importers. By doing so, you become your own importer-distributor, significantly reducing costs while opening opportunities to supply other grocery stores in your area as a wholesaler or retailer.',
            'As your Freight Forwarding Partner, Pinoy Pride Worldwide LLC provides only the shipping and delivery services—ensuring your purchased products are safely transported from the factory to your designated warehouse.',
            'Below are the most common questions and answers to help you understand how to start purchasing directly from factories through our program:'
        ],
        faqs: [
            {
                question: '1. How can we order directly from factories and have the items delivered to our warehouse?',
                answer: [
                    'First, you will need to contact the factories and request quotations for the products you wish to purchase. This allows you to compare prices and see the potential savings of buying directly.',
                    '(If you encounter difficulty in finding or communicating with factories, Pinoy Pride Worldwide LLC can assist you. Simply provide us with a list of the products you wish to purchase. Please ensure that these products are already marketed in the USA, which means they have passed Quality Control and are FDA-approved (Food and Drug Administration)—making them legal for sale in the U.S. market.)'
                ]
            },
            {
                question: '2. What are the requirements for shipping from the Philippines to the USA?',
                answer: [
                    'A. Export License: All factories or manufacturers that already market their products in the USA typically have an Export License, which is one of the key requirements to export their goods. (If the factory does not have one, we can use the Export License of our Logistics or Licensed Broker Partner in the Philippines.)',
                    'B. Import License: This is a requirement for the business owner or recipient who will receive the container of grocery products in the USA. Applying for an Import License in the USA is generally straightforward.',
                    'C. FDA Certificate: Since grocery items include food products, an FDA Certificate or License is also required for the recipient/importer. Fortunately, applying for an FDA Certificate in the USA is also a simple and manageable process.'
                ]
            },
            {
                question: '3. Once we have all the requirements and agree on the factory price, how can we determine our total product cost?',
                answer: [
                    'After knowing the factory price of your selected products, simply add the Ocean Freight (shipping) and trucking delivery cost from the U.S. port to your warehouse. This will allow you to compute your total landed cost per product, giving you a clear picture of your profit margin and savings compared to buying from importers.'
                ]
            },
            {
                question: '4. Once the products are ready for shipment, what are the shipping procedures?',
                answer: [
                    'It’s simple — just contact Pinoy Pride Worldwide LLC to book a container. We will then coordinate the dispatch of an empty container directly to the factory you ordered from. Your products will be loaded there, and once loading is completed, the container will be delivered to the port and prepared for shipment.',
                    'Note: A Packing List is required.'
                ]
            },
            {
                question: '5. What if I only want to order from a few factories with a small number of items each?',
                answer: [
                    'If you wish to purchase only 3–5 items from each of several factories (for example, four different factories) and together those items can fill one (1) 40-foot container, such an arrangement is still possible — however, it is not advisable.',
                    'Shipping one container that must collect products from multiple factories can be costly, unsafe, and prone to shipment delays. To help our clients operate more efficiently, we recommend the following practical and cost-effective options:',
                    'A. Consolidation Through our Logistics Partner Warehouse: A more practical option is for each factory to deliver the ordered items to our logistics partner warehouse in the Philippines, where we will consolidate and load all your products into a single container. Once ready, Pinoy Pride Worldwide LLC will handle the shipment and delivery to your designated warehouse in the USA.',
                    'B. Shared Container with Business Partners or Friends: If you have 3–5 business partners or friends who are also business owners — preferably located far from your area to avoid competition — you can share one (1) 40-foot container and order 3–5 items each from a single factory. All shipping costs and fees can be shared equally, helping everyone save money while maintaining efficiency.',
                    'If you wish to purchase additional items later, you and your group can book another container together. The purpose of this option is to make logistics simpler and more cost-effective by assigning one container per factory.',
                    'U.S. Delivery Options: Once the shipment arrives in the USA, Pinoy Pride Worldwide LLC can deliver the container directly to your warehouse, where your partners can conveniently pick up their products. If preferred, we can also deliver the container to your partners’ respective warehouses — although this option may incur additional delivery costs.'
                ]
            },
            {
                question: '6. For example, we are also interested in starting a business where we ship products from the USA to our customers in the Philippines. Is that also allowed?',
                answer: [
                    'Yes, absolutely — that is fully allowed and still falls under the Commercial/Business category.',
                    'The requirements, policies, and procedures outlined under the Business/Commercial section for shipments from your country to the USA are the same guidelines that apply when shipping from the USA to your country — only in reverse order.',
                    'This means you can confidently expand your operations both ways, whether you are importing products into the USA or exporting U.S. goods to the Philippines. Pinoy Pride Worldwide LLC is ready to assist you in setting up a smooth and compliant process for either direction of trade.'
                ]
            }
        ],
        contactPhone: '(253) 282-9628',
        contactEmail: 'pinoyprideworldwide@gmail.com'
    },
    tl: {
        headerTitle: 'KOMERSYAL/PAGNEGOSYO (Import/Export) - USA ⇄ PILIPINAS',
        headerSubtitle: '(Direktang Pagbili Mula sa Pabrika para sa May-ari ng Grocery Store)',
        description: [
            'Alam sa buong mundo na isa sa pinakamatatag at pinakamakapagkita ng paraan upang kumita ng sustainable income ay sa pamamagitan ng negosyo—lalo na kung ito ay ayon sa iyong hilig.',
            'Isa sa mga pinakakilalang at mahalagang uri ng negosyo sa buong mundo ay ang mga grocery store, dahil umaasa ang mga tao sa kanilang mga produkto araw-araw.',
            'Naiintindihan din namin na karamihan sa mga may-ari ng grocery store ay nagsusumikap na mag-alok ng mas mababang presyo kaysa sa kanilang mga kakompetensya. Gayunpaman, maraming hindi alam kung paano bumili nang direkta mula sa mga pabrika, kaya napipilitan silang bumili sa mga importer, kahit na mula sa malalayong estado.',
            'Dito pumapasok ang Pinoy Pride Worldwide LLC. Ang aming misyon ay tulungan at gabayan ang mga may-ari ng negosyo sa direktang pagbili mula sa mga pabrika at manufacturer, upang maiwasan ang mga middlemen o importer. Sa ganitong paraan, ikaw ay nagiging sarili mong importer-distributor, na lubos na nakababawas ng gastos habang nagbibigay ng oportunidad na mag-supply sa iba pang grocery stores bilang wholesaler o retailer.',
            'Bilang iyong Freight Forwarding Partner, ang Pinoy Pride Worldwide LLC ay nagbibigay lamang ng serbisyo sa pagpapadala at delivery—tinitiyak na ligtas ang transportasyon ng iyong mga biniling produkto mula sa pabrika hanggang sa iyong warehouse.',
            'Narito ang mga karaniwang tanong at sagot upang maunawaan mo kung paano magsimula ng direktang pagbili mula sa mga pabrika sa aming programa:'
        ],
        faqs: [
            {
                question: '1. Paano kami makakapag-order nang direkta mula sa mga pabrika at maideliver ang mga produkto sa aming warehouse?',
                answer: [
                    'Una, kailangan mong makipag-ugnayan sa mga pabrika at humingi ng quotation para sa mga produktong nais mong bilhin. Makakatulong ito upang ikumpara ang presyo at makita ang posibleng matitipid sa direktang pagbili.',
                    '(Kung nahihirapan ka sa paghahanap o pakikipag-ugnayan sa mga pabrika, makakatulong ang Pinoy Pride Worldwide LLC. Ibigay lamang sa amin ang listahan ng mga produktong nais mong bilhin. Siguraduhin na ang mga produktong ito ay na-market na sa USA, ibig sabihin ay pumasa sa Quality Control at FDA-approved (Food and Drug Administration)—na legal para ibenta sa U.S. market.)'
                ]
            },
            {
                question: '2. Ano ang mga requirements sa pagpapadala mula sa Pilipinas papuntang USA?',
                answer: [
                    'A. Export License: Lahat ng pabrika o manufacturer na na-market na ang kanilang produkto sa USA ay karaniwang may Export License, isa sa mga pangunahing requirement upang ma-export ang kanilang produkto. (Kung walang Export License ang pabrika, maaari naming gamitin ang Export License ng aming Logistics o Licensed Broker Partner sa Pilipinas.)',
                    'B. Import License: Ito ay requirement para sa may-ari ng negosyo o recipient na makakatanggap ng container ng grocery products sa USA. Madali lamang ang pag-apply ng Import License sa USA.',
                    'C. FDA Certificate: Dahil ang grocery items ay may kasamang pagkain, kailangan din ng FDA Certificate o License para sa recipient/importer. Madali rin ang proseso ng pag-apply ng FDA Certificate sa USA.'
                ]
            },
            {
                question: '3. Kapag kompleto na ang requirements at nagkasundo na sa presyo ng pabrika, paano matutukoy ang total product cost?',
                answer: [
                    'Pagkatapos malaman ang factory price ng mga napiling produkto, idagdag lamang ang Ocean Freight (shipping) at trucking delivery mula sa U.S. port papunta sa iyong warehouse. Makikita mo ang kabuuang landed cost bawat produkto, na magbibigay ng malinaw na larawan ng profit margin at matitipid kumpara sa pagbili sa importers.'
                ]
            },
            {
                question: '4. Kapag handa na ang produkto para sa shipment, ano ang proseso ng pagpapadala?',
                answer: [
                    'Simple lang — kontakin lamang ang Pinoy Pride Worldwide LLC para mag-book ng container. Aayusin namin ang dispatch ng empty container papunta sa pabrika. Lalagyan ang produkto, at pagkatapos ng loading, ide-deliver ang container sa port at ihahanda para sa shipment.',
                    'Note: Kailangan ng Packing List.'
                ]
            },
            {
                question: '5. Paano kung gusto ko lamang umorder sa ilang pabrika na may maliit na bilang ng items?',
                answer: [
                    'Kung gusto mong bumili ng 3–5 items mula sa bawat isa sa ilang pabrika (halimbawa apat na pabrika) at mapuno ang isang 40-foot container, posible pa rin ngunit hindi advisable.',
                    'Ang pagpapadala ng isang container mula sa maraming pabrika ay maaaring magastos, delikado, at prone sa delay. Upang mas mapadali, narito ang opsyon:',
                    'A. Consolidation sa Logistics Partner Warehouse: Mas praktikal na ipa-deliver ang items sa aming logistics partner warehouse sa Pilipinas, pagsamahin ang lahat sa isang container, at kami na ang magde-deliver sa iyong warehouse sa USA.',
                    'B. Shared Container kasama ang Business Partners o Kaibigan: Kung may 3–5 partners o kaibigan na business owners, maaari kayong mag-share ng 40-foot container at umorder ng 3–5 items bawat isa. Pantay ang gastos at mas efficient.',
                    'Kung gusto pang umorder ulit, puwede kayong mag-book ng isa pang container. Layunin nito ay gawing mas simple at cost-effective ang logistics.',
                    'U.S. Delivery Options: Kapag dumating ang shipment sa USA, puwede naming i-deliver ang container sa iyong warehouse o sa warehouse ng iyong partners (may dagdag na delivery cost).'
                ]
            },
            {
                question: '6. Halimbawa, gusto rin naming mag-negosyo kung saan magpapadala kami ng produkto mula USA papuntang Pilipinas. Pwede ba ito?',
                answer: [
                    'Oo, ganap na pinapayagan at kabilang pa rin sa Commercial/Business category.',
                    'Ang requirements, policies, at procedures sa Business/Commercial section mula sa inyong bansa papuntang USA ay pareho lang sa pagpapadala mula USA papuntang inyong bansa — pabaliktad lang.',
                    'Ibig sabihin, maaari mong palawakin ang operasyon sa parehong direksyon, maging sa pag-import ng produkto sa USA o pag-export ng U.S. goods sa Pilipinas. Handa ang Pinoy Pride Worldwide LLC na tulungan kang mag-set up ng smooth at compliant na proseso.'
                ]
            }
        ],
        contactPhone: '(253) 282-9628',
        contactEmail: 'pinoyprideworldwide@gmail.com'
    }
};

// Function to switch language
function toggleLanguage(lang) {
    language.value = lang;
}
</script>

<template>
    <section class="py-14 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">
            <div class="p-6 bg-white rounded-2xl shadow-sm">

                <div class="flex justify-end mb-4 max-w-7xl mx-auto">
                    <select @change="toggleLanguage($event.target.value)" class="select w-40">
                        <option value="en">English</option>
                        <option value="tl">Tagalog</option>
                    </select>
                </div>

                <!-- Header -->
                <div class="text-center space-y-2 mb-10">
                    <h1 class="font-extrabold text-3xl md:text-4xl text-gray-800">{{ texts[language].headerTitle }}</h1>
                    <h3 class="font-medium text-lg md:text-xl text-gray-600">{{ texts[language].headerSubtitle }}</h3>
                </div>

                <!-- Description -->
                <div class="space-y-6 text-gray-700 leading-relaxed text-justify mb-10">
                    <p v-for="(desc, index) in texts[language].description" :key="index">{{ desc }}</p>
                </div>

                <!-- FAQ Accordion -->
                <div class="space-y-4 mb-12">
                    <div v-for="(faq, index) in texts[language].faqs" :key="index"
                        class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" :checked="index === 0" />
                        <div class="collapse-title font-semibold">{{ faq.question }}</div>
                        <div class="collapse-content text-sm space-y-2">
                            <p v-for="(item, idx) in faq.answer" :key="idx" class="text-gray-700 leading-relaxed">{{
                                item }}</p>
                        </div>
                    </div>
                </div>

                <!-- Contact -->
                <div class="pt-5 border-t border-gray-200">
                    <p class="text-gray-800 font-medium">📞 Contact: <span class="text-blue-600 font-semibold">{{
                        texts[language].contactPhone }}</span></p>
                    <p class="text-gray-800 font-medium">📧 Email: <a :href="`mailto:${texts[language].contactEmail}`"
                            class="text-blue-600 underline hover:text-blue-700">{{ texts[language].contactEmail }}</a>
                    </p>
                </div>
            </div>

            <!-- Right Side -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
                <h2 class="text-lg font-bold text-gray-800 mb-4 text-center">
                    Balikbayan box mixed with commercial cargo loaded with engine and other car parts.
                </h2>
                <div class="space-y-4">
                    <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                        <ImageCarousel :images="imageItems" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
