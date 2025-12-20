import { http } from "./http";

import type { LoginPayload } from '../composable/uselogin'

type LoginResponse = {
  token: string
}

export async function loginApi(payload: LoginPayload): Promise<LoginResponse> {
  
if (import.meta.env.DEV) {
    return Promise.resolve({ token: 'mock-token' })
  }

  const { data } = await http.post<LoginResponse>('/auth/login', payload)
  return data
}