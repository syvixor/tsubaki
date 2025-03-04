<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div v-editable="blok">
        <div class="flex flex-col justify-center items-center gap-4 my-8">
            <h2 class="text-xl font-bold">{{ blok.source.alt }}</h2>
            <img :src="blok.source.filename" :alt="blok.source.alt" class="w-3/4 md:w-1/2 lg:w-1/3 rounded-lg" />
        </div>
    </div>
</template>