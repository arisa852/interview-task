import { createRouter ,createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import { tokenStorage } from "../utlis/storage";

const router = createRouter({
	history:createWebHistory(),
	routes:[
		{path: '/',redirect:'/login'},
		{path:'/login',name:'login',component:LoginView},
		{path:'/dashboard',name:'dashboard',component:DashboardView,meta: { requiresAuth: true }},
	],
})


router.beforeEach((to) =>{
	if(to.meta.requiresAuth && !tokenStorage().getToken()){
		return '/login'
	}
})

export default router