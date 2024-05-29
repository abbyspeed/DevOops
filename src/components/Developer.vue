<template>
    <div class="developer">
      <img src="@/assets/account-icon.png" :alt="name" />
      <p>{{ name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Developer',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .developer {
    width: 100px;
    text-align: center;
  }
  
  .developer img {
    width: 100px;
    height: 100px;
    background-color: #ff9800;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  
  .developer p {
    margin-top: 0.5rem;
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  </style>
  