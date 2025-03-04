<script lang="ts" setup>
const { color } = useAppConfig();
</script>

<template>
    <NuxtLoadingIndicator :color="color" />
    <div class="min-h-screen flex flex-col relative lg:w-3/4 mx-auto">
        <Header />
        <div class="flex-grow">
            <slot />
        </div>
        <Footer />
    </div>
</template>