<script setup>
// Component
import ServicesCard from '@/components/ServicesCard.vue';
// Images
import ServiceImage01 from '@/assets/images/ServicesImage01.png';
// Document
import PPWProhibited from '@/assets/documents/PPW Prohibited.pdf';
// Heroicons
import { CheckIcon } from '@heroicons/vue/24/outline';

</script>

<template>
    <section class="mb-12 py-16 bg-gray-100">

        <!-- Headline -->
        <div class="text-center mb-8">
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                What We Do
            </h2>
            <!-- Highlight line -->
            <div class="w-52 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 mx-auto my-4 rounded"></div>
            <p v-fade-slide-up="200" class="mt-2 text-gray-600 text-base sm:text-lg">
                Explore the services and solutions we provide to make your logistics experience seamless.
            </p>
        </div>

        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-4">

            <!-- Text Column -->
            <div v-fade-slide-up="100"
                class="md:w-1/2 bg-white border border-gray-300 p-8 rounded-xl shadow-lg flex flex-col justify-center text-gray-700 text-sm space-y-4">
                <p>
                    At <span class="font-semibold text-gray-800">Pinoy Pride Worldwide LLC</span>, we make shipping
                    between the USA and the Philippines <span class="text-red-500 font-semibold">fast, secure, and
                        hassle-free</span>.
                </p>

                <p>
                    For returning residents, we handle appliances like <span class="italic">dishwashers, washers and
                        dryers, TVs, and refrigerators</span>, as well as furniture including <span
                        class="italic">sofas,
                        mattresses, cabinets, and dining sets</span>.
                </p>

                <p>
                    For businesses and commercial shipments, we offer <span class="font-semibold">dedicated
                        containers</span> for single-owner shipments or <span class="font-semibold">cost-effective
                        shared
                        container options</span> for smaller loads.
                </p>

                <p>
                    We also cater to general merchandise, import/export needs, and mixed shipments combining
                    <span class="italic">new and used products</span>, with flexible CBM rates for sensitive and
                    standard goods.
                </p>

                <p>
                    Additional services include <span class="font-semibold">shipper-owned containers, global container
                        shipping, interstate moving within the USA, Balikbayan boxes</span> in large and jumbo sizes,
                    and
                    soon, <span class="font-semibold text-blue-500">air cargo services</span>.
                </p>

                <p>
                    Wherever you are, we bring the Philippines closer to you—<span class="text-red-500 font-semibold">
                        fast, secure, and affordably</span>. <span
                        class="underline cursor-pointer text-blue-600 hover:text-blue-800">
                        Contact us today</span> to start your shipment!
                </p>
            </div>

            <!-- Image Column -->
            <div v-fade-slide-up="200" class="md:w-1/2 flex justify-center items-center">
                <img :src="ServiceImage01" alt="Shipping services illustration"
                    class="w-full rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300">
            </div>
        </div>
    </section>

    <section class="mb-12 py-16">

        <!-- Headline -->
        <div class="text-center mb-8 px-4">
            <h2 v-fade-slide-up="100" class="text-3xl sm:text-4xl font-extrabold text-transparent 
                 bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                Our Services
            </h2>
            <p v-fade-slide-up="200" class="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Discover the range of logistics solutions we provide to meet your business needs.
            </p>
        </div>

        <!-- Services Cards -->
        <div class="max-w-6xl mx-auto flex flex-col gap-6 px-4">
            <ServicesCard title="For Returning Residents:">
                <ul>
                    <li>
                        <span class="font-bold">Vehicles:</span> Cars, Motorcycles, Jet Skies, Speedboat &
                        more...
                    </li>
                    <li>
                        <span class="font-bold">Appliances:</span> Dishwashers, Washers, & Dryers, TV's, Refrigerators &
                        more...
                    </li>
                    <li>
                        <span class="font-bold">Furniture:</span> Sofas, Mattresses, Cabinets, Dining Sets & more...
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For Business & Commercial Goods: (Import/Export) - USA ⇄ Philippines">
                <ul>
                    <li>
                        <span class="font-bold">Single Owner Shipping:</span> Get a dedicated container exclusively for
                        your brand-new or used products perfect for entrepreneur or individuals ready to start or expand
                        their business.
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For General Merchandise: (Import/Export) - USA ⇄ Philippines">
                <ul>
                    <li>
                        Save cost by sharing container with other shippers (Limit: Up to 5 CBM or 2 tons of equivalent
                        weight).
                    </li>
                </ul>
            </ServicesCard>
            <ServicesCard title="For Mix Shipments">
                <ul>
                    <li>
                        <span class="font-bold">Combine of brand-new products</span> with used household goods, personal
                        effects, tools, car parts, and more.
                    </li>
                    <li>
                        <span class="font-bold">Flexible Rates -</span> Pay only for the space you use - per cubic meter
                        (CBM)
                    </li>
                    <li>
                        <span class="font-bold">Sensitive goods -</span> Premium CBM rate applies.
                    </li>
                    <li>
                        <span class="font-bold">Non-sensitive goods -</span> Standard CBM rate.
                    </li>
                </ul>
            </ServicesCard>

            <ServicesCard title="More Services to Meet Your Needs">
                <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Shipper-Owned Containers (SOC)</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Global Container Shipping</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Interstate Moving within the USA</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Balikbayan Boxes (large, X-large, Jumbo)</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
                            <CheckIcon class="size-5 text-green-700" />
                        </div>
                        <span>Air Cargo - Launching Soon!</span>
                    </div>
                </div>
            </ServicesCard>
        </div>

    </section>

    <section class="py-16 bg-blue-950">
        <!-- Headline -->
        <div class="text-center mb-8">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-transparent 
               bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600">
                Prohibited Items to Send
            </h2>
            <p class="mt-2 text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
                In accordance with
                <span class="font-semibold text-yellow-400">Republic Act No. 4653</span>,
                the following items are strictly prohibited from shipment:
            </p>
        </div>

        <!-- Content -->
        <div class="max-w-4xl mx-auto px-6">
            <!-- List -->
            <ul
                class="list-disc list-inside space-y-4 text-gray-200 leading-relaxed marker:text-yellow-400 text-justify">
                <li>
                    Any commercial quantity importation of textile articles commonly known as
                    <span class="font-semibold text-yellow-300">USED CLOTHING AND RAGS (Ukay-Ukay)</span>,
                    items numbering more than twelve (12) pieces.
                </li>
                <li>
                    Engines, vehicles, generators, welding machines, chainsaws, automobile parts, ATV parts, boat parts,
                    jet ski parts, motorcycle parts, scooter parts, and truck parts (used).
                </li>
                <li>
                    Firearms, rifles, guns, gun parts, toy guns, weapons, stun guns, hidden blades, switch blades, flick
                    knives, military cargo, tasers, ammunition, and other war materials.
                </li>
                <li>
                    Flammable items such as cigarettes, compressed gas, fireworks, flammable liquids/solids, flares,
                    fuel, lighter refills, camping stoves, oxidizing substances, toxic/infectious substances,
                    radioactive materials, corrosives, and oxygen tanks.
                </li>
                <li>
                    Tools or engines powered by fuel.
                </li>
                <li>
                    Human remains, items made of endangered animals, animal remains.
                </li>
                <li>
                    Currencies, money (paper or coins), collectibles, bank checks, money orders, credit cards, lottery
                    tickets, bonds, securities, negotiable instruments, stamps, traveler’s checks, and related financial
                    documents.
                </li>
                <li>
                    Liquids such as cooking oil, detergents, wine, etc.
                </li>
                <li>
                    Articles of extraordinary value such as airline ticket stock, archaeological artifacts, artwork,
                    antiques, china, crystal, porcelain, fur clothing, and fur-trimmed clothing.
                </li>
                <li>
                    Gems (cut or uncut).
                </li>
                <li>
                    Glass or mirrors (cast, figured, framed, rolled).
                </li>
                <li>
                    Jewelry (other than costume).
                </li>
                <li>Pearls (including cultured)</li>
                <li>
                    Precious metals: <br>
                    <span class="text-gray-300">Gold, silver, platinum, palladium, iridium, ruthenium, osmium, rhodium
                        whether
                        coined/uncoined, refined/unrefined, in any form including bullion, dore, casting, cyanide,
                        sulfide-treated, dust, concentrate, foil, wire, sheet, tube, ingot, powder, rod, sponge, gauze,
                        etc.</span>
                </li>
                <li>Watches made of precious metal and/or gems</li>
                <li>Live animals and insects</li>
                <li>Animal carcasses</li>
                <li>Human corpses, human body parts, human embryos, or cremated or disinterred human remains</li>
                <li>Articles or products from animals or plants protected under
                    <span class="font-semibold text-yellow-300">CITES (Convention on International Trade in Endangered
                        Species of Wild Fauna and Flora)</span>
                </li>
                <li>Waste or garbage for disposal</li>
                <li>Hazardous waste, including, but not limited to, used hypodermic needles or syringes, or other
                    medical waste</li>
                <li>Packages that are wet, leaking or emit an odor of any kind</li>
                <li>Shipments or commodities that are prohibited by any law, statute, or regulation</li>
                <li>Shipments that require us to obtain a local, state, provincial or federal license for their
                    transportation</li>
                <li>Shipments that may cause damage or delay to equipment, personnel or other shipments</li>
                <li>Wooden crates</li>
                <li>
                    Perishables, Pesticides, Plants, Poisonous substances, Rice, Materials, Illegal Drugs, Medicine,
                    Fresh Fruits & Vegetables, Alcohol, Alcoholic Beverages, Tobacco Waste (hazardous or not).
                </li>
                <li>
                    Gambling cards, gambling devices where prohibited by law, pirated DVDs & CDs, pornography or
                    pornographic materials
                </li>
                <li>
                    Aerosols, lithium batteries packed loose, wet-cell batteries, battery packs, hair spray
                </li>
                <li>
                    Any other items prohibited for transport under USA, Canada, Europe, Asia, or the destination
                    country’s law
                </li>
            </ul>
        </div>
    </section>

    <!-- Allowed Goods -->
    <section class="py-16 bg-blue-950">
        <!-- Headline -->
        <div class="text-center mb-8">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-transparent 
           bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600">
                Allowed Goods
            </h2>
            <p class="mt-2 px-3 text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
                The following items are generally permitted for shipment,
                provided they comply with customs and shipping regulations.
            </p>
        </div>

        <!-- Content -->
        <div class="max-w-5xl mx-auto px-6">
            <ul
                class="list-disc list-inside space-y-3 text-gray-200 leading-relaxed marker:text-yellow-300 columns-2 md:columns-3 gap-6">
                <li>Accessories</li>
                <li>Album</li>
                <li>Aluminum foil</li>
                <li>Antenna</li>
                <li>Armchair</li>
                <li>Baby clothes (new/used)</li>
                <li>Backpacks (new/used)</li>
                <li>Bags (new/used)</li>
                <li>Balls</li>
                <li>Bandages (adhesive/regular)</li>
                <li>Bath mats</li>
                <li>Bathroom supplies</li>
                <li>Bedding</li>
                <li>Belts</li>
                <li>Bike & bike parts (new/used)</li>
                <li>Blankets</li>
                <li>Blenders (new/used)</li>
                <li>Blocks</li>
                <li>Blouses (new/used)</li>
                <li>Books</li>
                <li>Boots (new/used)</li>
                <li>Bowling balls & pins</li>
                <li>Boxes, buckets</li>
                <li>Building materials</li>
                <li>Cables</li>
                <li>Calendars</li>
                <li>Cameras (new/used)</li>
                <li>Candles</li>
                <li>Candy, cookies, delicacies</li>
                <li>Clothing (new/used)</li>
                <li>Coats (new/used)</li>
                <li>Coffee, cocoa, tea</li>
                <li>Computers, laptops, iPads, iPhones, tablets (new/used)</li>
                <li>Chargers, controllers, accessories</li>
                <li>Cosmetics & hygiene items</li>
                <li>Costumes</li>
                <li>Crayons, coloring materials</li>
                <li>Curtains (new/used)</li>
                <li>Decorations (Christmas, home, ornaments)</li>
                <li>Documents & printed matter (reports, invoices, manuals, photos, business papers, maps, etc.)
                </li>
                <li>Dolls, toys (new/used, battery-powered allowed)</li>
                <li>Electronics (TV, speaker, rice cooker, refrigerator, etc. — <span
                        class="font-semibold text-yellow-300">shipped at owner’s risk</span>)</li>
                <li>Food (non-perishable, dry fruits, nuts, candies, peanut butter, maple syrup, etc.)</li>
                <li>Furniture (chairs, tables, beds, wardrobes, mattresses new/used)</li>
                <li>Glassware (non-prohibited types)</li>
                <li>Household items (new/used)</li>
                <li>Jewelry (non-precious, costume)</li>
                <li>Kitchen tools & dishes (new/used)</li>
                <li>Linens, curtains, rugs (new/used)</li>
                <li>Magazines, newspapers, books</li>
                <li>Medical supplies</li>
                <li>Mirror, frames, wall décor</li>
                <li>Musical instruments (new/used)</li>
                <li>Office supplies</li>
                <li>Pants, shirts, skirts, t-shirts, sweaters (new/used)</li>
                <li>Perfume, lotion, deodorant, soap, toothpaste, toothbrushes</li>
                <li>Pillows, quilts, duvets, blankets</li>
                <li>Plastic containers, trays, pots, pans</li>
                <li>Remote controls, routers (new/used)</li>
                <li>School items</li>
                <li>Shoes, slippers, socks (new/used)</li>
                <li>Souvenirs</li>
                <li>Sporting equipment (new/used)</li>
                <li>Strollers (new/used)</li>
                <li>Suitcases, bags, purses, wallets</li>
                <li>Supplements, vitamins</li>
                <li>Towels, napkins, paper products</li>
                <li>Umbrellas, hats, scarves, gloves</li>
                <li>Vases</li>
                <li>Wardrobes, furniture items</li>
                <li>Watches (non-precious, fashion)</li>
                <li>Yarn, wool, fabrics</li>
            </ul>

            <!-- Risk Disclaimer -->
            <div class="mt-8 bg-yellow-800 bg-opacity-30 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p class="text-sm sm:text-base text-gray-100 leading-relaxed">
                    ⚠️ <span class="font-semibold text-yellow-300">Important Notice:</span>
                    For shipment of electronic items such as TV, speaker, rice cooker, refrigerator, etc.,
                    it will be purely on a <span class="italic">“Shipper’s Own Risk”</span> or
                    <span class="italic">“Ship at Your Own Risk”</span> basis. Our company will not be
                    responsible for any malfunction, breakage, or damage, nor will we be responsible for
                    the internal quality, quantity, and condition of the cargo.
                </p>
            </div>

            <!-- PDF Notice -->
            <div class="mt-10 text-center">
                <p class="text-gray-100 sm:text-lg mb-4">
                    For the full details of the law, you can view the official document here:
                </p>
                <a :href="PPWProhibited" target="_blank"
                    class="inline-block bg-yellow-400 text-blue-950 font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
                    📄 View Republic Act No. 4653 (PDF)
                </a>
            </div>
        </div>
    </section>
</template>
