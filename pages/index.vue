<script setup lang="ts">
import PropertyOverview from "~/components/PropertyOverview.vue";
definePageMeta({
    middleware: "auth",
    auth: {
        guestRedirectUrl: "/sign-in",
    },
});

const { result } = await useLoader("index") 


function saveToClipboard() {
    console.log(`${window.location.href}listings/${result.value?.userId}`)
    navigator.clipboard.writeText(`${window.location.href}listings/${result.value?.userId}`).then(() => {
        console.log("Saved to clipboard")
    })
}
</script>

<template>
    <PropertyOverview 
    :properties="result.properties" 
    :agentId="result?.userId ?? 'not-found' "
    >
    </PropertyOverview>
</template>
