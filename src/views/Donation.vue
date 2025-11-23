<script setup>
import { ref } from 'vue';

const language = ref('en'); // default language

// Translations structured using sections / faqs arrays
const texts = {
    en: {
        headerTitle: 'Donation to Foundation',
        intro: {
            paragraphs: [
                'Pinoy Pride Worldwide LLC is also willing to assist our fellow Filipinos who wish to donate goods to any foundation or organization in the Philippines.',
                'For donations, we cannot immediately determine if they are 100% tax-free or not. We need to process the documents first to confirm whether the donation qualifies for tax exemption. Based on the type and nature of the goods, this donation does not qualify. Please refer to the following:'
            ]
        },
        faqs: [
            {
                id: 'section800',
                title: 'Section 800 – Conditionally Duty-Free Importations',
                paragraphs: [
                    'This section lists categories of goods that may be exempt from duties and taxes, including:'
                ],
                list: [
                    'Importations for relief consigned to government agencies or accredited NGOs',
                    'Donations to government institutions',
                    'Donations to hospitals, foundations, educational institutions, etc., subject to specific rules'
                ],
                extra: [
                    'Other references:',
                    'CAO 03-2007 / CMO 04-2007 – Accreditation of NGOs for Duty-Free Importation',
                    'For organizations receiving foreign donations',
                    'CMO 35-2014 – Processing of Government and NGO Importations',
                    'Used when the consignee is:'
                ],
                extraList: [
                    'DSWD',
                    'Red Cross',
                    'LGUs',
                    'Foundations / NGOs / Schools'
                ]
            },
            {
                id: 'reliefLaws',
                title: 'Relief & Calamity-Related Laws',
                paragraphs: [
                    'RA 10121 – Philippine Disaster Risk Reduction and Management Act',
                    'Provides the framework for the quick entry of humanitarian assistance.',
                    'RA 10848 – Tax Exemption for Relief Operations',
                    'Used during calamities; grants special exemptions for goods donated for disaster victims.'
                ],
                list: []
            },
            {
                id: 'taxLaws',
                title: 'Tax Exemption Laws (BIR / DOF)',
                paragraphs: [
                    'DOF Department Order 36-2016',
                    'Requirements for tax- and duty-free importation of donations, especially when:'
                ],
                list: [
                    'Donated to a government agency',
                    'Donated to non-profit, non-stock organizations',
                    'Used for charitable or educational purposes'
                ],
                extra: [
                    'BIR Revenue Regulations 1-2015',
                    'Donations to accredited NGOs can be tax-deductible.'
                ],
                extraList: []
            },
            {
                id: 'agencySpecific',
                title: 'Agency-Specific Laws (Depending on the Consignee)',
                paragraphs: [
                    'DSWD Guidelines',
                    'For importation of:'
                ],
                list: [
                    'Relief goods',
                    'Used clothing (special clearance)',
                    'Supplies intended for charitable distribution'
                ],
                extra: [
                    'DepEd / CHED Regulations',
                    'If the donation is intended for schools or universities.',
                    'DOH / FDA Rules',
                    'If the goods include:'
                ],
                extraList: [
                    'Medical devices',
                    'Medicines',
                    'Food supplements',
                    'PPE'
                ],
                note: 'These require FDA clearance.'
            },
            {
                id: 'summary',
                title: '📦 SUMMARY: Main Laws to Refer To',
                paragraphs: [
                    'Below are primary references to check when considering imported donations:'
                ],
                list: [
                    'CMTA (RA 10863) – Sections on duty-free donations',
                    'CAO 06-2016 – Clearance of relief consignments',
                    'CAO 03-2007 & CMO 04-2007 – NGO accreditation',
                    'DOF DO 36-2016 – Tax exemption rules for donations',
                    'RA 10121 – Disaster relief importation',
                    'FDA Regulations – For health-related donated goods',
                    'DSWD Special Rules – For relief goods and used clothing'
                ]
            }
        ],
        stepIntro: {
            paragraphs: [
                "Here’s a step-by-step guide to importing donated goods into the Philippines (for either humanitarian, charitable, or non-profit purposes). Because you are active in importation (via your customs brokerage company), I’ll also highlight practical points you’ll want to watch out for. The rules are based on the Bureau of Customs (BOC) guidelines and other relevant Philippine agencies."
            ]
        },
        steps: [
            {
                title: '1. Determine the parties & whether you qualify for duty/tax privileges. You need to establish who the consignee/done is, and whether the goods are eligible for duty-and/or tax-exemption.',
                paragraphs: [
                    'According to the rules:'
                ],
                list: [
                    'If the consignee/donee is a National Government Agency (NGA) → duties and taxes are automatically charged to that agency’s account.',
                    'If the consignee/donee is a Social Welfare Development Agency (SWDA) that is registered/licensed/accredited under Department of Social Welfare and Development (DSWD) → duty-exempt (if procedures followed), but not tax-exempt in many cases.',
                    'If the consignee is a foreign embassy or an international organization / specialized agency → duty and tax exempt (if proper procedures followed).',
                    'If the consignee does not fall into those categories (or does not donate to an eligible donee) → then the goods may not qualify for any duty/tax exemption and will be treated as a normal import.'
                ],
                practicalTip: 'As your company handles customs brokerage, ensure your client (the donee/consignee) is properly registered/accredited (if a non‐government org) and you check that the shipment is being made to that entity. Mistakes in naming the consignee can result in loss of exemption.'
            },
            {
                title: '2. Confirm the type of goods and whether they are regulated or prohibited even if the consignee qualifies, the goods themselves must meet certain conditions:',
                list: [
                    'The goods must not be on the list of prohibited imports (e.g., used clothing is absolutely prohibited for donation imports).',
                    'If the goods are regulated or restricted (for example: medicines, medical devices, food items, telecommunication equipment, etc.), the consignee must obtain an Import Permit or Clearance from the relevant Philippine government agency (e.g., Food and Drug Administration for medicines/medical devices) prior to import.',
                    'The goods must be suitable for import – e.g., for medicine: there must be English translation on labels; expiry date must be at least six (6) months upon arrival; the product must be registered in the country of origin or Philippine equivalent.'
                ],
                practicalTip: 'A. For your customs brokerage, if the donated goods are in a regulated category (medical relief, food supplies, etc.), check upfront for the clearance or permit. If not obtained, the shipment can be delayed or seized.'
            },
            {
                title: 'B. Documentation & Pre-Arrival Preparation',
                paragraphs: [
                    'Before the goods arrive (or as they arrive) certain documentation must be completed. The general steps:'
                ],
                preArrivalTitle: 'Pre-arrival:',
                preArrivalList: [
                    'The sender (donor abroad) advises the consignee in the Philippines that the donation is forthcoming and that the consignee is willing and prepared to receive it.',
                    'The donor prepares a Deed of Donation (also called “Deed of Donation”) addressed to the consignee/donee. This must be consularized (authenticated) by the Philippine consulate or embassy in the donor’s country.',
                    'The consignee executes a Deed of Acceptance of the donation from the donor.',
                    'If the goods are restricted/regulated, the consignee obtains the required import permit/clearance. (As mentioned already)'
                ],
                practicalTip: 'Have your brokerage checklist include verification of the Deed of Donation (and consularisation) and Deed of Acceptance. Without those, duties/taxes exemption may not apply.'
            },
            {
                title: 'C. Arrival at port / One-Stop Shop & Submission of Documents',
                paragraphs: [
                    'When the goods arrive in the Philippines at the port/airport, specific documents must be submitted and processes followed:'
                ],
                list: [
                    'Consularised Deed of Donation',
                    'Deed of Acceptance',
                    'Bill of Lading (sea freight) or Airway Bill (air freight) endorsed by the shipping agent/airline',
                    'Itemized Packing List (for example, medicines include lot number and expiry date)',
                    'Invoice (for calculation of duties/taxes) – even though donation, the invoice may still be required for valuation.',
                    'Import Permit or Clearance (if required)',
                    'Filled-up Informal Import Declaration Entry (IIDE) form (or formal entry if required)',
                    'If sea freight: Permit to Deliver Imported Goods (PDIG) form as required.',
                    'If the OSS (One‐Stop Shop) is activated (for relief goods, etc.), the relevant government agencies and BOC coordinate at the OSS to expedite release.'
                ],
                practicalTip: 'Because your company is a customs brokerage with 20 employees, you should map out standard document checklists for donation shipments. Also anticipate delays because of regulated items.'
            },
            {
                title: '5. Assessment, Payment (if applicable) & Release',
                list: [
                    'The BOC examines/appraises the goods. If the goods are prohibited, or regulated goods without permit/clearance, they may be seized and forfeited.',
                    'If consignee is NGA: duties & taxes charged to NGA account; donor/consignee need not pay.',
                    'If consignee is SWDA: must secure an indorsement/approval (often from DOF) for duty exemption. Note: tax may still apply (e.g., VAT) depending on case.',
                    'Even when duty‐exempt, other charges (storage, demurrage, arrastre, trucking, wharfage, stripping/stuffing) are not exempt and must be paid by consignee/agent.',
                    'Once all is settled and clearance is granted, the goods are released.'
                ],
                practicalTip: 'As a customs broker, remind your client that exemptions don’t cover port handling or demurrage charges. Ensure those are clarified in advance. Also track that all required letters/endorsements (DOF, DSWD) are obtained so release isn’t delayed.'
            },
            {
                title: '6. Post-clearance / Other Considerations',
                list: [
                    'If goods were regulated (e.g., medicines), the donee/consignee must ensure proper distribution/use (not commercial resale), and proper shelf‐life/expiry compliance.',
                    'If the donation is to a non-profit educational institution or other charity, the donee may need to submit a distribution plan or a letter of undertaking that the goods will be used exclusively for the charitable purpose and not for resale.',
                    'Keep records: the Deed of Donation, Acceptance, clearance letters, invoices, packing lists etc. These may be subject to audit.',
                    'Confirm whether VAT (Value Added Tax) is still applicable despite duty exemption. Some guidelines stress that just because duty is waived doesn’t mean VAT is waived.'
                ]
            },
            {
                title: 'We are doing our best to accommodate this request.',
                paragraphs: [],
                orderedList: [
                    'Please provide the company’s documents.',
                    'SEC registration, permits, and other related requirements.',
                    'A Deed of Donation Agreement between the donor and the donee.',
                    'These documents must also be submitted to the DSWD for approval.'
                ]
            }
        ]
    },

    tl: {
        headerTitle: 'Donasyon sa Foundation',
        intro: {
            paragraphs: [
                'Handa rin tumulong ang Pinoy Pride Worldwide LLC sa ating mga kababayan na nais mag-donate ng mga kalakal sa anumang foundation o organisasyon sa Pilipinas.',
                'Para sa mga donasyon, hindi namin agad masasabing 100% tax-free ito o hindi. Kailangan naming iproseso muna ang mga dokumento upang kumpirmahin kung ang donasyon ay kwalipikado para sa tax exemption. Batay sa uri at kalikasan ng mga kalakal, hindi kwalipikado ang donasyong ito. Mangyaring sumangguni sa mga sumusunod:'
            ]
        },
        faqs: [
            {
                id: 'section800',
                title: 'Section 800 – Conditionally Duty-Free Importations',
                paragraphs: [
                    'Nagrerehistro ang seksyong ito ng mga kategorya ng kalakal na posibleng exempt sa duties at buwis, kabilang ang:'
                ],
                list: [
                    'Importations para sa relief na ipinadala sa mga ahensya ng gobyerno o accredited NGOs',
                    'Donasyon sa mga institusyong pampamahalaan',
                    'Donasyon sa mga ospital, foundation, institusyong pang-edukasyon, atbp., na may partikular na panuntunan'
                ],
                extra: [
                    'Iba pang sanggunian:',
                    'CAO 03-2007 / CMO 04-2007 – Accreditation of NGOs for Duty-Free Importation',
                    'Para sa mga organisasyong tumatanggap ng foreign donations',
                    'CMO 35-2014 – Processing of Government and NGO Importations',
                    'Ginagamit kapag ang consignee ay:'
                ],
                extraList: [
                    'DSWD',
                    'Red Cross',
                    'LGUs',
                    'Foundations / NGOs / Schools'
                ]
            },
            {
                id: 'reliefLaws',
                title: 'Mga Batas Tungkol sa Relief at Kalamidad',
                paragraphs: [
                    'RA 10121 – Philippine Disaster Risk Reduction and Management Act',
                    'Nagbibigay ng framework para sa mabilis na pagpasok ng humanitarian assistance.',
                    'RA 10848 – Tax Exemption for Relief Operations',
                    'Ginagamit tuwing may kalamidad; nagbibigay ng espesyal na exemption para sa mga kalakal na idinodonate para sa mga biktima ng sakuna.'
                ],
                list: []
            },
            {
                id: 'taxLaws',
                title: 'Mga Batas sa Tax Exemption (BIR / DOF)',
                paragraphs: [
                    'DOF Department Order 36-2016',
                    'Mga kinakailangan para sa tax- at duty-free importation ng mga donasyon, lalo na kapag:'
                ],
                list: [
                    'Idinodonate sa isang ahensiyang pambansa',
                    'Idinodonate sa non-profit, non-stock organizations',
                    'Gagamitin para sa charitable o educational na layunin'
                ],
                extra: [
                    'BIR Revenue Regulations 1-2015',
                    'Ang mga donasyon sa accredited NGOs ay maaaring maging tax-deductible.'
                ],
                extraList: []
            },
            {
                id: 'agencySpecific',
                title: 'Mga Batas na Espesipiko sa Ahensya (Depende sa Consignee)',
                paragraphs: [
                    'DSWD Guidelines',
                    'Para sa importation ng:'
                ],
                list: [
                    'Relief goods',
                    'Used clothing (special clearance)',
                    'Supplies na inilaan para sa charitable distribution'
                ],
                extra: [
                    'DepEd / CHED Regulations',
                    'Kung ang donasyon ay inilaan para sa mga paaralan o unibersidad.',
                    'DOH / FDA Rules',
                    'Kung ang mga kalakal ay naglalaman ng:'
                ],
                extraList: [
                    'Medical devices',
                    'Mga gamot',
                    'Food supplements',
                    'PPE'
                ],
                note: 'Kailangan ang FDA clearance para sa mga ito.'
            },
            {
                id: 'summary',
                title: '📦 BUOD: Pangunahing Mga Batas na Dapat Sangguniin',
                paragraphs: [
                    'Narito ang mga pangunahing sanggunian na dapat tingnan kapag isinasaalang-alang ang imported donations:'
                ],
                list: [
                    'CMTA (RA 10863) – Mga seksyon tungkol sa duty-free donations',
                    'CAO 06-2016 – Clearance ng relief consignments',
                    'CAO 03-2007 & CMO 04-2007 – NGO accreditation',
                    'DOF DO 36-2016 – Mga patakaran sa tax exemption para sa mga donasyon',
                    'RA 10121 – Disaster relief importation',
                    'FDA Regulations – Para sa mga health-related donated goods',
                    'DSWD Special Rules – Para sa relief goods at used clothing'
                ]
            }
        ],
        stepIntro: {
            paragraphs: [
                'Narito ang sunod-sunod na gabay sa pag-import ng mga donated goods sa Pilipinas (para sa humanitarian, charitable, o non-profit na layunin). Dahil ikaw ay aktibo sa importation (sa pamamagitan ng iyong customs brokerage company), babanggitin ko rin ang mga praktikal na punto na dapat mong bantayan. Ang mga patakaran ay batay sa gabay ng Bureau of Customs (BOC) at iba pang kaugnay na ahensya sa Pilipinas.'
            ]
        },
        steps: [
            {
                title: '1. Tukuyin ang mga partido at kung kwalipikado kayo para sa duty/tax privileges. Kailangan mong itatag kung sino ang consignee/donee, at kung ang mga kalakal ay kwalipikado para sa duty-at/o tax-exemption.',
                paragraphs: [
                    'Ayon sa mga patakaran:'
                ],
                list: [
                    'Kung ang consignee/donee ay isang National Government Agency (NGA) → ang duties at taxes ay awtomatikong sinisingil sa account ng ahensya na iyon.',
                    'Kung ang consignee/donee ay isang Social Welfare Development Agency (SWDA) na rehistrado/licensed/accredited sa ilalim ng DSWD → duty-exempt (kung nasunod ang mga proseso), ngunit hindi palaging tax-exempt sa maraming kaso.',
                    'Kung ang consignee ay isang foreign embassy o isang international organization / specialized agency → duty at tax exempt (kung nasunod ang tamang proseso).',
                    'Kung ang consignee ay hindi kabilang sa mga kategoryang iyon (o hindi nagdo-donate sa isang kwalipikadong donee) → maaaring hindi kwalipikado ang mga kalakal para sa anumang duty/tax exemption at ituturing bilang normal na import.'
                ],
                practicalTip: 'Bilang iyong kumpanya ay humahawak ng customs brokerage, tiyakin na ang iyong kliyente (ang donee/consignee) ay maayos na rehistrado/accredited (kung non-government org) at i-check na ang shipment ay ipinapadala sa nasabing entidad. Ang pagkakamali sa pangalan ng consignee ay maaaring magresulta sa pagkawala ng exemption.'
            },
            {
                title: '2. Kumpirmahin ang uri ng mga kalakal at kung ito ay nire-regulate o ipinagbabawal kahit na kwalipikado ang consignee, ang mga kalakal mismo ay dapat tumugon sa ilang kondisyon:',
                list: [
                    'Ang mga kalakal ay hindi dapat nasa listahan ng mga ipinagbabawal na import (hal., used clothing ay absolutong ipinagbabawal para sa donation imports).',
                    'Kung ang mga kalakal ay regulated o restricted (halimbawa: gamot, medical devices, food items, telecommunication equipment, atbp.), ang consignee ay dapat kumuha ng Import Permit o Clearance mula sa kaugnay na ahensya ng gobyerno ng Pilipinas (hal., FDA para sa gamot/medical devices) bago mag-import.',
                    'Dapat na angkop ang mga kalakal para sa import – hal., para sa gamot: dapat may English translation sa labels; dapat may expiry date na hindi bababa sa anim (6) na buwan pagdating; dapat nakarehistro ang produkto sa bansa ng pinagmulan o may Philippine equivalent.'
                ],
                practicalTip: 'A. Para sa iyong customs brokerage, kung ang donated goods ay nasa regulated na kategorya (medical relief, food supplies, atbp.), i-check agad ang clearance o permit. Kung hindi ito makuha, maaaring maantala o masita ang shipment.'
            },
            {
                title: 'B. Dokumentasyon at Pre-Arrival Preparation',
                paragraphs: [
                    'Bago dumating ang mga kalakal (o habang dumarating) kailangan kumpletuhin ang ilang dokumentasyon. Ang pangkalahatang hakbang:'
                ],
                preArrivalTitle: 'Pre-arrival:',
                preArrivalList: [
                    'Ang nagpadala (donor abroad) ay mag-aabiso sa consignee sa Pilipinas na paparating ang donasyon at na handa at tanggapin ito ng consignee.',
                    'Ang donor ay maghahanda ng Deed of Donation (tinatawag din na “Deed of Donation”) na naka-address sa consignee/donee. Ito ay dapat i-consularize (i-authenticate) ng Philippine consulate o embassy sa bansa ng donor.',
                    'Ang consignee ay mag-e-execute ng Deed of Acceptance ng donasyon mula sa donor.',
                    'Kung ang mga kalakal ay restricted/regulated, ang consignee ay dapat kumuha ng kinakailangang import permit/clearance. (Tulad ng nabanggit)'
                ],
                practicalTip: 'Isama sa iyong brokerage checklist ang beripikasyon ng Deed of Donation (at consularisation) at Deed of Acceptance. Kung wala ito, maaaring hindi mag-apply ang duties/taxes exemption.'
            },
            {
                title: 'C. Pagdating sa port / One-Stop Shop & Pagsumite ng Dokumento',
                paragraphs: [
                    'Kapag dumating ang mga kalakal sa Pilipinas sa port/airport, kailangang magsumite ng tiyak na mga dokumento at sundin ang mga proseso:'
                ],
                list: [
                    'Consularised Deed of Donation',
                    'Deed of Acceptance',
                    'Bill of Lading (sea freight) o Airway Bill (air freight) na inendorso ng shipping agent/airline',
                    'Itemized Packing List (hal., para sa gamot ay isama ang lot number at expiry date)',
                    'Invoice (para sa kalkulasyon ng duties/taxes) – kahit donasyon, maaaring kailanganin pa rin ang invoice para sa valuation.',
                    'Import Permit o Clearance (kung kinakailangan)',
                    'Filled-up Informal Import Declaration Entry (IIDE) form (o formal entry kung kinakailangan)',
                    'Kung sea freight: Permit to Deliver Imported Goods (PDIG) form kung kinakailangan.',
                    'Kung ang OSS (One‐Stop Shop) ay na-activate (para sa relief goods, atbp.), ang mga kaugnay na ahensya ng gobyerno at BOC ay magkokoordina sa OSS upang pabilisin ang release.'
                ],
                practicalTip: 'Dahil ang iyong kumpanya ay isang customs brokerage na may 20 empleyado, dapat kayong mag-map out ng standard document checklists para sa donation shipments. Asahan din ang pagkaantala dahil sa regulated items.'
            },
            {
                title: '5. Assessment, Payment (kung naaangkop) & Release',
                list: [
                    'Susuriin/appraisahin ng BOC ang mga kalakal. Kung ang mga kalakal ay ipinagbabawal, o regulated goods na walang permit/clearance, maaaring ito ay masita at maidawit.',
                    'Kung ang consignee ay NGA: duties & taxes sinisingil sa NGA account; hindi kailangang magbayad ang donor/consignee.',
                    'Kung ang consignee ay SWDA: kailangang kumuha ng indorsement/approval (madalas mula sa DOF) para sa duty exemption. Tandaan: maaaring mananatiling umiiral ang tax (hal., VAT) depende sa kaso.',
                    'Kahit kapag duty‐exempt, ang iba pang singil (storage, demurrage, arrastre, trucking, wharfage, stripping/stuffing) ay hindi exempt at kailangang bayaran ng consignee/agent.',
                    'Kapag naayos na ang lahat at naibigay ang clearance, ilalabas ang mga kalakal.'
                ],
                practicalTip: 'Bilang customs broker, ipaalala sa iyong kliyente na ang exemptions ay hindi sumasakop sa port handling o demurrage charges. Siguraduhing malinaw ang mga ito nang maaga. Subaybayan din na nakuha ang lahat ng kinakailangang letters/endorsements (DOF, DSWD) upang hindi maantala ang release.'
            },
            {
                title: '6. Post-clearance / Iba pang Mga Dapat Isaalang-alang',
                list: [
                    'Kung ang mga kalakal ay regulated (hal., gamot), dapat tiyakin ng donee/consignee ang tamang distribusyon/paggamit (hindi para sa commercial resale), at tamang shelf‐life/expiry compliance.',
                    'Kung ang donasyon ay para sa isang non-profit educational institution o ibang charity, maaaring kailanganin ng donee na magsumite ng distribution plan o letter of undertaking na ang mga kalakal ay gagamitin lamang para sa charitable na layunin at hindi ibebenta.',
                    'Panatilihin ang mga rekord: Deed of Donation, Acceptance, clearance letters, invoices, packing lists, atbp. Maaaring sumailalim ang mga ito sa audit.',
                    'Kumpirmahin kung ang VAT (Value Added Tax) ay nananatiling naaangkop sa kabila ng duty exemption. May mga gabay na nagsasabi na hindi dahil na-waive ang duty ay awtomatikong na-waive din ang VAT.'
                ]
            },
            {
                title: 'Gawin namin ang aming makakaya upang tugunan ang kahilingan na ito.',
                paragraphs: [],
                orderedList: [
                    'Mangyaring ibigay ang mga dokumento ng kumpanya.',
                    'SEC registration, permits, at iba pang kaugnay na requirements.',
                    'Isang Deed of Donation Agreement sa pagitan ng donor at ng donee.',
                    'Ang mga dokumentong ito ay dapat ding isumite sa DSWD para sa pag-apruba.'
                ]
            }
        ]
    }
};

