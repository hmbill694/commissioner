<script setup lang="ts">
import type { Property } from '~/server/db/schema';

const props = defineProps<{ properties: Property[], agentName: string }>()

const { filterString, filteredProperties } = usePropertyFilter({ properties: props.properties })
</script>


<template>
    <div class="p-6 flex flex-col flex-1">
        <div class="justify-between flex flex-col lg:flex-row mb-2">
            <h1 class="text-3xl font-bold mb-6">
                Listings represented by {{ props.agentName }}:
            </h1>
            <div class="flex gap-2">
                <SearchBar class="flex-1" @search-update="(value: string) => {
                    filterString = value
                }" />
                <slot />
            </div>
        </div>
        <div class="overflow-y-scroll" v-if="filteredProperties.length > 0">
            <AgentListingPropertyTable :properties="props.properties"/>
        </div>
        <div v-else class="flex-1 flex justify-center items-center">
            <NothingToSeeHere message="No listings found." />
        </div>
    </div>
</template>