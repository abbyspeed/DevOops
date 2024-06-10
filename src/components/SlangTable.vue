<template>
    <div class="table-container">
        <button class="newSlang">
            <router-link to="/Create">Create a new slang</router-link>
        </button>

        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in slangs" :key="rowIndex">
                    <td v-for="(column, colIndex) in columns" :key="colIndex">{{ row[column] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed } from 'vue';
import state from '../state.js';

export default {
    setup() {
        const slangs = computed(() => {
            console.log('Recomputed slangs:', state.slangs);
            return state.slangs;
        });

        return {
            slangs,
            columns: ['Slang', 'Date', 'Manage']
        };
    }
};
</script>

<style scoped>
.newSlang {
    background-color: #ff9b3f;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    padding: 10px;
    cursor: pointer;
    color: #2C3E50;
    position: absolute;
    bottom: 0;
}

.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

table {
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    width: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    color: #2C3E50;
}

th,
td {
    padding: 12px;
    text-align: center;
}

thead th {
    background-color: #FF9B3F;
    color: #2C3E50;
}

tbody tr:nth-child(odd) {
    background-color: #fde4cb;
}

tbody tr:nth-child(even) {
    background-color: #fef2e6;
}
</style>