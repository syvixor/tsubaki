<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div v-editable="blok">
        <p class="text-lg font-medium">{{ blok.value }}</p>
    </div>
</template>