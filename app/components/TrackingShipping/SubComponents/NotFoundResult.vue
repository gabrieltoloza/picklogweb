<template>
    <div class="p-4 text-center font-semibold text-xl bg-transparent text-red-700/70 gap-5 h-auto rounded-box sm:pr-24">
        <span>{{ props.message }}</span>
    </div>
</template>


<script setup lang="ts">


const props = defineProps<{
    message: string;
}>();


</script>

<style scoped></style>