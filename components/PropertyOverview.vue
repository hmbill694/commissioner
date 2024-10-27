<script setup lang="ts">
import type { Property } from '~/server/db/schema';

const props = defineProps<{ properties: Property[] }>()

const searchValue = ref("")

const filteredProperties = computed(() => {
    const lowercaseSearch = searchValue.value.toLocaleLowerCase()
    return props.properties.filter(property =>
        property.name?.toLowerCase().includes(lowercaseSearch) || property.address.toLocaleLowerCase().includes(lowercaseSearch)
    )
})

</script>

<template>
    <div class="p-6 flex flex-col flex-1">
        <div class="justify-between flex flex-col lg:flex-row mb-2">
            <h1 class="text-3xl font-bold mb-6">
                Listings represented by You:
            </h1>
            <div class="flex gap-2">
                <SearchBar class="flex-1" @search-update="(value: string) => {
                    searchValue = value
                }" />
                <slot />
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll" v-if="filteredProperties.length > 0">
            <PropertyCard v-for="(property, index) in filteredProperties" :key="index" :property="property"/>
        </div>
        <div v-else class="flex-1 flex justify-center items-center">
            <NothingToSeeHere :message="emptyMessage" />
        </div>
    </div>
</template>