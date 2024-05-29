<template>
    <div class="team">
      <h3>Developer Team</h3>
      <div class="developers">
        <OurDeveloper name="Hana Humaira" />
        <OurDeveloper name="Haneen Mo'men" />
        <OurDeveloper name="Wan Nurnabihah" />
        <OurDeveloper name="Norliyana Aisyah" />
        <OurDeveloper name="Sakif Hossain" />
      </div>
    </div>
  </template>
  
  <script>
    import OurDeveloper from './OurDeveloper.vue';

    export default {
      components: {
        OurDeveloper
      }
    };
  </script>
  
  <style scoped>
  .team {
    background-color: #FF9B3F;
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
  