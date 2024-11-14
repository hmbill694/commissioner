<template>
  <table class="table table-zebra card shadow-xl rounded-lg bg-base-300 w-full">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ camelCaseToWords(header) }}</th>
        <th>Go To</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="property in properties" :key="property.id">
        <td v-for="header in headers" :key="header">
          {{ formatTableData(header, property) }}
        </td>
        <td>
          <NuxtLink class="btn btn-ghost btn-circle" :to="`/property/${property.id}`">
            <Icon name="heroicons:arrow-right-start-on-rectangle" size="1rem"/>
          </NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Property } from '~/server/db/schema';

defineProps<{ properties: Property[] }>()

const headers = ref<(keyof Property)[]>(['name', 'address', 'askingPrice', 'commissionRate']);


function formatTableData(column: keyof Property, property: Property) {
  if (column === "askingPrice") {
    return `$${Number.parseFloat(property[column]).toLocaleString()}`
  }

  if (column === "commissionRate") {
    return `${Number.parseFloat(property[column]).toLocaleString()}`
  }

  return property[column]
}

function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
</script>