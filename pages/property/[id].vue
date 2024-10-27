<script setup lang="ts">
import BackButton from '~/components/BackButton.vue';

const { result } = await useLoader("property/[id]")

const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"

    const date = new Date(dateString)

    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
</script>

<template>
    <div class="flex-1 flex-col">
        <div class="flex items-center">
            <BackButton title="Property Details" />
        </div>
        <div class="card bg-base-100 shadow-xl p-4 ">
            <div class="card-body h-full">
                <h2 class="card-title text-2xl font-bold">{{ result.property.name }}</h2>
                <p class="mb-2">
                    <strong>Address:</strong> {{ result.property.address }}
                </p>

                <p class="mb-2">
                    <strong>Asking Price:</strong> ${{ formatPrice(result.property.askingPrice) }}
                </p>

                <p class="mb-2">
                    <strong>Commission Rate:</strong> {{ result.property.commissionRate }}
                </p>

                <p class="mb-4">
                    <strong>Description:</strong> {{ result.property.description }}
                </p>

                <div class="text-sm text-gray-500">
                    <p><strong>Created At:</strong> {{ formatDate(result.property.createdAt) }}</p>
                    <p v-if="result.property.updatedAt"><strong>Updated At:</strong> {{ formatDate(result.property.updatedAt) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* You can add specific styles here if needed */
</style>
