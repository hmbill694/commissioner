<script setup lang="ts">
const { title } = defineProps<{ title: string }>()

</script>

<template>
  <div class="flex items-center">
    <NuxtLink to="/dashboard" class="btn btn-ghost">
      <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
    </NuxtLink>
    <h1 class="text-3xl font-bold">
      {{ title }}
    </h1>
  </div>
</template>