<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>


<template>
  <NuxtLink @click="$router.back()" class="btn btn-ghost">
    <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
  </NuxtLink>
  <h2>{{ props.title  }}</h2>
</template>

<style scoped></style>
