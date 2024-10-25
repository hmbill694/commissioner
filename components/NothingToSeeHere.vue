<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <!-- 3x3 grid of squares -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div v-for="n in 9" :key="n" class="w-16 h-16 bg-gray-300"></div>
      </div>
  
      <!-- Dynamic subtitle -->
      <h2 class="text-lg font-semibold text-gray-400">
        {{ message }}
      </h2>
    </div>
  </template>
  
  <script setup lang="ts">
  // Accept a dynamic message as a prop
  defineProps({
    message: {
      type: String,
      default: 'No content available at the moment.'
    }
  })
  </script>
  