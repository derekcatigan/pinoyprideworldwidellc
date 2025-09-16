import { createWebHistory, createRouter } from "vue-router";
import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';
import NewsView from '@/views/News.vue';
import TrackView from '@/views/Track.vue';
import ContactView from '@/views/Contact.vue';
import CareersView from '@/views/Careers.vue';
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
        path: '/track', name: 'Track', component: TrackView
    },
    {
        path: '/contact', name: 'Contact', component: ContactView
    },
    {
        path: '/careers', name: 'Careers', component: CareersView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router