import { createStore } from 'vuex'
import {setToken} from "@/utils/token"
export default createStore({
  state: {
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    setUserInfo(state,value){
      console.log(2,state,value)
      state.userInfo = value //用户数据存在vuex state
      setToken(value.uToken) //token存储了 本地
      //用户数据 在storage中也存储了一份
      localStorage.setItem("userInfo",JSON.stringify(value))
    }
  },
  actions: {
  },
  modules: {
  }
})
