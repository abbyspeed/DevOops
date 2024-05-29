<template>
  <div class="cont">
    <header class="header">
      <div class="nav">
        <h1 class="logo">Logo</h1>
        <div class="menu">
          <a href="#" class="menu-item">Home</a>
          <a href="#" class="menu-item">About Us</a>
          <a href="#" class="menu-item">Categories</a>
          <a href="#" class="menu-item">Manage</a>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b366fb62b1a37ddf4c7ba876eec7a8aec9e26cfc28009f9b1065ab2a52a3b6fa?apiKey=d314e47cd2b145d4ba1bdf6144e8401a" alt="Menu Icon" class="menu-icon" />
          <router-link :to="{ name: 'Login' }" class="menu-item">Login</router-link>
        </div>
      </div>
      <div class="search-section">
        <h2 class="search-title">Search the SLANG</h2>
        <section class="search-container">
          <form class="search-form" role="search">
            <label for="search-input" class="visually-hidden">Search your slang...</label>
            <input type="search" id="search-input" class="search-input" placeholder="Search your slang..." aria-label="Search your slang...">
            <button type="submit" class="search-button">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29febdd82fa653c3bfa21b2be25d8331191af8f5bcd2e611cb48f49ca70e8ace?apiKey=d314e47cd2b145d4ba1bdf6144e8401a" alt="Search Icon" class="search-icon">
            </button>
          </form>
        </section>
      </div>
      <aside class="image-column">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47c5ca4f2082069e4c5389ff4a00f7678d0f6bb81bb554cab645de1bce1fc080?apiKey=d314e47cd2b145d4ba1bdf6144e8401a" alt="Decorative image" class="decorative-image">
      </aside> 
    </header>
    <main class="main-content">
      <div class="rectangle-container">
        <div class="rectangle-div">
         <section class="recent-section">
     <h2 class="section-title">Recently Added</h2>
    <div class="item-button">Bussin’</div>
    <div class="item-button">Vibe check</div>
    <div class="item-button">Ditch</div>
     </section>
        </div>
        <div class="rectangle-div">
          <section class="todays-slang">
            <h2 class="section-title">Today’s Slang</h2>
            <article class="slang-article">
              <h3 class="slang-term">Delulu</h3>
              <p class="slang-description">The term “delulu” is a slang abbreviation of the word “delusional”. Describe individuals who display odd or extreme behaviour, particularly superfans or dating partners.</p>
            </article>
          </section>
        </div>
        <div class="rectangle-div">
          <section class="top-used-slang">
            <h2 class="section-title">Top Used Slang</h2>
           
            
              <div class="list">1.IYKYK</div>
              <div class="list">2.Slay</div>
              <div class="list">3.Lit</div>
              <div class="list">4.Goat</div>
              <div class="list">5.Rizz</div>
           
          
          </section>
        </div>
      </div>
    </main>
  </div>
</template>




<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.cont {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;

 height: max-content;
}

.header {
  background-color: #ff9b3f;
  height: 400px;
  flex-shrink: 0;
  position: relative;
}

.nav {
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding-top: 10px; 
}

.logo {
  font-size: 24px;
  color: #000;
  font-weight: 700;
  text-align: center;
  font-family: Inter, sans-serif;
  margin-left: 100px;
  margin-right: 300px;
}

.menu {
  display: flex;
  
}

.menu-item {
  padding-left: 20px;
  font-size: 32px;
  display: inline-block;
  font-family: Inter;
  color: #000;
  text-align: center;
}

.login-item {
  padding-top: 20px;
  margin-left: 10px;
  font-size: 32px;
  display: inline-block;
  font-family: Inter;
  color: #000;
  text-align: center;
}

.menu-icon {
  width: 30px;
  height: auto;
  margin-left: 570px;
}

.search-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}

.search-title {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
}

.search-container {
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 0px;
 
  font-size: 32px;
  color: #6e6e6e;
  font-weight: 400;
  padding: 18px 30px;
}

@media (max-width: 991px) {
  .search-container {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}

.search-form {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-input {
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  border: none;
  outline: none;
  font-size: inherit;
  color: inherit;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.search-icon {
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 36px;
}
.image-column { 
  display: flex; 
  flex-direction: column; 
  width: 35%; 
  margin-left: 1500px;
  margin-top:-140px;
}



.decorative-image { 
  width: 55%; 
}
.main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  margin-left: 330px;
}

.rectangle-container {
  display: flex;
}

.rectangle-div {
  width: calc(33.33% - 20px); 
  margin-right: 100px; 
  position: relative;
  border-radius: 25px;
  background-color: rgba(117, 117, 117, 0);
  border: 3px solid #757575;
  box-sizing: border-box;
  height: 387px;
}




.recently-added,
.todays-slang {
  width: 100%;
  max-width: 600px;
}
.top-used-slang {
  text-align: left;
  margin-left: 75px;
}
.section-title {
  width: 249px;
position: relative;
font-size: 32px;
display: inline-block;
font-family: Inter;
color: #000;
text-align: center;
}

.slang-list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
}

.slang-item {
  font-family: JetBrains Mono, sans-serif;
  border-radius: 10px;
  background-color: rgba(255, 155, 63, 1);
  padding: 5px 10px;
  text-align: center;
}

.slang-article {
  text-align: center;
  margin-top: 10px;
}

.slang-term {
  font-family: JetBrains Mono, sans-serif;
  border-radius: 20px;
  background-color: rgba(255, 155, 63, 1);
  margin-top: 15px;
  white-space: nowrap;
  justify-content: center;
  padding: 19px 60px;
  cursor: pointer;
  border: none;
  width: 40%;
  margin-left: 50px;
  font-size: 24px;
  
}

.slang-description {
  font-size: 17px;
font-family: Inter;
color: #000;
}
.item-button {
  font-family: JetBrains Mono, sans-serif;
  border-radius: 20px;
  background-color: rgba(255, 155, 63, 1);
  margin-top: 15px;
  white-space: nowrap;
  justify-content: center;
  padding: 19px 60px;
  cursor: pointer;
  border: none;
  width: 40%;
  margin-left: 50px;
  font-size: 24px;
  
}
@media (max-width: 991px) {
  .item-button {
    white-space: initial;
    padding: 0 20px;
  }
  .list{
    margin: 0;
font-family: inherit;
font-size: inherit;
padding-left: 32px;
text-align: left !important;
  }
}
</style>
