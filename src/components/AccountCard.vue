<script lang="ts" setup>
import type { Account, AccountFormDto } from '../type/account'

const props = defineProps<{
  account: Account
}>()

const emit = defineEmits<{
  (e: 'edit', id: string, payload: AccountFormDto): void
  (e: 'delete', id: string): void
}>()

const onDelete = () => emit('delete', props.account.id)
const onEdit = () => {
 console.log('已點擊')
}

</script>
<template>
<div class="card account-card">
    <h3>{{ account.name }}</h3>
    <p>{{ account.email }}</p>
    <p>{{ account.role}}</p>
    <p>{{ account.status }}</p>

    <button @click="onEdit">編輯</button>
    <button @click="onDelete">刪除</button>
  </div>
</template>
<style lang="scss" scoped>






</style>