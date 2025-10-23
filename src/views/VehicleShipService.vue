<script setup>
import DeliveryCarousel from '@/components/aboutComponents/DeliveryCarousel.vue';

// Successfull Deliveries
import Delivery08 from '@/assets/images/deliveryImages/Delivery08.mp4';
import Delivery09 from '@/assets/images/deliveryImages/Delivery09.mp4';
import Delivery10 from '@/assets/images/deliveryImages/Delivery10.mp4';
import Delivery11 from '@/assets/images/deliveryImages/Delivery11.mp4';
import Delivery12 from '@/assets/images/deliveryImages/Delivery12.mp4';
import Delivery13 from '@/assets/images/deliveryImages/Delivery13.mp4';

const deliveryVideos = [
    Delivery08,
    Delivery09,
    Delivery10,
    Delivery11,
    Delivery12,
    Delivery13,
]
</script>

<template>
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80%_30%] gap-10">
            <div class="p-6 lg:p-8 bg-white rounded-2xl shadow-sm">
                <!-- Header -->
                <div class="text-center space-y-2 mb-10">
                    <h1 class="font-extrabold text-3xl md:text-4xl text-gray-800">
                        Vehicle Shipment
                    </h1>
                    <h3 class="font-medium text-lg md:text-xl text-gray-600">
                        Transport your vehicle with care — from our hands to your destination, securely and on time.
                    </h3>
                </div>

                <!-- Description -->
                <div class="space-y-6 text-gray-700 leading-relaxed text-justify mb-10">
                    <p>
                        The reason most Balikbayan box companies do not accept shipments for returning residents,
                        especially when vehicles are included, is because of the extensive requirements that must be
                        submitted. Missing even a single requirement may result in the Bureau of Customs (BOC) refusing
                        to release the container, which could lead to <span
                            class="font-semibold text-gray-800">confiscation or abandonment</span>. This creates
                        significant problems for the shipper or owner, particularly if there is <span
                            class="font-semibold text-gray-800">no formal contract (MOA)</span>
                        between the shipper/owner and the forwarding company.

                    </p>
                    <p>
                        <span class="font-semibold text-gray-800">Pinoy Pride Worldwide specializes in shipping
                            used vehicles such as cars, speedboat, jet skis
                            and more to the Philippines</span>. You’ve found a trusted forwarding partner who can handle
                        and manage
                        all the details for you!
                    </p>
                    <p>
                        Shipping vehicles to the Philippines comes with unique rules and procedures set by the <span
                            class="font-semibold text-gray-800">Bureau of
                            Customs (BOC)</span>. With our expertise, we ensure your shipment <span
                            class="font-semibold text-gray-800">complies with all
                            regulations</span>, so
                        your goods and vehicles arrive safely and smoothly, without the usual stress and delays.
                    </p>
                    <p>
                        To help you navigate the process smoothly, we’ve compiled a list of <span
                            class="font-semibold text-gray-800">frequently asked questions
                            (FAQs)</span> covering the key rules, requirements, and tips you need to know before
                        shipping your vehicle.
                    </p>
                </div>

                <!-- FAQ Accordion Section -->
                <div class="space-y-4 mb-12">
                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" checked />
                        <div class="collapse-title font-semibold">
                            1. Can anyone ship a vehicle to the Philippines?
                        </div>
                        <div class="collapse-content text-sm">
                            <p>Yes, you can ship a vehicle to the Philippines if it is used.</p>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            2. Who can import used Vehicles, and what are the requirements?
                        </div>
                        <div class="collapse-content text-sm">
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    Returning Filipinos or former Filipino citizens who lived abroad for more than 1
                                    year
                                </li>
                                <li>
                                    Immigrants holding a 13G Visa or higher duly issued by the Bureau of Immigration and
                                    Deportation
                                </li>
                            </ul>

                            <p class="mt-3"><strong>Rules: </strong></p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    One vehicle per family (motorcycles included).
                                </li>
                                <li>
                                    Vehicle must have been registered in your name for at least 6 months.
                                </li>
                                <li>
                                    Must be acquired with earnings from abroad.
                                </li>
                                <li>
                                    Only one (1) unit motor vehicle per family is allowed to be brought in. (A
                                    motorcycle is considered a motor vehicle for this purpose).
                                </li>
                                <li>
                                    The vehicle is registered in his name for at least six (6) months prior to shipment
                                    to the Philippines.
                                </li>
                                <li>
                                    Proof can be presented that the vehicle was acquired out of the earnings abroad.
                                </li>
                                <li>
                                    Personal presence by the car-owner of the used motor vehicle is required 2-3 weeks
                                    before the arrival of the container.
                                </li>
                                <li>
                                    The car owner, who is also the shipper, is required to open a one-time used bank
                                    account called Pass5 to pay the duties and taxes directly to the Bureau of Customs
                                    (BOC) to avoid corruption.
                                </li>
                            </ul>

                            <p class="mt-3"><strong>Important Vehicle Requirements:</strong></p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    Copy of a valid U.S. and Philippine passport of the shipper/sender, showing proof
                                    of at least one (1) year of accumulated residence in the last three (3) years from
                                    the date of filing the application.
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
                                    Tax Identification Number (TIN).
                                </li>
                                <li>
                                    Shipper and consignee must be the same individual (one person only).
                                </li>
                                <li>
                                    Photocopy of the registration
                                </li>
                                <li>
                                    Photocopy of the title.
                                </li>
                                <li>
                                    Photos of the vehicle (front, side, and back).
                                </li>
                                <li>
                                    Authenticated Inspection Report from State Patrol.
                                </li>
                                <li>
                                    Certificate of Emission Compliance (CEC) issued by the country of origin duly
                                    authenticated by the Philippine Embassy / Consulate abroad, under Clean Air Act,
                                    Republic Act (CAA RA
                                    8749).
                                </li>
                                <li>
                                    US Custom Clearance (Original Title is required)
                                </li>
                                <li>
                                    The motor vehicle must be left-hand drive.
                                </li>
                                <li>
                                    Bill of Lading
                                </li>
                                <li>
                                    DTI – Secure a Certificate of Authority to Import (CAI)
                                </li>
                            </ul>
                            <br />
                            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    ⚠️ IMPORTANT NOTICE: Do not ship your vehicle without securing a Certificate of
                                    Authority to Import (CAI) from the Department of Trade and Industry (DTI).
                                    Failure to present this document will result in the Bureau of Customs refusing to
                                    release your container.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            3. How much are the duties and taxes to ship my car?
                        </div>
                        <div class="collapse-content text-sm">
                            <p>To calculate the duties and taxes for shipping your car, we first need its value based on
                                Kelley Blue Book (KBB) or Edmunds. If it’s inconvenient for you to look this up, the
                                Pinoy Pride Worldwide team can assist you.</p>

                            <p>Once we know the value, we can give you an estimated cost. Please keep in mind that the
                                final amount will be determined by Customs. If they inspect the vehicle and find the
                                declared value too low, they may adjust the duties and taxes accordingly.</p>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            4. How to apply for the Certificate of Authority to Import (CAI) from DTI and what are the
                            requirements?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="mt-3"><strong>DTI Requirements: </strong></p>
                            <ul class="list-inside space-y-1 text-gray-700">
                                <li>
                                    <strong>1. Used Engines, Parts, and Components Importation (SP):</strong>
                                    <ul class="list-[upper-alpha] ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>Duly accomplished application form with "Affidavit of Undertaking"</li>
                                        <li>
                                            Original and photocopy of Proforma Invoice
                                        </li>
                                        <li>
                                            Business Name Certificate (for Single Proprietorship/Partnership) or SEC
                                            Registration (for
                                            corporations, new applicants only)
                                        </li>
                                        <li>
                                            In appropriate cases, applicants may be required to submit a brochure or any
                                            relevant literature describing the parts to be imported
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2. No-Dollar Importation of Used Motor Vehicle (NDI):</strong>
                                    <ul class="list-[upper-alpha] ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>
                                            <strong>Basic Requirements (For the Importer)</strong>
                                            <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                                <li>
                                                    Philippine passport (for Filipino citizens) showing that the
                                                    applicant has resided abroad for at least one (1) year, accumulated
                                                    within the last three (3) years from the date of filing the
                                                    application.
                                                </li>
                                                <li>
                                                    Immigrants holding a 13G or 13A Visa or Dual Citizens
                                                </li>
                                                <li>
                                                    SRRV Visa Holder under the Philippine Retirement Authority
                                                </li>
                                                <li>
                                                    47(a)(2) Visa Holder under the Balik Scientist Program
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Vehicle Requirements:</strong>
                                            <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                                <li>
                                                    Must be left-hand drive
                                                </li>
                                                <li>
                                                    Not to exceed 3,000 Kgs GVW
                                                </li>
                                                <li>
                                                    Registered under the name of the qualified importer for at least
                                                    six (6) months before application (Co-owners must submit an
                                                    Affidavit of Waiver)
                                                </li>
                                                <li>
                                                    Certificate of Roadworthiness and Emission Compliance (CEC) from
                                                    the country of origin, authenticated by the Philippine Embassy (for
                                                    non-Apostille countries) or apostilled (for Apostille-convention
                                                    countries), pursuant to CAA RA 8749
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Documentary Requirements:</strong>
                                            <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                                <li>
                                                    Completed and notarized Fair Trade Enforcement Bureau (FTEB
                                                    application form)
                                                </li>
                                                <li>
                                                    Completed and notarized Affidavit of Undertaking
                                                </li>
                                                <li>
                                                    One (1) copy of 2x2 photo with signature
                                                </li>
                                                <li>
                                                    Recent photo of the motor vehicle
                                                </li>
                                                <li>
                                                    Original or authenticated copy of Car Title or Registration (with
                                                    English translation if applicable)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Additional Requirements (depending on applicant’s status):</strong>
                                            <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                                <li>
                                                    Philippine Passport Holders: Original or authenticated copies of
                                                    old and new passport pages with entries
                                                </li>
                                                <li>
                                                    <strong>Dual Citizens:</strong>
                                                    <ul class="list-decimal ml-8 mt-1 space-y-1 text-gray-700">
                                                        <li>
                                                            Original or authenticated copy of both Philippine and
                                                            foreign passports
                                                        </li>
                                                        <li>
                                                            Original or authenticated copy of Identification
                                                            Certificate or Oath of Allegiance issued by the Bureau of
                                                            Immigration or a Philippine Consulate/Embassy (in lieu of a
                                                            Philippine passport)
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>Foreign Passport Holders (13A and 13G Visa
                                                        Holders):</strong>
                                                    <ul class="list-decimal ml-8 mt-1 space-y-1 text-gray-700">
                                                        <li>
                                                            Original or authenticated passport stamped with valid
                                                            13A/13G Visa
                                                        </li>
                                                        <li>
                                                            Immigrant Card (I-Card)
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>PRA SRRV Visa Holders:</strong> Original or authenticated
                                                    passport stamped with valid SRRV Visa
                                                </li>
                                                <li>
                                                    <strong>Balik-Scientist Program (47A2 Visa): </strong> Original or
                                                    authenticated passport stamped with valid 47A2 Visa
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Important Notes:</strong>
                                            <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                                <li>
                                                    Authentication is required when original documents cannot be
                                                    presented, unless otherwise stated
                                                </li>
                                                <li>
                                                    Non-original documents must be authenticated by the Philippine
                                                    Consulate/Embassy abroad
                                                </li>
                                                <li>
                                                    For vehicles from the UAE: Certificate of Car Title or
                                                    Registration must be authenticated by the UAE Ministry of Foreign
                                                    Affairs (MOFA) and certified by the Philippine Consulate/Embassy
                                                </li>
                                                <li>
                                                    Importation is subject to payment of taxes and duties
                                                </li>
                                                <li>
                                                    Personal appearance of the applicant at Fair Trade Enforcement
                                                    Bureau (FTEB) is required prior to vehicle release from the Bureau
                                                    of Customs (BOC)
                                                </li>
                                                <li>
                                                    Only one vehicle per family (husband, wife, and unemancipated
                                                    minor children) is allowed, and the program may be availed only once
                                                    (EO 156 as amended by EO 887-A)
                                                </li>
                                                <li>
                                                    Vehicle cannot be resold for three (3) years (EO 156 as amended by
                                                    EO 877-A)
                                                </li>
                                                <li>
                                                    Application must be filed within two (2) years of arrival
                                                </li>
                                                <li>
                                                    All requirements must be submitted to FTEB for evaluation and
                                                    issuance of the Authority to Import if qualified
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>3. How long is the estimated shipping time?</strong>
                                    <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>
                                            The estimated shipping time ranges from 2 to 3 months, depending on various
                                            factors. Real-time online tracking is available to keep you informed of any
                                            updates or delays. Please note that delivery times may vary due to weather
                                            conditions, local holidays, pick-up locations, port congestion, or customs
                                            clearance procedures.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>4. Can I track the status of my container?</strong>
                                    <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>
                                            <p class="text-gray-700">
                                                Yes. Click the
                                                <RouterLink to="/track" class="underline text-blue-500">Track
                                                </RouterLink>
                                                page at the upper right-hand corner and enter your complete
                                                invoice/tracking number
                                                shown on
                                                your invoice.
                                                You may also contact our customer service through the
                                                <RouterLink to="/contact" class="underline text-blue-500">Contact
                                                </RouterLink>
                                                page to inquire about the status of your shipment.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="collapse collapse-arrow bg-white border border-gray-200">
                        <input type="radio" name="accordion" />
                        <div class="collapse-title font-semibold">
                            5. What are the payment options?
                        </div>
                        <div class="collapse-content text-sm">
                            <p class="mt-3"><strong>Payment Options:</strong></p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    Once the customer confirms that he or she has all the required documents and is
                                    ready to submit them, the Pinoy Pride Worldwide team will request a payment of $200
                                    to assist in processing the documents. If, during the process, the customer decides
                                    not to proceed with the shipment, the $200 fee is non-refundable. However, if the
                                    customer prefers not to pay the $200, he or she may choose to process the documents
                                    independently.

                                    <div class="bg-blue-50 border-l-4 my-3 border-blue-500 p-4 rounded-r-md">
                                        <p class="text-gray-700 leading-relaxed">
                                            Note: If the document processing is completed with the assistance of the
                                            Pinoy Pride Worldwide team and the shipment proceeds, the $200 will be
                                            refunded or deducted from the contract price.
                                        </p>
                                    </div>
                                </li>
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

                            <p class="my-3"><strong>The quotation I will provide you—referred to as the contract
                                    price—already
                                    includes the following services:</strong></p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                <li>
                                    Trucking delivery of the container from the container yard to your U.S. address
                                    for loading, and transport to the port of origin.
                                </li>
                                <li>
                                    U.S. documentation and port charges.
                                </li>
                                <li>
                                    Ocean freight from the port of origin in the U.S. to the port of destination in
                                    Manila.
                                </li>
                                <li>
                                    Philippines port charges and customs clearance.
                                </li>
                                <li>
                                    Shipping line destination fees.
                                </li>
                                <li>
                                    Duties and taxes for all used items.
                                </li>
                                <li>
                                    Professional broker’s fees.
                                </li>
                                <li>
                                    BIR processing fee
                                </li>
                                <li>
                                    Handling fee
                                </li>
                                <li>
                                    Professional Fees
                                </li>
                                <li>
                                    Special Agreed Fees (SAF)
                                </li>
                                <li>
                                    <strong>Vehicles are subject to customs duties and taxes, including:</strong>
                                    <ul class="list-disc ml-8 mt-1 space-y-1 text-gray-700">
                                        <li>40% Customs Duty</li>
                                        <li>
                                            12% VAT (Value-Added Tax) – Bureau of Internal Revenue (BIR) - Mandatory
                                        </li>
                                        <li>Excise/Ad Valorem Tax (15%–100%, depending on engine size)</li>
                                    </ul>
                                </li>
                                <li>
                                    US & Philippines Custom Clearance Fee
                                </li>
                                <li>
                                    Final delivery of the container directly to your address anywhere in the
                                    Philippines.
                                </li>
                            </ul>
                            <div class="bg-blue-50 border-l-4 my-3 border-blue-500 p-4 rounded-r-md">
                                <p class="text-gray-700 leading-relaxed">
                                    Note: The shipper or consignee may provide their own manpower to handle the loading
                                    of the vehicle and any used household goods at the origin, as well as the unloading
                                    at the consignee’s destination address.
                                </p>
                            </div>

                            <p>
                                Failure to complete the loading at the origin within the first two (2) hours of free
                                time will result in an additional fee of $150.00 per hour thereafter.
                                Likewise, failure to complete the unloading at the destination within the first eight
                                (8) hours of free time will result in a Truck Detention Fee of Php 30,000.00 per day
                                thereafter.
                            </p>

                            <p>
                                Arranging adequate manpower in advance is highly recommended to ensure smooth operations
                                and avoid additional charges.
                            </p>
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
                    Watch our factual and documented loading and successful deliveries of Returning Resident Speedboat
                    and Motorcycle
                </h2>
                <div class="space-y-4">
                    <div class="w-full rounded-xl overflow-hidden shadow-md p-3">
                        <DeliveryCarousel :videos="deliveryVideos" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>