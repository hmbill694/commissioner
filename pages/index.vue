<script setup lang="ts">
import LandingPage from "~/components/LandingPage.vue";
definePageMeta({ middleware: 'guest', auth: { authenticatedRedirectUrl: '/dashboard' } })


</script>

<template>
    <LandingPage />
</template>
