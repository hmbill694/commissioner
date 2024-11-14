<script setup lang="ts">
definePageMeta({ middleware: 'guest', auth: { authenticatedRedirectUrl: '/dashboard' } })

</script>

<template>
    <div class="flex justify-center items-center flex-1">
        <SignIn path="/sign-in" class="w-full h-full" />
    </div>
</template>

<style scoped></style>