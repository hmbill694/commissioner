<script setup lang="ts">
const props = defineProps<{ pageTitle: string }>()

const emit = defineEmits<{
    searchUpdate: [value: string]
}>()

function bubbleSearch(value: string) {
    emit("searchUpdate", value)
}
</script>

<template>
    <div class="justify-between flex flex-col lg:flex-row mb-2">
        <div class="flex gap-2 items-center mb-6">
            <h1 class="text-3xl font-bold">
                {{ props.pageTitle }}
            </h1>
        </div>
        <div class="flex gap-2">
            <SearchBar class="flex-1" @search-update="bubbleSearch" />
            <slot />
        </div>
    </div>
</template>