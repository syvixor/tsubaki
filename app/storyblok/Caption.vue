<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div v-editable="blok">
        <h1 class="text-2xl font-bold">{{ blok.value }}</h1>
    </div>
</template>