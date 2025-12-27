<template>
	<main class="page">
   
    <DashboardHeader
      title="帳號管理系統"
      subtitle="管理您的所有帳號"
      @logout="handleLogout"
    />

    <div class="main-content">
     
      <div class="toolbar">
        <div class="toolbar__search">
          <input
            v-model="searchKeyword"
            type="text"
            class="toolbar__search-input"
            placeholder="搜尋帳號（姓名、郵件、角色）…"
          />
        </div>

        <button class="btn btn-primary" type="button" @click="handleCreate">
          <span class="btn__icon">+</span>
          新增帳號
        </button>
      </div>

     
      <section class="stats-row">
        <div class="stats-card">
          <p class="stats-card__label">總帳號數</p>
          <p class="stats-card__value">{{ totalCount }}</p>
        </div>

        <div class="stats-card">
          <p class="stats-card__label">啟用中</p>
          <p class="stats-card__value">{{ activeCount }}</p>
        </div>

        <div class="stats-card">
          <p class="stats-card__label">已停用</p>
          <p class="stats-card__value">{{ inactiveCount }}</p>
        </div>
      </section>

      <!-- loading / error 狀態 -->
      <p v-if="loading" class="state-text">載入中...</p>
      <p v-else-if="errMsg" class="state-text state-text--error">
        {{ errMsg }}
      </p>

      <!-- 帳號列表 -->
      <section v-else class="accounts-grid">
        <AccountCard
          v-for="account in filteredAccounts"
          :key="account.id"
          :account="account"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </section>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import DashboardHeader from '../components/DashboardHeader.vue'
import AccountCard from '../components/AccountCard.vue'
import { useAccounts } from '../composable/useaccount'
import type { AccountFormDto } from '../type/account'

const router = useRouter()

const {
  loading,
  errMsg,
  accounts,
  fetchAccounts,
  updateAccountById,
  deleteAccountById,
} = useAccounts()

onMounted(() => {
  fetchAccounts()
})

const handleLogout = () => {
	console.log('已點擊')
}


const searchKeyword = ref('')


const filteredAccounts = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()
  if (!keyword) return accounts.value

  return accounts.value.filter((acc) => {
    return (
      acc.name.toLowerCase().includes(keyword) ||
      acc.email.toLowerCase().includes(keyword) ||
      acc.role.toLowerCase().includes(keyword)
    )
  })
})


const totalCount = computed(() => accounts.value.length)
const activeCount = computed(
  () => accounts.value.filter((acc) => acc.status === 'ON').length,
)
const inactiveCount = computed(
  () => accounts.value.filter((acc) => acc.status === 'OFF').length,
)


const handleCreate = () => {
  console.log('點擊新增帳號')
}

const handleEdit = (id: string, payload: AccountFormDto) => {
  updateAccountById(id, payload)
}

const handleDelete = (id: string) => {
  deleteAccountById(id)
}
</script>
<style lang="scss" scoped>

.page{
	 max-width: 1200px;
  	margin: 0 auto;
  	padding: 24px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.toolbar__search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}



.toolbar__search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #0f172a;
}

.stats-row {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.stats-card {
  flex: 1;
  min-width: 200px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
  padding: 18px 20px;
}

.stats-card__label {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
}

.stats-card__value {
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
}


.state-text {
  margin-top: 16px;
  font-size: 14px;
  color: #64748b;
}

.state-text--error {
  color: #dc2626;
}

.accounts-grid{
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>