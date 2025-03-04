<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
const getDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    }).format(new Date(date));
}
</script>

<template>
    <div v-editable="blok">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2 my-2">
                <UAvatar :alt="blok.author" size="sm" />
                <p class="text-base font-medium">{{ blok.author }}</p>
            </div>
            <p class="text-base font-medium">{{ getDate(blok.publication) }}</p>
        </div>
    </div>
</template>