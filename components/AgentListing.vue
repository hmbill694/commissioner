<script setup lang="ts">
import type { Property } from '~/server/db/schema';

const props = defineProps<{ properties: Property[], agentName: string, userId: string }>()

const { filterString, filteredProperties } = usePropertyFilter({ properties: props.properties })

function saveToClipboard() {
    console.log(`${window.location.href}listings/${props.userId}`)
    navigator.clipboard.writeText(`${window.location.href}listings/${props.userId}`).then(() => {
        console.log("Saved to clipboard")
    })
}

</script>


<template>
    <div class="p-6 flex flex-col flex-1">
        <TitleWithSearch 
        :with-back="true"
        :page-title="`Listings represented by ${props.agentName}`" 
        @search-update="(value) => {
            filterString = value
        }" 
        >
            <button @click="saveToClipboard" class="btn btn-ghost">Copy link to listings</button>
        </TitleWithSearch>
        <div class="overflow-y-scroll" v-if="filteredProperties.length > 0">
            <AgentListingPropertyTable :properties="props.properties" />
        </div>
        <div v-else class="flex-1 flex justify-center items-center">
            <NothingToSeeHere message="No listings found." />
        </div>
    </div>
</template>