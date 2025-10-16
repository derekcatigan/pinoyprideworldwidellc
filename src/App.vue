<script setup>
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Header />
  <main class="bg-gray-100">
    <RouterView />
  </main>
  <Footer />
</template>
