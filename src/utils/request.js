import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost:9999/request/",
    timeout:30000
})
//请求拦截：
axios.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})
//响应拦截：
axios.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})
export default axios