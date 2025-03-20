import {createApp} from "vue"

import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"
import 'uno.css'

const routes = [
    {
        name : 'Home',
        path : '/',
        redirect : '/signin'
    },
    {
        name : 'SignIn',
        path : '/signin',
        component : SignIn
    },
    {
        name : 'SignUp',
        path : '/signup',
        component : SignUp
    }
]

const router = createRouter({
    history : createWebHashHistory(), 
    routes,
})



createApp(App)
.use(router)
.mount('#app')

// const radioButtons = document.querySelectorAll('[name="formType"]')

// const signupFormEl = document.querySelector("#signup")
// const loginFormEl = document.querySelector("#login")

// function displayAppropriateForm(event){
//     if(event.target.checked){
//         if(event.target.value =='login'){
//             signupFormEl.style.display = 'none'
//             loginFormEl.style.display = ''
//             return
//         }
//         loginFormEl.style.display = 'none'
//         signupFormEl.style.display = ''
//     }
// }


// for (const radioButton of radioButtons) {
//     radioButton.addEventListener('change', displayAppropriateForm)
// }


// if (signupFormEl) {
//     signupFormEl.addEventListener('submit', SignUp)
// }

// if (loginFormEl) {
//     loginFormEl.addEventListener('submit', LogIn)
// }