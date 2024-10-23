<script setup lang="ts">
const router = useRouter()
console.log(router.options.history.state.back?.toString() ?? "nada")
</script>

<template>
  <NuxtLink :to="$router.options.history.state.back?.toString()" class="btn btn-ghost">
    <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
  </NuxtLink>
</template>

<style scoped></style>
