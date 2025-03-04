<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="space-y-2 p-4">
        <div class="flex justify-between items-center">
            <div class="flex flex-col">
                <p class="text-sm font-normal">©{{ currentYear }}, Tsubaki</p>
                <p class="text-base font-normal">All Rights Reserved</p>
            </div>
            <UButton to="https://github.com/syvixor/tsubaki" icon="i-simple-icons-github" variant="ghost" />
        </div>
    </div>
</template>