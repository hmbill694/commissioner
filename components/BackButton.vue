<script setup lang="ts">
const router = useRouter()


</script>


<template>
  <NuxtLink @click="$router.back()" class="btn btn-ghost">
    <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
  </NuxtLink>
</template>

<style scoped></style>
