<script setup lang="ts">
import ErrorDisplay from './ErrorDisplay.vue';

const { result, error } = await useLoader("listings/[agentId]")

if (error.value || !result.value) {
    throw createError({ message: error?.value?.message ?? "No Listings found for this agent." })
}

const { filterString, filteredProperties } = usePropertyFilter({ properties: result.value.properties })

function saveToClipboard() {
    navigator.clipboard.writeText(`${window.location.href}listings/${result.value.userId}`).then(() => {
        console.log("Saved to clipboard")
    })
}

</script>


<template>
    <div class="p-6 flex flex-col flex-1">
        <TitleWithSearch 
        :with-back="true"
        :page-title="`Listings represented by ${result.agentName}`" 
        @search-update="(value) => {
            filterString = value
        }" 
        >
            <button @click="saveToClipboard" class="btn btn-ghost">Copy link to listings</button>
        </TitleWithSearch>
        <div class="overflow-y-scroll" v-if="filteredProperties.length > 0">
            <AgentListingPropertyTable :properties="filteredProperties" />
        </div>
        <div v-else class="flex-1 flex justify-center items-center">
            <NothingToSeeHere message="No listings found." />
        </div>
    </div>
</template>