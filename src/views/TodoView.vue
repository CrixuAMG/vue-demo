<template>
    <div id="todos">
        <h1>
            {{ $t('todo') }}
        </h1>

        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <todo-item henkie="foo" :todo="todo" :index="index" />
            </li>
        </ul>

        <form @submit.prevent="createTodo">
            <input name="todo" v-model="newTodoName">

            <button type="submit" :disabled="!newTodoName.length">
                Create todo
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from "@/stores/todo.js";
import { storeToRefs } from "pinia";
import TodoItem from '@/components/Todo/TodoItem.vue';

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

const newTodoName = ref('');
const createTodo = () => {
    todoStore.addTodo(newTodoName.value);
    newTodoName.value = '';
};
</script>

<style scoped lang="scss">
h1 {
    color: var(--best-color-ever);
}
</style>
