<script lang="ts" setup>
const props = defineProps<{
  title: string
  subtitle?: string
}>()

const emit = defineEmits<{
  (e: 'logout'): void
}>()

const onLogout = () => {
  emit('logout')
}

</script>
<template>
 <header class="dashboard-header">
    <div class="dashboard-header__left">
      <div class="dashboard-header__logo">
        <span>M</span>
      </div>
      <div class="dashboard-header__text">
        <h1 class="dashboard-header__title">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="dashboard-header__subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div class="dashboard-header__right">
      
      <button class="btn btn-outline" type="button" @click="onLogout">
        登出
      </button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use '../assets/style/style' as *;


.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
}

.dashboard-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dashboard-header__logo {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #e0f2fe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #0369a1;
}

.dashboard-header__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dashboard-header__title {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
}

.dashboard-header__subtitle {
  font-size: 13px;
  color: #64748b;
}

.dashboard-header__right {
  display: flex;
  align-items: center;
}


</style>