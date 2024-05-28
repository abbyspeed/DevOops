<template>
    <div class="container">
        <div class="signupForm">
            <h3>Sign up an Account</h3>
            <form>
                <customForm v-for="form in form" 
                    :title="form.title" 
                    :placeholderText="form.placeholderText" 
                    :isPassword="form.isPassword"
                    :key="form.id + 1"></customForm>
            </form>
            <button class="mainBtn">Sign Up</button>
            <router-link :to="{ name: 'Login' }">
                <center>Have an account? Log in now!</center>
            </router-link>
        </div>
        <div class="logoSection">
            <img :src="require('/src/assets/logo.png')" alt="LingoNow" class="logo"/>
            <h2>LingoNow</h2>
        </div>
    </div>
</template>

<script>
const id = 0;

export default{
    data(){
        return{
            form: [
                {
                    id: id,
                    title: "Full name",
                    placeholderText: "e.g Qistina Ridhwan",
                    isPassword: false
                },
                {
                    id: id,
                    title: "Email address",
                    placeholderText: "e.g qistina@gmail.com",
                    isPassword: false
                },
                {
                    id: id,
                    title: "Username",
                    placeholderText: "e.g Qistina901",
                    isPassword: false
                },
                {
                    id: id,
                    title: "Password",
                    placeholderText: "e.g *********",
                    isPassword: true
                },
                {
                    id: id,
                    title: "Confirm password",
                    placeholderText: "e.g *********",
                    isPassword: true
                }
            ]
        }
    }
}
</script>

<style>
.container{
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    border: 1px solid grey;
    transform: translate(50%, 0%);
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

.signupForm{
    flex: 1;
    height: 100%;
    text-align: left;
    padding: 10px 20px 25px 20px;
}

h3{
    text-align: center;
    margin: 30px 0;
}

a{
    color: black;
    font-size: 12px;
    text-align: center;
}
</style>