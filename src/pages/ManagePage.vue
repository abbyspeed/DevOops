<template>
    <navBar></navBar>
    <div class="test">
        <h2>Manage Slangs</h2>
    </div>
    <button class="newSlang">Create a new slang</button>
    <slangTable></slangTable>
    <!--<slangTable v-if="showForm"></slangTable>-->
</template>

<!--<script>
import SlangTable from './components/SlangTable.vue'; // Adjust this path based on your project structure

export default {
    components: {
        SlangTable
    },
    data() {
        return {
            showForm: false
        };
    },
    methods: {
        toggleForm() {
            this.showForm = !this.showForm;
        }
    }
};
</script>-->

<style scoped>
.newSlang {
    background-color: #ff9b3f;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    padding: 10px;
    cursor: pointer;
    color: #2C3E50;
}
</style>