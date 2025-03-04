<script lang="ts" setup>
const { slug } = useRoute().params
const data = await useAsyncStoryblok(`post/${slug}`, { version: "draft" });
</script>

<template>
    <Head>
        <Title>Tsubaki - {{ data.name }}</Title>
    </Head>
    <StoryblokComponent v-if="data" :blok="data.content" />
</template>