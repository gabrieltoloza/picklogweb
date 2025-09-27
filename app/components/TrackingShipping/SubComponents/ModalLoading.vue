<template>

    <dialog id="my_modal_2" class="modal" :open="open">
        <div class="modal-box text-center w-[150px] bg-orange-400/50">
            <span class="loading loading-spinner loading-lg bg-gray-200"></span>
        </div>
    </dialog>


    <div class="modal-backdrop fixed top-0 left-0 z-50 bg-black opacity-50 w-screen h-screen"></div>
    
</template>


<script setup lang="ts">

interface Props {
    open: boolean
}

defineProps<Props>();

</script>