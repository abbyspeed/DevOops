import { reactive } from 'vue';

const state = reactive({
  slangs: [
    { Slang: 'Delulu', Date: '2024-22-05', Manage: '-' },
    { Slang: 'IYKYK', Date: '2024-03-05', Manage: '-' },
    { Slang: 'Rizz', Date: '2024-01-02', Manage: '-' }
  ],
  addSlang(newSlang) {
    this.slangs.push(newSlang);
    console.log('Slangs after addition:', this.slangs);
  }
});

export default state;
