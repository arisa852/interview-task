<template>
<div>
	<h1>登入</h1>
	<form @submit.prevent="onSubmit">
		<label>
			<span>帳號</span>
			<input type="email" v-model.trim="email" required placeholder="vue@example.com" />
		</label>
		<label>
			<span>密碼</span>
			<input type="password" v-model="password" required placeholder="請輸入密碼" minlength="6" />
		</label>
		<button type="submit" :disabled="loading">{{ loading? '登入中':'登入' }}</button>
		<p v-if="errMsg">{{ errMsg }}</p>
	</form>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useLogin } from '../composable/uselogin';

const email = ref(
	import.meta.env.DEV ? import.meta.env.VITE_DEV_EMAIL ?? '' : ''
)
const password = ref<string>(
	import.meta.env.DEV ? import.meta.env.VITE_DEV_PASSWORD ?? '' : ''
)

const { loading, errMsg, submit } = useLogin()

const onSubmit = () => {
  submit({ email: email.value, password: password.value })
}


</script>