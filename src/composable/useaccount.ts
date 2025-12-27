import { ref } from 'vue'
import { getAccounts,updateAccount,deleteAccount } from '../api/service'
import type{ Account,AccountFormDto } from '../type/account'



export function useAccounts() {
  const loading = ref(false)
  const errMsg = ref('')
  const accounts = ref<Account[]>([])

  // 取得列表
  const fetchAccounts = async () => {
    loading.value = true
    errMsg.value = ''

    try {
      const res = await getAccounts()
      accounts.value = res.data
    } catch (e: any) {
      console.error('取得失敗', e)
      errMsg.value = e?.message ?? '取得帳號列表失敗'
    } finally {
      loading.value = false
    }
  }

  // 更新
  const updateAccountById = async (id: string, payload: AccountFormDto) => {
    try {
      await updateAccount(id, payload)
      await fetchAccounts() 
    } catch (e: any) {
      console.error('更新帳號失敗', e)
      errMsg.value = '更新帳號失敗'
    }
  }

  // 刪除
  const deleteAccountById = async (id: string) => {
    try {
      await deleteAccount(id)
      await fetchAccounts()
    } catch (e: any) {
      console.error('刪除帳號失敗', e)
      errMsg.value = '刪除帳號失敗'
    }
  }

  return {
    loading,
    errMsg,
    accounts,
    fetchAccounts,
    updateAccountById,
    deleteAccountById,
  }
}
