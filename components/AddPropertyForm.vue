<script setup lang="ts">
import PageTitle from './PageTitle.vue';

const { enhance } = await useFormAction({})

</script>

<template>
  <PageTitle title="Add Property" />
  <form method="POST" v-enhance="enhance" action="add-property" class="p-6 shadow-md rounded">
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Property Name</span>
      </label>
      <input type="text" class="input input-bordered" required name="name" />
    </div>

    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Address</span>
      </label>
      <input class="input input-bordered" required name="address"/>
    </div>

    <div class="form-control mb-4">
      <p class="label-text mb-2">Asking Price</p>
      <label class="input input-bordered flex justify-between items-center gap-3">
        <span>$</span>
        <input class="flex-1" type="text" required name="askingPrice"/>
      </label>
    </div>

    <div class="form-control mb-4">
      <p class="label-text mb-2">Commission Rate</p>
      <label class="input input-bordered flex justify-between items-center gap-3">
        <input class="flex-1" required name="commissionRate" />
        <span>%</span>
      </label>
    </div>

    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea class="textarea textarea-bordered" rows="3" required name="description"></textarea>
    </div>

    <button type="submit" class="btn btn-primary w-full">Submit</button>
  </form>
</template>
