<template>
    <div class="p-4 flex justify-center font-semibold text-xl text-red-500 gap-5 h-auto bg-base-200 rounded-box">
        <span>{{ props.message }}</span>
    </div>
</template>


<script setup lang="ts">


const props = defineProps<{
    message: string;
}>();


</script>

<style scoped></style>