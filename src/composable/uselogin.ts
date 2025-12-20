import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { tokenStorage } from '../utlis/storage'
import { loginApi } from '../api/auth'


export type LoginPayload = {
  email: string
  password: string
}

export function useLogin(){
	const router = useRouter()
	const loading = ref(false)
	const errMsg = ref<string>('')


	async function submit(payload:LoginPayload) {
	loading.value = true
	errMsg.value = ''

	try{
		console.log(payload.email,payload.password)
		const res = await loginApi(payload)

      	tokenStorage().setToken(res.token)
      	await router.push('/dashboard')
	}catch(e){
		errMsg.value = 'Login failed'
	}finally{
		loading.value = false
	}	
}
return{loading,errMsg,submit}
}