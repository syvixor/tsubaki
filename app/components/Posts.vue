<script lang="ts" setup>
const { data } = await useStoryblokApi().getStories({ version: "published" });
const getDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    }).format(new Date(date));
}
</script>

<template>
    <div class="space-y-2 p-4">
        <div class="flex flex-col">
            <h2 class="text-xl font-bold">Recent Posts</h2>
            <p class="text-base font-normal">Recent posts featuring the latest updates</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="group flex flex-col gap-2" v-for="post in data.stories">
                <div class="rounded-lg overflow-hidden">
                    <img :src="post.content.content[3].source.filename" :alt="post.content.content[3].source.alt"
                    class="rounded-lg transition-transform group-hover:scale-110">
                </div>
                <div class="flex flex-col">
                    <NuxtLink :to="`/${post.full_slug}`" class="text-lg font-semibold line-clamp-1 
                    hover:text-[var(--ui-primary)] hover:transition-colors">
                        {{ post.content.content[0].value }}</NuxtLink>
                    <p class="text-sm font-medium line-clamp-2">{{ post.content.content[1].value }}</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-2 my-2">
                        <UAvatar :alt="post.content.content[2].author" size="sm" />
                        <p class="text-base font-medium">{{ post.content.content[2].author }}</p>
                    </div>
                    <p class="text-base font-medium">{{ getDate(post.content.content[2].publication) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>