<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbar">
    <div class="logoSection">
      <img :src="require('/src/assets/logo.png')" alt="LingoNow" class="logo" />
      <h2>LingoNow</h2>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Manage</a></li>
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
  /* Ensure padding is included in the width */
  color: white;
  background-color: #FF9B3F;
  /* Optional: Add background color for better visibility */
  font-family: 'Inter', sans-serif;
  /* Apply Inter font */
}

.logoSection {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
  padding: 0px;
  /* Ensure minimum width for the logo section */
}

.logoSection h2 {
  margin: 0;
  font-size: 18px;
  /* Adjust font size */
}

.logo {
  width: 40px;
  /* Adjust the width to make the logo smaller */
  height: auto;
  /* Maintain aspect ratio */
  margin-right: 10px;
  /* Space between logo and text */
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
}

.menu ul li a:hover {
  color: #ff7200;
}

.userProfile {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  min-width: 100px;
  /* Ensure minimum width for the user profile section */
}

.user {
  width: 40px;
  /* Adjust the width to make the user image smaller */
  height: auto;
  /* Maintain aspect ratio */
  border-radius: 50%;
  /* Make the image circular */
  margin-left: 10px;
  /* Space between user image and text */
}

.userProfile p {
  margin-left: 10px;
  /* Space between user image and text */
}


/* Responsive Design */
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
