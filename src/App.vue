<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="w-full h-auto">
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>
