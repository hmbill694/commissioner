<template>
  <table class="table table-zebra card shadow-xl rounded-lg bg-base-300 w-full">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ camelCaseToWords(header) }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="property in properties" :key="property.id">
        <td v-for="header in headers" :key="header">
          {{ property[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Property } from '~/server/db/schema';

const props = defineProps<{ properties: Property[] }>()

const headers = ref<(keyof Property)[]>(['name', 'address', 'askingPrice', 'commissionRate']);

function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
</script>