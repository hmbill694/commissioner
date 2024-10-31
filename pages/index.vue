<script setup lang="ts">
import PropertyOverview from "~/components/PropertyOverview.vue";
definePageMeta({
    middleware: "auth",
    auth: {
        guestRedirectUrl: "/sign-in",
    },
});

const { result, error } = await useLoader("index")

if (error.value) {
  throw createError({ statusMessage: error.value.statusMessage})
}

</script>

<template>
    <PropertyOverview 
    :properties="result?.properties ?? []" 
    :agentId="result?.userId ?? 'not-found' "
    />
</template>
