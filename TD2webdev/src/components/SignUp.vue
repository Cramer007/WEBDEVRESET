<script lang="ts" setup>
import {ref} from 'vue'
import BasicInput from './BasicInput.vue';
import { postJSON } from './api-client/api-client';

const username = ref('')
const password = ref('')
const email = ref('')

function onSubmit(e:Event){
    postJSON("/api/users", {
        username : username.value,
        email : email.value,
        password : password.value,
    })
}

</script>

<template>
    <form id="signup"
    @submit.prevent="onSubmit($event)">
        <fieldset>
            <legend>Please fill in the form</legend>
            <BasicInput 
                id = "username"
                type = "text"
                label = "Username"
                v-model = "username"
            />
            <BasicInput 
                id = "Email"
                type = "email"
                label = "email"
                v-model = "email"
            />
            <BasicInput 
                id = "password"
                type = "text"
                label = "Password"
                v-model = "password"
            />
            <input type="submit" value="Sign Up">
        </fieldset>
    </form>
</template>
