<script setup lang="ts">
import { SignInButton, SignedIn, SignedOut, UserButton } from "vue-clerk";
</script>

<template>
    <div>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton />
        </SignedOut>
    </div>
</template>

<style scoped></style>
