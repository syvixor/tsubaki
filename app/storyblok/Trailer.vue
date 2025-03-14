<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div v-editable="blok">
        <div class="flex flex-col justify-center items-center gap-4 my-8">
            <h2 class="text-xl font-bold text-center">{{ blok.label }}</h2>
            <iframe :src="blok.source" title="Trailer" frameborder="0"
                class="w-full md:w-3/4 lg:w-3/5 h-48 md:h-72 lg:h-80"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
        </div>
    </div>
</template>