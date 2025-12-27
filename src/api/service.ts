import {http} from'./http'

import type { Account } from '../type/account'
import type { AccountFormDto } from '../type/account'


export function getAccounts(){
	return http.get<Account[]>('/accounts')
}

export function createdAccounts(payload: AccountFormDto){
	return http.post('/create-account', payload)
}

export function updateAccount(id: string, payload: AccountFormDto) {
	return http.patch(`/update-account/${id}`, payload)
}

export function deleteAccount(id: string) {
  return http.delete(`/delete-account/${id}`)
}