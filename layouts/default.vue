<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col bg-base-300">
        <nav class="navbar bg-base-100 justify-between">
            <NuxtLink to="/" class="btn btn-ghost text-2xl"
                >Commissioner</NuxtLink
            >
            <UserButton />
        </nav>
        <main class="card p-6 flex-1 bg-base-100 m-6">
            <NuxtLoadingIndicator />
            <slot></slot>
        </main>
    </div>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
