<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbar">
    <div class="logoSection">
      <img :src="require('/src/assets/logo.png')" alt="LingoNow" class="logo" />
      <h2>LingoNow</h2>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About Us</router-link></li>
        <li><router-link to="/Categories">Categories</router-link></li>
        <li><router-link to="/Manage">Manage</router-link></li>
      </ul>
    </div>
    <div class="userProfile">
      <img :src="require('/src/assets/user.png')" alt="user" class="user" />
      <p>User</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  color: white;
  background-color: #FF9B3F;
  font-family: 'Inter', sans-serif;
}

.logoSection {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
  padding: 0px;
}

.logoSection h2 {
  margin: 0;
  font-size: 18px;
}

.logo {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
}

.menu ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin-left: 20px;
}

.menu ul li a {
  text-decoration: none;
  color: #fff;
  font-family: Arial;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  padding: 10px 30px;
  font-size: 16px;
}

.menu ul li a:hover {
  color: black;
}

.userProfile {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  min-width: 100px;
}

.user {
  width: 40px;
  height: auto;
  border-radius: 50%;
  margin-left: 10px;
}

.userProfile p {
  margin-left: 10px;
}


@media (max-width: 768px) {
  .menu ul {
    flex-direction: column;
    align-items: center;
  }

  .menu ul li {
    padding: 10px 20px;
  }
}
</style>
