<script setup lang="ts">
const { result } = await useLoader("listings/[agentId]")
</script>

<template>
    <AgentListing :properties="result.properties" :agentName="result.agentName"/>
</template>