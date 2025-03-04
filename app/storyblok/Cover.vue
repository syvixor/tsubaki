<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div v-editable="blok">
        <div class="my-4">
            <img :src="blok.source.filename" :alt="blok.source.alt" class="rounded-lg" />
        </div>
    </div>
</template>