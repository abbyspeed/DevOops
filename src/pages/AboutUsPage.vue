<template>
  <navBar></navBar>
      <div class="background">
        <about></about>
        <visionMission></visionMission>
        <team></team>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    components: {
      NavBar,
      About,
      VisionMission,
      Team
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background-color: #f0f0f0;
    color: black;
  }
  
  .background {
    width: 100%;
    background-color: orange;
    background-size: cover;
  }
  </style>
  