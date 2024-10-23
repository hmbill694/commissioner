<script setup lang="ts">
import type { Property } from '~/server/db/schema';

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
]);
</script>

<template>
    <div class="p-6">
        <div class="flex justify-between">
            <h1 class="text-3xl font-bold mb-6">
                Properties represented by you:
            </h1>
            <SearchBar />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard v-for="(property, index) in properties" :key="index" :property="property" />
        </div>
    </div>
</template>