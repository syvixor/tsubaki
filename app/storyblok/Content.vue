<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
const content = computed(() => renderRichText(blok.value));
</script>

<template>
    <div v-editable="blok">
        <div class="my-4">
            <div class="space-y-2" id="content" v-html="content" />
        </div>
    </div>
</template>

<style>
/* text-(--ui-primary) */
#content {
    a {
        color: var(--ui-primary);
    }

    a:hover {
        text-decoration: underline;
    }

    ul {
        list-style-type: disc;
        padding-left: 30px;
    }
}
</style>