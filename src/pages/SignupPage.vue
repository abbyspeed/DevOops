<template>
    <div class="container">
        <div class="signupForm">
            <h3>Sign up an Account</h3>
            <form @submit.prevent="createUser()">
                <customForm v-for="form in form" 
                    :title="form.title" 
                    :placeholderText="form.placeholderText" 
                    :isPassword="form.isPassword"
                    :key="form.id + 1"
                    v-model="form.inputData"></customForm>
            
                <button type="submit" class="mainBtn">Sign Up</button>
            </form>
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
                    isPassword: false,
                    inputData: ""
                },
                {
                    id: id,
                    title: "Email address",
                    placeholderText: "e.g qistina@gmail.com",
                    isPassword: false,
                    inputData: ""
                },
                {
                    id: id,
                    title: "Username",
                    placeholderText: "e.g Qistina901",
                    isPassword: false,
                    inputData: ""
                },
                {
                    id: id,
                    title: "Password",
                    placeholderText: "e.g *********",
                    isPassword: true,
                    inputData: ""
                },
                {
                    id: id,
                    title: "Confirm password",
                    placeholderText: "e.g *********",
                    isPassword: true,
                    inputData: ""
                }
            ]
        }
    },
    methods: {
        createUser(){
            const newUserData = [];

            for(let i=0; i<this.form.length; i++){
                newUserData.push(this.form[i].inputData);
            }

            this.$router.push('/Login');
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
    margin-top: 60px;
}

.logoSection{
    flex: 1;
    background-color: #FF9B3F;
    border-radius: 25px;
    padding: 170px 0;
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