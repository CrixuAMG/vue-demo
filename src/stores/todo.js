import {ref} from 'vue'
import {acceptHMRUpdate, defineStore} from 'pinia'

export const useTodoStore = defineStore('todo', () => {
    const todos = ref([])

    const addTodo = (newTodoText) => {
        todos.value = [...todos.value, newTodoText];
    };
    const removeTodo = (todoIndex) => {
        todos.value = todos.value.filter((_, index) => index !== todoIndex);
    }

    return {todos, addTodo, removeTodo}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}
