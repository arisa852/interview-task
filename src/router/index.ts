import { createRouter ,createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";


const router = createRouter({
	history:createWebHistory(),
	routes: [
    {
      path: '/',
      redirect: '/dashboard', 
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    
  ],
})



export default router