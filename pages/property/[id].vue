<script setup lang="ts">

</script>

<template>
    <div class="flex-1 flex-col">
        <div class="flex items-center">
            <BackButton title="Property Details" />
        </div>
        <div class="card bg-base-100 shadow-xl p-4 ">
            <div class="card-body h-full">
                <NuxtErrorBoundary>
                    <template #default>
                        <PropertyDetails />
                    </template>
                    <template #error="{ error }">
                        <p>An error occurred: {{ error }}</p>
                        <ErrorDisplay :message="error.message"/>
                    </template>
                </NuxtErrorBoundary>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* You can add specific styles here if needed */
</style>
