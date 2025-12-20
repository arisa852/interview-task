<template>
	<div>
		<h1>Dashboard</h1>
		<button @click="logout">Logout</button>
	</div>
</template>
<script lang="ts" setup>

import { useRouter } from 'vue-router';
import { tokenStorage } from '../utlis/storage';

const router = useRouter()

const logout = ()=>{
	tokenStorage().clearToken()
	router.push('./login')
}


</script>