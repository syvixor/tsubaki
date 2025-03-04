<script lang="ts" setup>
const colorMode = useColorMode();

const isLoading = ref(true);
onMounted(() => isLoading.value = false);

const onThemeSwitch = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
</script>

<template>
    <ClientOnly v-if="!isLoading">
        <UButton :icon="colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
        color="neutral" variant="ghost" @click="onThemeSwitch" />
    </ClientOnly>
    <UButton color="neutral" variant="ghost" loading v-else />
</template>