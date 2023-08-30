//用localStorage 存储数据
//获取数据：
export const getToken = ()=>{
    return localStorage.getItem("user")
}
//存数据
export const setToken = (value)=>{
    localStorage.setItem("user",value)
}
//消除
export const clearToken = ()=>{
    localStorage.removeItem("user")
}
 
