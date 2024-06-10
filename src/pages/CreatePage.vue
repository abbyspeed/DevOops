<template>
    <navBar></navBar>

    <div class="form-container">
        <form @submit.prevent="submitForm">
            <label for="slang">Slang: </label>
            <input v-model="newSlang.Slang" type="text" id="slang" required />
            <p> </p>
            <label for="date">Date: </label>
            <input v-model="newSlang.Date" type="date" id="date" required />
            <p> </p>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import state from '../state.js';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const newSlang = reactive({
            Slang: '',
            Date: '',
            Manage: '-'
        });

        const router = useRouter();

        const submitForm = () => {
            console.log('New Slang:', newSlang);
            state.addSlang(newSlang);
            console.log('Updated Slangs:', state.slangs);
            router.push('/Manage'); // Use the correct route path
        };

        return {
            newSlang,
            submitForm
        };
    }
};
</script>

<style scoped>
.form-container {
    padding: 25px;
}

input {
    border-radius: 10px;
    color: #2C3E50;
    height: 3vh;
    width: 25vh;
}

button {
    background-color: #ff9b3f;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    padding: 10px;
    cursor: pointer;
    color: #2C3E50;
}
</style>