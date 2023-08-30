import req from "@/utils/request"
//首页数据列表
export const getHomeList = ()=>{
    return req({
        url:"/getInfoByHome.php"
    })
}
//更多
export const goHomeList = (tId)=>{
    return req({
        url:"/goHomeMoreList.php",
        params:{tId}
    })
}