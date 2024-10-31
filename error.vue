<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError,
});

</script>

<template>
    <NuxtLayout name="default">
    <div class="flex flex-col justify-center items-center flex-1">
        <ErrorDisplay :message="props.error?.message ?? 'Unknown Error occurred' " />
    </div>
    </NuxtLayout>
</template>