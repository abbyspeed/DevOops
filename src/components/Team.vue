<template>
    <div class="team">
      <h3>Developer Team</h3>
      <div class="developers">
        <Developer name="Hana Humaira" />
        <Developer name="Haneen Mo'men" />
        <Developer name="Wan Nurnabihah" />
        <Developer name="Norliyana Aisyah" />
        <Developer name="Sakif Hossain" />
      </div>
    </div>
  </template>
  
  <script>
  import Developer from './Developer.vue';
  
  export default {
    name: 'Team',
    components: {
      Developer
    }
  };
  </script>
  
  <style scoped>
  .team {
    background-color: orange;
    padding: 50px 100px;
    color: black;
  }
  
  .team h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .developers {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  </style>
  