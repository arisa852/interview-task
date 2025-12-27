import axios from "axios";

import { tokenStorage } from "../utlis/storage";

export const http = axios.create({
	baseURL:import.meta.env.VITE_API_BASE_URL,
})

http.interceptors.request.use((config) =>{
	config.headers = config.headers ?? {}
  	config.headers.interviewerName =
    import.meta.env.VITE_INTERVIEWER_NAME ?? 'yourEnglishName'

	const token = tokenStorage().getToken()
	if(token){
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

http.interceptors.response.use(
	(res) =>res,
	(err) =>{
		if(err.response?.status === 401){
			tokenStorage().clearToken()
			location.href ='/login'
		}
		return Promise.reject(err)
		
	}
)

export default http