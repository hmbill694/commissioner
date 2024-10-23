<script setup lang="ts">
import { ref } from 'vue'
const formData = ref({
  id: '12415212r1',
  address: "1234 West Main Street, Phoenix, AZ, 85003",
  name: "Your Dream Home",
  createdAt: new Date(),
  updatedAt: null,
  userId: 'user123',
  askingPrice: "345,600",
  commissionRate: "3.0%",
  description: "A quaint little 3 bed with loads of character. Great location, great schools!"
})

const submitForm = () => {
  // Handle form submission logic
  console.log(formData.value)
}
</script>

<template>
  <div class="flex items-center">
    <NuxtLink to="/" class="btn btn-ghost">
      <Icon name="heroicons:chevron-left-solid" size="1.2rem"/>
    </NuxtLink>
    <h1 class="text-3xl font-bold">
      Add Property
    </h1>
  </div>
  <form @submit.prevent="submitForm" class="p-6 shadow-md rounded">
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Property Name</span>
      </label>
      <input v-model="formData.name" type="text" class="input input-bordered" required />
    </div>

    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Address</span>
      </label>
      <input v-model="formData.address" type="text" class="input input-bordered" required />
    </div>

    <div class="form-control mb-4">
      <p class="label-text mb-2">Asking Price</p>
      <label class="input input-bordered flex justify-between items-center gap-3">
        <span>$</span>
        <input v-model="formData.askingPrice" type="number" class="flex-1" required />
      </label>
    </div>

    <div class="form-control mb-4">
      <p class="label-text mb-2">Commission Rate</p>
      <label class="input input-bordered flex justify-between items-center gap-3">
        <input v-model="formData.commissionRate" type="number" class="flex-1" required />
        <span>%</span>
      </label>
    </div>

    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea v-model="formData.description" class="textarea textarea-bordered" rows="3" required></textarea>
    </div>

    <!-- Hidden fields for createdAt, updatedAt, userId -->
    <input type="hidden" v-model="formData.createdAt" />
    <input type="hidden" v-model="formData.userId" />

    <button type="submit" class="btn btn-primary w-full">Submit</button>
  </form>
</template>
