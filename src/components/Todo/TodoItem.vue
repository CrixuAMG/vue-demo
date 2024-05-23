<template>
    <div>
        {{ todo }}

        <span @click="todoStore.removeTodo(index)">
            &times;
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTodoStore } from "@/stores/todo.js";

const todoStore = useTodoStore();

const props = defineProps({
    todo: {
        required: true,
        type: String,
    },
    index: {
        required: true,
        type: Number,
    },
});
</script>

<style scoped>
div {
    &:hover {
        background-color: lightgrey;
        color: black;
        transition: all 0.3s ease-in-out;
    }
}
</style>
