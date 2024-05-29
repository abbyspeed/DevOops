<template>
    <div class="table-container">
        <!--<form @submit.prevent="addNewEntry">
            <input v-model="newSlang.Slang" placeholder="Enter slang" required />
            <input v-model="newSlang.Date" placeholder="Enter date" required />
            <button type="submit">Add</button>
        </form>-->

        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <td v-for="(column, colIndex) in columns" :key="colIndex">{{ row[column] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    //name: 'SlangTable',
    data() {
        return {
            columns: ['Slang', 'Date', 'Manage'],
            rows: [
                { Slang: 'Delulu', Date: '22/5/2024', Manage: '-' },
                { Slang: 'IYKYK', Date: '3/5/2024', Manage: '-' },
                { Slang: 'Rizz', Date: '1/2/2024', Manage: '-' }
            ],
            newSlang: {
                Slang: '',
                Date: ''
            }
        };
    },
    /*methods: {
        addNewEntry() {
            this.rows.push({
                ...this.newSlang,
                Manage: '-'
            });
            this.newSlang.Slang = '';
            this.newSlang.Date = '';
        }
    }*/
};
</script>

<style scoped>
.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/*form {
    margin-bottom: 20px;
}

input {
    margin-right: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 8px 16px;
    background-color: #FF9B3F;
    color: #2C3E50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}*/

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
    /* Optional: Alternating row colors for better readability */
}

tbody tr:nth-child(even) {
    background-color: #fef2e6;
}
</style>