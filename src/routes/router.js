// src\routes\router.js
import { createWebHistory, createRouter } from "vue-router";
import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';
import NewsView from '@/views/News.vue';
import TrackView from '@/views/Track.vue';
import ContactView from '@/views/Contact.vue';
import CareersView from '@/views/Careers.vue';
import ProhibitedItems from "@/views/ProhibitedItems.vue";
import BalikbayanService from "@/views/BalikbayanService.vue";
import VehicleShipService from "@/views/VehicleShipService.vue";
import HouseholdShipService from "@/views/HouseHoldShipService.vue";
import FAQ from "@/views/Faq.vue";

const routes = [
    {
        path: '/', name: 'Home', component: HomeView
    },
    {
        path: '/about-us', name: 'About Us', component: AboutView
    },
    {
        path: '/news', name: 'News', component: NewsView
    },
    {
        path: '/news/:id',
        name: 'NewsDetail',
        component: () => import('@/views/NewsDetail.vue'),
        props: true
    },
    {
        path: '/track', name: 'Track', component: TrackView
    },
    {
        path: '/contact', name: 'Contact', component: ContactView
    },
    {
        path: '/services/prohibited-items', name: 'Prohibited Items', component: ProhibitedItems
    },
    {
        path: '/services/balikbayan-box', name: 'Balikbayan Box Shipment', component: BalikbayanService
    },
    {
        path: '/services/vehicle', name: 'Vehicle Shipment', component: VehicleShipService
    },
    {
        path: '/services/household-goods', name: 'Household Goods Shipment', component: HouseholdShipService
    },
    {
        path: '/careers', name: 'Careers', component: CareersView
    },
    {
        path: '/faq', name: 'FAQs', component: FAQ
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router