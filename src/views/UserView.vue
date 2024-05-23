<template>
    <div>
        <h2>Hallo, wie ben je?</h2>

        <form @submit.prevent="submitForm">
            <input placeholder="Ik ben..." v-model="name" />

            <button type="submit">
                Submit
            </button>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();
const name = ref('');

const submitForm = () => {
    router.push({
        name: 'userGreeting',
        params: {
            name: name.value,
        },
    });
}
</script>
