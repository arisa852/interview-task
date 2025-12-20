const TOKEN_KEY = 'AUTH_TOKEN'


export const tokenStorage = () =>{
	function getToken():string|null{
		return localStorage.getItem(TOKEN_KEY)
	}

	function setToken(value:string){
		return localStorage.setItem(TOKEN_KEY,value)
	}

	function clearToken(){
		return localStorage.removeItem(TOKEN_KEY)
	}
	return{
		getToken,
		setToken,
		clearToken
	}
}