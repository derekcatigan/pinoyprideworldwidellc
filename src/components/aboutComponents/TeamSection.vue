<script setup>
// Team Images
import TeamPicEdgar from '@/assets/images/teamPic/TeamPicEdgar.png';
import TeamPicJimmy from '@/assets/images/teamPic/TeamPicJimmy.png';
import TeamPicDexter from '@/assets/images/teamPic/TeamPicDexter.png';
import TeamPicJean from '@/assets/images/teamPic/TeamPicJean.png';
import TeamPicJoshua from '@/assets/images/teamPic/TeamPicJoshua.png';
import TeamPicAngelica from '@/assets/images/teamPic/TeamPicAngelica.png';

// Team data array
const teamMembers = [
    {
        img: TeamPicEdgar,
        name: "Edgar Ocampo",
        position: "President / CEO / Founder",
        intro: `Edgar plays a critical role in the organization. He provides vision and directions 
        for business growth and expansion across the country. He serves as the liaison to the 
        forwarders, logistics, and shipping partners in the USA, Canada, Europe, and Asian countries, 
        to establish sound business relationships ensuring smooth accommodation, and safe and timely 
        door-to-door delivery of balikbayan boxes to families in the Philippines. Aside from having a 
        Mechanical Engineer license (1982), Edgar is also a visionary and an entrepreneur. 
        Below is a list of Edgar’s engagements in the past years:`,
        experiences: [
            "1984-2000: Owner/Operator of seven (7) Hardware stores. Supplier of hardware, electrical, and bicycle parts of one hardware store in one town or city, in the island of Leyte, and parts of Mindanao.",
            "1995-1996: President, Association of Business Hardware",
            "1996-1997: President, Hauler Association",
            "1996-1998: Distributor of Grant Cement",
            "2004-2012: Owner/Operator of Janitorial Cleaning business in Washington, USA.",
            "2016-2019: Former agent of Star Cargo of ABS-CBN, Blue Box Cargo Express, and Cargo Plus.",
            "2020-present: Operating Pinoy Pride LLC across the country."
        ]
    },
    {
        img: TeamPicJimmy,
        name: "Jimmy Locsin",
        position: "General Manager and VP of Operations",
        description:
            `Jimmy has been connecting Filipino families in the homeland and the United State of America through the balikbayan boxes. He considers the balikbayan box as a symbol of affection for his family and friends. He loves to see the excitement in the face of kababayan (countrymen) every time they send balikbayan boxes. Jimmy joins Pinoy Pride LLC as the overall general manager to represent all Pinoy Pride outlets across the United States.
            
            He is adept in helping people develop and be productive in their tasks ensuring profitability. He is a thoughtful leader and a confident decision-maker. As a general manager, he is responsible for formulating overall strategy, managing people, and establishing policies.

            He is a former naval officer in the Philippine Navy, AFP, and a member of the Naval Officer’s Qualification Charlie (NOQC) ’83 Class Matyag. He had a biology degree before migrating to the United States in 1995. He worked at Kirshenbaun Bond and Partners for 5 years as Supervisor of the Office Services Department before moving to Mount Sinai Hospital – Brooklyn, New York where he is currently employed. Jimmy loves to see the excitement of every kababayan (countrymen) when they send their balikbayan boxes to their loved ones.
            `,
    },
    {
        img: TeamPicAngelica,
        name: "Angelica F. Nerves",
        position: `Marketing Director/Customer Representative`,
        description:
            `Angelica F. Nerves holds a Bachelor of Science in Information Technology major in Programming from Southern Leyte State University. During her academic journey, she not only built a solid technical foundation but also showcased her leadership capabilities as the project manager of her capstone project, where she guided her team in delivering innovative solutions.

            Currently, Angelica is building her professional career as a Call Center Representative under a banking and financial account. In this role, she provides assistance to clients with their financial needs and digital banking concerns, combining her technical knowledge with excellent customer service skills. Her unique blend of IT expertise, leadership experience, and communication skills allows her to adapt in both technology and client-focused environments.
            `,
    },
    {
        img: TeamPicDexter,
        name: "Dexter Fulache",
        position: "Accountant and Consultant",
        description:
            `Dexter received his Bachelor’s degree in Accountancy from the University of San Carlos in Cebu City, Philippines, and successfully completed the CPA Licensure Examination.

            Currently based in Canada, Dexter has 15 years of accounting experience in various organizations and industries with an extensive background in corporate accounting, focusing specifically on cost control and value for investment-based decision making and the development of financial knowledge in operation.
            `,
    },
    {
        img: TeamPicJean,
        name: "Jean H. Suarez",
        position: "IT Consultant and Web Host",
        description:
            `Jean is working as a software engineer for HIPAA-compliant software applications. He received a Master of Science degree in Software Engineering from Maryville University in the United States and a Bachelor of Arts in Anthropology from the University of San Carlos Philippines.

            He is currently living in New York City and an active member of various Filipino community groups in New York and Pennsylvania. He used to work as a community development advocate for more than ten years in the Philippines.
            `,
    },
    {
        img: TeamPicJoshua,
        name: "Derek Joshua Catigan",
        position: "Junior Software Developer",
        description:
            `
                A Full-Stack Software Developer focused on building secure, scalable, and user-friendly web applications. He values clean and minimalist design principles, ensuring every project is functional, intuitive, and visually refined.

                He earned his Bachelor of Science in Information Technology, major in Programming, from Southern Leyte State University, where he also served as an IT department officer.

                In October 2023, he represented his region as a participant in the Eastern Visayas – Regional Pitching Competition of the Philippine Startup Challenge 8. Collaborating with a team, he helped design and pitch a web-based platform that connects new homeowners with skilled blue-collar workers. The project aimed to improve livelihood opportunities and make home service hiring easier, safer, and more accessible for communities.

                Originally from Sogod, Southern Leyte and now based in Mandaue City, Cebu, he is passionate about continuous learning, developing innovative solutions, and leveraging technology to create meaningful impact.
            `,
    },
];
</script>

<template>
    <div class="max-w-6xl mx-auto px-6">
        <!-- Title -->
        <div class="text-center mb-12 relative">
            <h2
                class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                Our Team
            </h2>
            <div class="mt-3 w-24 h-1 bg-indigo-600 mx-auto rounded-full shadow-md"></div>
        </div>


        <!-- Team Grid -->
        <div class="space-y-8">
            <div v-fade-slide-up="50" v-for="(member, index) in teamMembers" :key="index"
                class="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div class="flex flex-col sm:flex-row items-stretch">
                    <!-- Image + Name + Position -->
                    <div class="sm:w-1/3 w-full flex flex-col items-center text-center p-4">
                        <img :src="member.img" :alt="member.name" class="w-full object-cover" />

                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ member.name }}
                        </h3>
                        <p class="text-indigo-600 font-medium whitespace-pre-line">
                            {{ member.position }}
                        </p>
                    </div>

                    <!-- Info -->
                    <div class="sm:w-2/3 w-full p-6 flex flex-col justify-center">
                        <!-- Paragraph (if exists) -->
                        <p v-if="member.intro" class="text-gray-600 text-sm leading-relaxed mb-4">
                            {{ member.intro }}
                        </p>

                        <!-- Bullet list (if exists) -->
                        <ul v-if="member.experiences"
                            class="list-disc pl-5 text-gray-600 text-sm leading-relaxed space-y-2">
                            <li v-for="(item, i) in member.experiences" :key="i">
                                {{ item }}
                            </li>
                        </ul>

                        <!-- Else fallback if only description is plain text -->
                        <p v-else-if="member.description"
                            class="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {{ member.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
