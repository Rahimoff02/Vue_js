<script setup>
    import '../../assets/login.css'
    import axios from 'axios'
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div class="loginbox bg-white">
            <div class="loginbox-title">SIGN IN</div>
            <div class="loginbox-social">
                <div class="social-title ">Connect with Your Social Accounts</div>
                <div class="social-buttons">
                    <a href="" class="button-facebook">
                        <i class="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" class="button-twitter">
                        <i class="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" class="button-google">
                        <i class="social-icon fa fa-google-plus"></i>
                    </a>
                </div>
            </div>


            <div class="loginbox-or">
                <div class="or-line"></div>
                <div class="or">OR</div>
            </div>

            <form @submit.prevent="register">

                <div class="loginbox-textbox">
                    <input type="text" class="form-control" placeholder="Name" v-model="name" autocomplete="on">
                </div>
                <div class="loginbox-textbox">
                    <input type="text" class="form-control" placeholder="Surname" v-model="surname" autocomplete="on">
                </div>

                <div class="loginbox-textbox">
                    <input type="text" class="form-control" placeholder="Email" v-model="email" autocomplete="on">
                </div>

                <div class="loginbox-textbox">
                    <input type="text" class="form-control" placeholder="Phone" v-model="phone" autocomplete="on">
                </div>

                <div class="loginbox-textbox">
                    <input type="password" class="form-control" placeholder="Password" v-model="password" autocomplete="on">
                </div>

                <p v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</p>

                <div class="loginbox-forgot">
                    <a href="">Forgot Password?</a>
                </div>
                <div class="loginbox-submit">
                    <input type="submit" class="btn btn-primary btn-block" value="Register">
                </div>

                <div class="loginbox-signup">
                    <RouterLink :to="{ name : 'login'}">Sign in</RouterLink>
                </div>
            </form>
        </div>
     
    </div>

</template>

<script>
    export default {
    data() {
        return {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        async register() {
            if (!this.email || !this.password) {
                this.errorMessage = "Email and password are required";
                return;
            }
            try {
                const response = await axios.post("http://localhost:8000/api/register", {
                    email: this.email,
                    password: this.password,
                    phone: this.phone,
                    name: this.name,
                    surname: this.surname,
                });
                this.token = response.data.token;
                // Token'ı sakla veya kullanıcıyı yönlendir
                this.$router.push({ name: "login" });
            }
            catch (error) {
                console.error(error);
            }
        },
    },
    components: { RouterLink }
};
</script>