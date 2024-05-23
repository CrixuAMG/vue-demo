<template>
    <div id="todos">
        <h1>
            {{ $t('todo') }} ref
        </h1>

        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <todo-item :todo="todo" :index="index" />
            </li>
        </ul>

        <form @submit.prevent="createTodo">
            <input name="todo" ref="todo" class="todo-input">

            <button type="submit">
                Create todo
            </button>
        </form>
    </div>
</template>

<script setup>
import TodoItem from '@/components/Todo/TodoItem.vue';
import { ref } from 'vue';
import { useTodoStore } from "@/stores/todo.js";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

const todo = ref(null);
const createTodo = () => {
    todoStore.addTodo(todo.value.value);
    todo.value.value = '';
};
</script>

<style scoped lang="scss">
h1 {
    color: var(--best-color-ever);
}
</style>
