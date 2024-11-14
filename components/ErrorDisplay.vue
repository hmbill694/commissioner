<script setup lang="ts">
defineProps({
    message: {
        type: String,
        default: 'Could not fetch the requested resource'
    },
})
const handleError = () => clearError({ redirect: "/dashboard" });
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-full flex-1">
        <!-- 3x3 grid of squares -->
        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-10 fill-red-600" >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        </div>

        <!-- Dynamic subtitle -->
        <div class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-gray-400">
                {{ message }}
            </h2>
            <button @click="handleError" class="btn btn-info">Return to your properties.</button>
        </div>
    </div>
</template>
