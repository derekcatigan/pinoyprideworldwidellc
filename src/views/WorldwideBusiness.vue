<script setup>
import { ref } from 'vue';

const language = ref('en'); // default language

// Translations
const texts = {
    en: {
        headerTitle: 'COMMERCIAL/BUSINESS (Import/Export) - USA ⇄ Other Country',
        headerSubtitle: '(Direct Factory Purchasing Program for Grocery Store Owners)',
        description: [
            ' It is well known globally that one of the most stable and profitable ways to earn a sustainable income is through business—especially when it aligns with one’s passion.',
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
                    'First, you will need to contact the factories in your country or any other country where you wish to purchase products and request quotations for the items you are interested in. This allows you to compare prices and see the potential savings of buying directly.',
                    'Please ensure that these products are already marketed in the USA, which means they have passed Quality Control and are FDA-approved (Food and Drug Administration)—making them legal for sale in the U.S. market.'
                ]
            },
            {
                question: '2. What are the requirements for shipping from the Philippines to the USA?',
                answer: [
                    'A. Export License: Most of the factories or manufacturers that already market their products in the USA typically have an Export License, which is one of the key requirements to export their goods.',
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
                    'A. Consolidation Through our Logistics Partner Warehouse: If you have a trusted contact or representative in the country where you plan to purchase products — someone who owns or has access to a warehouse — you can have each factory deliver their products to that location. Once all items have arrived, Pinoy Pride Worldwide LLC will consolidate everything into one (1) container, ensuring all your products are packed securely and shipped safely to your designated warehouse in the USA. This method minimizes costs, improves security, and ensures smooth and timely delivery.',
                    'B. Shared Container with Business Partners or Friends: If you have 3–5 business partners or friends who are also business owners — preferably located far from your area to avoid competition — you can share one (1) 40-foot container and order 3–5 items each from a single factory. All shipping costs and fees can be shared equally, helping everyone save money while maintaining efficiency.',
                    'If you wish to purchase additional items later, you and your group can book another container together. The purpose of this option is to make logistics simpler and more cost-effective by assigning one container per factory.',
                    'U.S. Delivery Options: Once the shipment arrives in the USA, Pinoy Pride Worldwide LLC can deliver the container directly to your warehouse, where your partners can conveniently pick up their products. If preferred, we can also deliver the container to your partners’ respective warehouses — although this option may incur additional delivery costs.'
                ]
            },
            {
                question: '6. What if we also want to start a business shipping products from the USA to our country?',
                answer: [
                    'Yes, absolutely — that is fully allowed and still falls under the Commercial/Business category.',
                    'The requirements, policies, and procedures outlined under the Business/Commercial section for shipments from your country to the USA are the same guidelines that apply when shipping from the USA to your country — only in reverse order.',
                    'This means you can confidently expand your operations both ways, whether you are importing products into the USA or exporting U.S. goods to your home country. Pinoy Pride Worldwide LLC is ready to assist you in setting up a smooth and compliant process for either direction of trade.'
                ]
            }
        ],
        contactPhone: '(253) 282-9628',
        contactEmail: 'pinoyprideworldwide@gmail.com'
    },
    tl: {
        headerTitle: 'KOMERSYAL/NEGOSYO (Import/Export) - USA ⇄ Ibang Bansa',
        headerSubtitle: '(Direktang Factory Purchasing Program para sa mga May-ari ng Grocery Store)',
        description: [
            ' Kilala sa buong mundo na isa sa pinaka-stable at pinakamainam na paraan para kumita ng tuloy-tuloy ay ang pagkakaroon ng negosyo—lalo na kung ito ay naaayon sa iyong hilig.',
            'Isa sa mga kinikilala at pangunahing uri ng negosyo sa buong mundo ang mga grocery store dahil araw-araw itong pinagkukunan ng mga tao ng kanilang pangangailangan.',
            'Nauunawaan din namin na karamihan, kung hindi man lahat, ng mga may-ari ng grocery store ay nagsusumikap na makapag-alok ng mas mababang presyo kaysa sa kanilang mga kakompetensya. Ngunit marami ang hindi nakakaalam kung paano direktang makabili mula sa mga factory, kaya napipilitan silang bumili mula sa mga importer—kahit pa malayo ang lokasyon ng mga ito.',
            'Dito pumapasok ang Pinoy Pride Worldwide LLC. Ang aming layunin ay tulungan at gabayan ang mga tulad mong negosyante na makabili nang direkta mula sa mga factory at manufacturer, upang maiwasan ang mga middleman o importer. Sa ganitong paraan, nagiging sarili mong importer-distributor, mas napapababa ang gastos, at nagkakaroon ka rin ng pagkakataong magsuplay sa iba pang grocery store sa inyong lugar bilang wholesaler o retailer.',
            'Bilang iyong Freight Forwarding Partner, ang Pinoy Pride Worldwide LLC ay nagbibigay lamang ng shipping at delivery services — tinitiyak namin na ligtas na maihahatid ang iyong mga biniling produkto mula sa factory papunta sa iyong warehouse.',
            'Narito ang mga karaniwang katanungan at kasagutan upang mas maunawaan mo kung paano makapagsimulang bumili nang direkta mula sa mga factory sa pamamagitan ng aming programa:'
        ],
        faqs: [
            {
                question: '1. Paano kami makaka-order nang direkta mula sa mga factory at mapadala ang mga produkto sa aming warehouse?',
                answer: [
                    'Una, kailangan mong makipag-ugnayan sa mga factory sa iyong bansa o sa ibang bansa kung saan mo nais bumili ng produkto at humingi ng quotations para sa mga item na iyong kinaiinteresan. Ito ay para maikumpara ang mga presyo at makita ang laki ng matitipid kapag direkta kang bumili.',
                    'Siguraduhin lamang na ang mga produktong ito ay mayroon nang market sa USA, na nangangahulugang nakapasa ang mga ito sa Quality Control at FDA-approved (Food and Drug Administration) — kaya legal itong ibenta sa U.S. market.'
                ]
            },
            {
                question: '2. Ano ang mga requirements para sa shipping mula Pilipinas papuntang USA?',
                answer: [
                    'A. Export License: Karamihan sa mga factory o manufacturer na mayroon nang market sa USA ay karaniwang may Export License, na isa sa pangunahing requirements para makapag-export ng kanilang mga produkto.',
                    'B. Import License: Ito ay requirement para sa negosyante o recipient na tatanggap ng container ng grocery products sa USA. Ang pag-apply ng Import License sa USA ay madali at simple.',
                    'C. FDA Certificate: Dahil ang grocery items ay karaniwang pagkain, kailangan din ng FDA Certificate o License para sa recipient/importer. Sa kabutihang palad, ang pag-apply ng FDA Certificate sa USA ay simple at madaling gawin.'
                ]
            },
            {
                question: '3. Kapag kumpleto na ang requirements at napagkasunduan na ang factory price, paano namin makukwenta ang total product cost?',
                answer: [
                    'Matapos malaman ang factory price ng iyong mga napiling produkto, idagdag lamang ang Ocean Freight (shipping) at ang trucking delivery cost mula U.S. port papunta sa iyong warehouse. Sa ganitong paraan, makukwenta mo ang total landed cost per product at magkakaroon ka ng malinaw na pagtingin sa iyong profit margin at matitipid kumpara sa pagbili mula sa mga importer.'
                ]
            },
            {
                question: '4. Kapag handa na ang mga produkto para i-ship, ano ang shipping procedures?',
                answer: [
                    'Simple lang — kontakin lamang ang Pinoy Pride Worldwide LLC upang mag-book ng container. Kami ang mag-aasikaso ng pagpapadala ng empty container direkta sa factory na iyong in-orderan. Doon ilalagay ang mga produkto mo, at kapag tapos na ang loading, ihahatid ang container sa port para ihanda sa shipment.',
                    'Tandaan: Kinakailangan ang Packing List.'
                ]
            },
            {
                question: '5. Paano kung gusto ko lang umorder mula sa ilang factory na kakaunti lang ang items?',
                answer: [
                    'Kung nais mong bumili ng 3–5 items mula sa bawat factory (halimbawa, apat na factory) at sapat na ito upang punuin ang isang (1) 40-foot container, maaari ito — ngunit hindi ito inirerekomenda.',
                    'Ang pagpapadala ng isang container na kakailanganing mag-ikot sa maraming factory ay maaaring maging magastos, hindi ligtas, at madalas magdulot ng shipment delays. Upang makatulong sa mas episyenteng operasyon, inirerekomenda namin ang mga sumusunod na praktikal at cost-effective na opsyon:',
                    'A. Consolidation Sa Pamamagitan ng Logistics Partner Warehouse: Kung mayroon kang pinagkakatiwalaang contact o representative sa bansang iyong pagbibilhan — maaaring may sariling warehouse — maaari mong ipadeliver sa kanila ang products galing sa bawat factory. Kapag kompleto na ang lahat ng items, icoconsolidate ng Pinoy Pride Worldwide LLC ang lahat sa isang (1) container, tinitiyak na maayos na nakapack at ligtas na maipapadala sa iyong warehouse sa USA. Ito ay nakababawas ng gastos, mas ligtas, at mas mabilis.',
                    'B. Shared Container kasama ang Business Partners o Kaibigan: Kung mayroon kang 3–5 partners o kaibigan na negosyante rin — mas mainam kung malayo ang lokasyon upang maiwasan ang kompetisyon — maaari kayong mag-share ng isang (1) 40-foot container at mag-order ng 3–5 items bawat isa mula sa iisang factory. Hahatiin ninyo ang shipping costs at fees sa paraang pantay-pantay, kaya mas nakakatipid ang lahat.',
                    'Kung nais pa ninyong bumili muli, maaari kayong mag-book ulit ng container bilang grupo. Ang layunin ng opsyong ito ay gawing mas simple at cost-effective ang logistics sa pamamagitan ng pagkakaroon ng isang container bawat factory.',
                    'U.S. Delivery Options: Kapag dumating sa USA ang shipment, maaaring ihatid ng Pinoy Pride Worldwide LLC ang container direkta sa iyong warehouse, kung saan madaling makukuha ng iyong mga partners ang kanilang items. Kung nais, maaari rin naming ihatid sa kani-kanilang warehouse ng iyong partners — ngunit maaaring magkaroon ng karagdagang delivery cost.'
                ]
            },
            {
                question: '6. Paano kung gusto rin naming magsimula ng negosyo na magpapadala ng produkto mula USA papunta sa aming bansa?',
                answer: [
                    'Oo, maaari — at ito ay kabilang pa rin sa Commercial/Business category.',
                    'Ang requirements, policies, at procedures na nakasaad sa Business/Commercial section para sa shipments mula sa inyong bansa papunta sa USA ay siya ring mga patakaran na susundin kung magpapadala mula USA papunta sa inyong bansa — ngunit baliktad lamang ang proseso.',
                    'Ibig sabihin, maaari mong palawakin ang iyong negosyo sa parehong direksyon, mula pag-import papuntang USA hanggang pag-export ng U.S. goods papunta sa inyong bansa. Handa ang Pinoy Pride Worldwide LLC na tulungan ka sa maayos at legal na proseso ng pagnenegosyo saan mang direksyon.'
                ]
            }
        ],
        contactPhone: '(253) 282-9628',
        contactEmail: 'pinoyprideworldwide@gmail.com'
    },
};

// Function to switch language
function toggleLanguage(lang) {
    language.value = lang;
}
</script>

<template>
    <section class="py-14 px-4">


        <div class="max-w-7xl mx-auto">
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

        </div>
    </section>
</template>