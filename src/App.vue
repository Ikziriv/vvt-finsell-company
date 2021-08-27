<script setup>
import Header from "@/components/Header.vue";
import NotificationMain from "@/components/NotificationMain.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <main>
      <NotificationMain />
      <router-view />
    </main>
    <Footer />
  </div>
</template>
