<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue';

const { result } = await useLoader("listings/[agentId]")

</script>

<template>
    <PropertyOverview 
    :properties="result.properties" 
    :representedBy="result.agentName"
    :viewerIsRepresenting="result.agentIsViewer ?? false" 
    />
</template>