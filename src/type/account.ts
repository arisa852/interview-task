export type AccountStatus = 'ON' | 'OFF'

export type RoleLevel = 'ADMIN' | 'EDITOR'|  'USER' | 'CLIENT'   

export interface Account {
  id: string
  name: string
  email: string
  role: RoleLevel
  status: AccountStatus
  createdAt: string
}


export interface AccountFormDto {
  name: string
  email: string
  roleLevel: RoleLevel
  status: AccountStatus
}