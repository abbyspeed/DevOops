<template>
    <div class="vision-mission">
      <div class="vision">
        <h3>Vision</h3>
        <p>To bridge the generational language gap by ensuring seamless communication and 
          understanding through the timely dissemination of contemporary slang, fostering 
          a more connected and informed community.
        </p>
      </div>
      <div class="mission">
        <h3>Mission</h3>
        <p>To provide an easy-to-use platform that explains the latest slang, 
          helping older generations engage effectively with today's youth 
          and promoting intergenerational understanding.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisionMission'
  };
  </script>
  
  <style scoped>
  .vision-mission {
    background-color: white;
    padding: 50px 100px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  
  .vision, .mission {
    width: 45%;
  }
  
  .vision h3, .mission h3 {
    margin-bottom: 1rem;
    color: orange;
  }
  </style>
  