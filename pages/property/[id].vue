<template>
  <div class="flex-1 flex-col">
  <div class="flex items-center">
    <NuxtLink to="/" class="btn btn-ghost">
      <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
    </NuxtLink>
    <h1 class="text-3xl font-bold">
      Property Details
    </h1>
  </div>
    <div class="card bg-base-100 shadow-xl p-4 ">
      <div class="card-body h-full">
        <h2 class="card-title text-2xl font-bold">{{ property.name }}</h2>
        <p class="mb-2">
          <strong>Address:</strong> {{ property.address }}
        </p>
        
        <p class="mb-2">
          <strong>Asking Price:</strong> ${{ formatPrice(property.askingPrice) }}
        </p>
        
        <p class="mb-2">
          <strong>Commission Rate:</strong> {{ property.commissionRate }}
        </p>
        
        <p class="mb-4">
          <strong>Description:</strong> {{ property.description }}
        </p>
  
        <div class="text-sm text-gray-500">
          <p><strong>Created At:</strong> {{ formatDate(property.createdAt) }}</p>
          <p v-if="property.updatedAt"><strong>Updated At:</strong> {{ formatDate(property.updatedAt) }}</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Mock property data
  const property = ref({
    id: '12415212r1',
    address: "1234 West Main Street, Phoenix, AZ, 85003",
    name: "Your Dream Home",
    createdAt: new Date(),
    updatedAt: null,
    userId: 'user123',
    askingPrice: "345600",
    commissionRate: "3.0%",
    description: "A quaint little 3 bed with loads of character. Great location, great schools!"
  })
  
  const formatDate = (date: Date | null) => {
    if (!date) return "N/A"
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
  }
  
  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  </script>
  
  <style scoped>
  /* You can add specific styles here if needed */
  </style>
