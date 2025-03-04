<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div class="p-4" v-editable="blok">
        <StoryblokComponent v-for="b in blok.content" :key="b._uid" :blok="b" />
    </div>
</template>