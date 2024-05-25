<template>
    <div class="container">
        <div class="logoSection">
            <img :src="require('/src/assets/logo.png')" alt="LingoNow" class="logo"/>
            <h2>LingoNow</h2>
        </div>
        <div class="loginForm">
            <h3>Log into LingoNow</h3>
            <customForm></customForm>
            <button class="mainBtn">Login</button>
            <a href="#">
                <center>Don't have an account? Sign up now!</center>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.container{
    display: flex;
    width: 50%;
    height: 400px;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    border: 1px solid grey;
    transform: translate(50%, 35%);
}

.logoSection{
    flex: 1;
    background-color: #FF9B3F;
    border-radius: 25px;
    padding: 55px 0;
}

.logo{
    width: 200px;
    height: 200px;
}

.loginForm{
    flex: 1;
    height: 100%;
    text-align: left;
    padding: 10px 20px;
}

h3{
    text-align: center;
    margin: 40px 0;
}

a{
    color: black;
    font-size: 12px;
    text-align: center;
}
</style>