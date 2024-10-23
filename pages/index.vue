<script setup lang="ts">
import { ref } from "vue";
import type { Property } from "~/server/db/schema";
definePageMeta({
    middleware: "auth",
    auth: {
        guestRedirectUrl: "/sign-in",
    },
});

const searchValue = ref("")

const properties = ref<Property[]>([
    {
        id: '12415212r1',
        address: "1234 West Main Street, Phoenix, AZ, 85003",
        name: "Your Dream Home",
        createdAt: new Date(),
        updatedAt: null,
        userId: 'user123',
        askingPrice: "345,600",
        commissionRate: "3.0%",
        description: "A quaint little 3 bed with loads of character. Greate location, great schools!"
    },
    {
        id: '12415212r1',
        address: "1234 West Main Street, Phoenix, AZ, 85003",
        name: "Your Dream Home",
        createdAt: new Date(),
        updatedAt: null,
        userId: 'user123',
        askingPrice: "345,600",
        commissionRate: "3.0%",
        description: "A quaint little 3 bed with loads of character. Greate location, great schools!"
    },
    {
        id: '12415212r1',
        address: "1234 West Main Street, Phoenix, AZ, 85003",
        name: "Your Dream Home",
        createdAt: new Date(),
        updatedAt: null,
        userId: 'user123',
        askingPrice: "345,600",
        commissionRate: "3.0%",
        description: "A quaint little 3 bed with loads of character. Greate location, great schools!"
    },
]);

const filteredProperties = computed(() => {
    const lowercaseSearch = searchValue.value.toLocaleLowerCase()
    return properties.value.filter(property =>
        property.name?.toLowerCase().includes(lowercaseSearch) || property.address.toLocaleLowerCase().includes(lowercaseSearch)
    )
})

</script>

<template>
    <div class="p-6">
        <div class="justify-between flex flex-col lg:flex-row mb-2">
            <h1 class="text-3xl font-bold mb-6">
                Properties represented by you:
            </h1>
            <div class="flex gap-2">
                <SearchBar class="flex-1" @search-update="(value) => {
                    searchValue = value
                }" />
                <NuxtLink class="btn btn-success" to="/add-property">
                    Add Property
                </NuxtLink>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard v-for="(property, index) in filteredProperties" :key="index" :property="property" />
        </div>
    </div>
</template>
