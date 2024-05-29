<template>
    <div class="about">
      <div class="description">
        <h2>About LingoNow</h2>
        <p>
          <b><i>LingoNow</i></b> is designed to help lecturers, parents, and community members stay updated with
          the latest slang used by today's youth. Our system explains new slang terms, ensuring everyone stays
          connected and understands the evolving language trends. Stay relevant and improve communication across
          generations with LingoNow.
        </p>
      </div>
      <div class="penguin">
        <img src="@/assets/penguin.png" alt="Penguin Flat Image" height="300px" width="300px" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style scoped>
  .about {
    background-color: orange;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .description {
    flex: 1;
    margin-right: 2rem;
  }
  
  .description h2 {
    margin-bottom: 1rem;
    color: black;
  }
  
  .description p {
    color: black;
  }
  </style>