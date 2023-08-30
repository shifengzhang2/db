<template>
    <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">榜单</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
    import {ref,onMounted} from "vue"
    import {useRouter,useRoute} from "vue-router"
    const router = useRouter()
    const route  = useRoute()
    const active = ref(0)
    const change = (value)=>{
        switch(value){
            case 0:
            router.push({name:"Home"})
            break
            case 1:
            router.push({name:"Ranking"})
            break
            case 2:
            router.push({name:"My"})
            break

        }
    }
    onMounted(()=>{ //组件挂在后
        if(route.name==="Home"){
            active.value=0
        }else if(route.name==="Ranking"){
            active.value=1
        }else if(route.name==="My"){
            active.value=2
        }
    })
</script>