// Function to switch language
function toggleLanguage(lang) {
    language.value = lang;
}
</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto">
            <article class="p-6 bg-white rounded-2xl shadow-sm space-y-6">

                <!-- LANGUAGE SELECT (Top-right) -->
                <div class="w-full flex justify-end mb-2">
                    <select @change="toggleLanguage($event.target.value)" class="select w-40" :value="language">
                        <option value="en">English</option>
                        <option value="tl">Tagalog</option>
                    </select>
                </div>

                <!-- Header -->
                <header class="text-center space-y-2 mb-10">
                    <h1 class="font-extrabold text-3xl md:text-4xl text-gray-800">
                        {{ texts[language].headerTitle }}
                    </h1>
                </header>

                <!-- Introduction -->
                <section class="space-y-4 text-gray-800 leading-relaxed">
                    <p v-for="(p, idx) in texts[language].intro.paragraphs" :key="'intro-' + idx">{{ p }}</p>
                </section>

                <!-- FAQS -->
                <section class="space-y-4">
                    <div v-for="(faq, fIdx) in texts[language].faqs" :key="faq.id"
                        class="collapse collapse-arrow bg-base-100 border border-base-300">
                        <!-- keep the original markup structure (radio entires are static to avoid complex dynamic radio groups) -->
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">{{ faq.title }}</div>

                        <div class="collapse-content text-sm space-y-3">
                            <div v-if="faq.paragraphs && faq.paragraphs.length">
                                <p v-for="(pp, ppi) in faq.paragraphs" :key="`faq-${fIdx}-p-${ppi}`">{{ pp }}</p>
                            </div>

                            <ul v-if="faq.list && faq.list.length" class="list-disc list-inside">
                                <li v-for="(li, lii) in faq.list" :key="`faq-${fIdx}-li-${lii}`">{{ li }}</li>
                            </ul>

                            <div v-if="faq.extra && faq.extra.length" class="pt-2">
                                <p v-for="(ex, exi) in faq.extra" :key="`faq-${fIdx}-ex-${exi}`" class="font-semibold"
                                    v-if="exi % 2 === 0">{{ ex }}</p>
                                <!-- Note: some extra entries are descriptive lines; we simply render them in order -->
                                <p v-for="(exn, exni) in faq.extra" :key="`faq-${fIdx}-exn-${exni}`"
                                    v-if="exni % 2 === 1">{{ exn }}</p>
                            </div>

                            <ul v-if="faq.extraList && faq.extraList.length" class="list-disc list-inside">
                                <li v-for="(eli, eliidx) in faq.extraList" :key="`faq-${fIdx}-exl-${eliidx}`">{{ eli }}
                                </li>
                            </ul>

                            <p v-if="faq.note" class="italic">{{ faq.note }}</p>
                        </div>
                    </div>
                </section>

                <!-- Step Intro -->
                <section class="space-y-4 text-gray-800 leading-relaxed">
                    <p v-for="(p, idx) in texts[language].stepIntro.paragraphs" :key="'stepIntro-' + idx">{{ p }}</p>
                </section>

                <!-- Steps -->
                <section class="space-y-6">
                    <div v-for="(step, sIdx) in texts[language].steps" :key="'step-' + sIdx" class="space-y-3">
                        <h2 class="font-semibold text-lg text-gray-800">{{ step.title }}</h2>

                        <div v-if="step.paragraphs && step.paragraphs.length">
                            <p v-for="(sp, spi) in step.paragraphs" :key="'step-' + sIdx + '-p-' + spi">{{ sp }}</p>
                        </div>

                        <ul v-if="step.list && step.list.length" class="list-disc list-inside space-y-2">
                            <li v-for="(li, lii) in step.list" :key="'step-' + sIdx + '-li-' + lii">{{ li }}</li>
                        </ul>

                        <ol v-if="step.orderedList && step.orderedList.length"
                            class="list-decimal list-inside space-y-2">
                            <li v-for="(ol, oli) in step.orderedList" :key="'step-' + sIdx + '-ol-' + oli">{{ ol }}</li>
                        </ol>

                        <div v-if="step.preArrivalTitle" class="pt-2">
                            <h3 class="font-medium text-gray-800">{{ step.preArrivalTitle }}</h3>
                            <ol class="list-decimal list-inside space-y-2">
                                <li v-for="(pa, pai) in step.preArrivalList" :key="'step-' + sIdx + '-pa-' + pai">{{ pa }}
                                </li>
                            </ol>
                        </div>

                        <p v-if="step.practicalTip" class="text-sm"><strong>Practical tip:</strong> {{ step.practicalTip
                            }}</p>
                    </div>
                </section>

                <!-- Final Documents -->
                <section class="space-y-4">
                    <h2 class="font-semibold text-lg text-gray-800">{{
                        texts[language].steps[texts[language].steps.length-1].title }}</h2>
                    <ol class="list-decimal list-inside space-y-2">
                        <li v-for="(doc, didx) in texts[language].steps[texts[language].steps.length - 1].orderedList"
                            :key="'final-doc-' + didx">{{ doc }}</li>
                    </ol>
                </section>

            </article>
        </div>
    </section>
</template>
