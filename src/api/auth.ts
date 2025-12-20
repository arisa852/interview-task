import { http } from "./http";

import type { LoginPayload } from '../composable/uselogin'

type LoginResponse = {
  token: string
}

export async function loginApi(payload: LoginPayload): Promise<LoginResponse> {
	if (import.meta.env.DEV) {
    
		const DEV_EMAIL = import.meta.env.VITE_DEV_EMAIL ?? ''
    	const DEV_PASSWORD = import.meta.env.VITE_DEV_PASSWORD ?? ''


    	if (payload.email !== DEV_EMAIL || payload.password !== DEV_PASSWORD) {
      		throw new Error('Invalid credentials')
   		 }

    	return { token: 'mock-token' }
  	}
	
  const { data } = await http.post<LoginResponse>('/auth/login', payload)
  return data
}