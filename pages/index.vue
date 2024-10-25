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
    representedBy="You"
    :viewerIsRepresenting="true" 
    >
                <button class="btn btn-info" @click="saveToClipboard">
                    Link to my listings
                </button>
                <NuxtLink class="btn btn-success" to="/add-property">
                    Add Property
                </NuxtLink>
    </PropertyOverview>
</template>
