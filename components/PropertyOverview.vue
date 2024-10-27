<script setup lang="ts">
import type { Property } from '~/server/db/schema';

const props = defineProps<{ properties: Property[], agentId: string }>()


const { filterString, filteredProperties } = usePropertyFilter({ properties: props.properties })
</script>

<template>
    <div class="p-6 flex flex-col flex-1">
        <TitleWithSearch
            page-title="Manage your properties"
            @search-update="(value) => { filterString = value }"
         >
                <NuxtLink class="btn btn-info" :to="`/listings/${props.agentId}`">
                    Link to my listings
                </NuxtLink>
                <NuxtLink class="btn btn-success" to="/add-property">
                    Add Property
                </NuxtLink>
        </TitleWithSearch>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll" v-if="filteredProperties.length > 0">
            <PropertyCard v-for="(property, index) in filteredProperties" :key="index" :property="property"/>
        </div>
        <div v-else class="flex-1 flex justify-center items-center">
            <NothingToSeeHere message="You have no listings currently" />
        </div>
    </div>
</template>